import PropTypes from 'prop-types'
import React, {useEffect, useReducer, useRef} from 'react'
import {AsyncStorage, Alert, Platform, Linking} from 'react-native'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications'

import AuthAPI from '../services/AuthAPI'
import AuthReducer from '../reducers/AuthReducer'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export const AuthContext = React.createContext()

const AuthContextProvider = ({children, token}) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    isLoading: false,
    isError: false,
    errorMessage: false,
    token: null,
    user: null,
    expoPushToken: null,
  })
  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    if (token) {
      restoreUser()
    }
  }, [token])

  // Chargement des notifications
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      dispatch({
        type: 'EXPO_PUSH_TOKEN_SUCCESS',
        payload: {
          expoPushToken: token,
        },
      })
    })

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      dispatch({
        type: 'NOTIFICATION_SUCCESS',
        payload: {
          notification: notification,
        },
      })
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response)
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  // Connexion
  const signIn = async (credentials) => {
    dispatch({
      type: 'SIGN_IN_INIT',
    })

    try {
      const results = await AuthAPI.postSignIn(credentials)

      dispatch({
        type: 'SIGN_IN_SUCCESS',
        payload: {
          token: results.data.token,
          user: jwtDecode(results.data.token),
        },
      })

      await AsyncStorage.setItem('authToken', results.data.token)
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SIGN_IN_ERROR',
      })
    }
  }

  // Inscription
  const signUp = async (credentials) => {
    dispatch({
      type: 'SIGN_UP_INIT',
    })

    try {
      const results = await AuthAPI.postSignUp(credentials)

      dispatch({
        type: 'SIGN_UP_SUCCESS',
        payload: {
          user: results.data?.user,
        },
      })

      if (results.status === 201) {
        signIn({email: credentials.email, password: credentials.password})
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SIGN_UP_ERROR',
      })
    }
  }

  // Déconnexion
  const signOut = () => {
    AsyncStorage.removeItem('authToken')
    delete axios.defaults.headers.Authorization
    dispatch({
      type: 'SIGN_OUT',
    })
  }

  // Récupère le user depuis le token
  const restoreUser = async () => {
    dispatch({type: 'RESTORE_USER_INIT'})

    try {
      dispatch({
        type: 'RESTORE_USER_SUCCESS',
        payload: {
          token: token,
          user: jwtDecode(token),
        },
      })
    } catch (error) {
      console.log(error)
      dispatch({type: 'RESTORE_USER_ERROR'})
    }
  }

  // Envoi de la notification
  const schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Recevoir une notification 📬',
        body: 'Ceci est une notification de test ! 😎',
        data: {data: 'exemple de données ici'},
      },
      trigger: {seconds: 1},
    })
  }

  // // Récupération de la permission des notifications
  const registerForPushNotificationsAsync = async () => {
    let token
    if (Constants.isDevice) {
      const {status: existingStatus} = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        Alert.alert(
          'Autoriser les notifications',
          'Veuillez activer les notifications manuellement',
          [{text: 'Autoriser', onPress: () => Linking.openURL('app-settings:')}],
          {cancelable: false},
        )
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log(token)
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    return token
  }

  // Supprime les messages d'erreur
  const clearErrors = () => {
    dispatch({
      type: 'CLEAR_ERRORS',
    })
  }

  const contextValues = {
    state,
    dispatch,
    signIn,
    signUp,
    signOut,
    clearErrors,
    schedulePushNotification,
  }

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes = {
  children: PropTypes.any,
  token: PropTypes.any,
}

export default AuthContextProvider
