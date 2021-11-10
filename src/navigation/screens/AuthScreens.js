import {AuthRoutes} from '../routes/AuthRoutes'

import SignInScreen from '../../components/screens/signin/SignInScreen'
import SignUpScreen from '../../components/screens/signup/SignUpScreen'

const AuthScreens = [
  {
    name: AuthRoutes.SIGN_IN_SCREEN,
    component: SignInScreen,
  },
  {
    name: AuthRoutes.SIGN_UP_SCREEN,
    component: SignUpScreen,
  },
]

export {AuthScreens}
