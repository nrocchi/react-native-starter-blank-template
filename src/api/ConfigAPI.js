import axios from 'axios'
import jwtDecode from 'jwt-decode'
import {AsyncStorage} from 'react-native'

import {API_URL} from '../constants/Constants'

const API = () => {
  // Set the default options
  const defaultOptions = {
    baseURL: API_URL,
  }

  // Create instance
  const instance = axios.create(defaultOptions)

  // Update the instance config for any request
  instance.interceptors.request.use(async function (config) {
    // Set the current AUTH token for any request or delete it in axios headers if expired
    // const token = window.localStorage.getItem("authToken");
    const token = await AsyncStorage.getItem('authToken')

    if (token) {
      const {exp: expiration} = jwtDecode(token)
      if (expiration * 1000 > new Date().getTime()) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        delete config.headers.Authorization
        // RootNavigation.navigate(AuthRoutes.HOME_SCREEN);
        // RootNavigation.navigate(
        //   NavigationActions.navigate({
        //     routeName: AuthRoutes.HOME_SCREEN,
        //   })
        // );
      }
    } else {
      delete config.headers.Authorization
    }

    return config
  })

  return instance
}

export default API()
