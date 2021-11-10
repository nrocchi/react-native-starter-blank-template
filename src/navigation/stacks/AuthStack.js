import React from 'react'

import {AuthRoutes} from '../routes/AuthRoutes'
import {AuthScreens} from '../screens/AuthScreens'
import Navigator from '../navigators/Navigator'

export default function AuthStack() {
  return <Navigator screens={AuthScreens} initial={AuthRoutes.SIGN_IN_SCREEN} />
}
