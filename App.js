import React, {useState, useEffect, useCallback} from 'react'
import {AsyncStorage} from 'react-native'
import {ThemeProvider} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen'
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import 'moment/min/locales'
import {StripeProvider} from '@stripe/stripe-react-native'

import {navigationRef} from './src/api/NavigationAPI'
import AuthContextProvider from './src/api/contexts/AuthContext'
import RootStack from './src/navigation/stacks/RootStack'
import theme from './src/theme'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const [token, setToken] = useState(null)

  moment.locale('fr')

  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  })

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()

        // Pre-load fonts, make any API calls you need to do here
        await restoreToken()
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady, fontsLoaded])

  if (!appIsReady || !fontsLoaded) {
    return null
  }

  async function restoreToken() {
    setToken(null)

    try {
      const token = await AsyncStorage.getItem('authToken')

      if (token) {
        const {exp: expiration} = jwtDecode(token)

        if (expiration * 1000 > new Date().getTime()) {
          setToken(token)
        } else {
          setToken(null)
        }
      } else {
        setToken(null)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContextProvider token={token}>
      <StripeProvider
        publishableKey="your-publishable-key"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.appname" // required for Apple Pay
      >
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef} onReady={onLayoutRootView}>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
      </StripeProvider>
    </AuthContextProvider>
  )
}
