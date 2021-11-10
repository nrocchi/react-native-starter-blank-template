import React from 'react'

import {AppRoutes} from '../routes/AppRoutes'
import {AppScreens} from '../screens/AppScreens'
import Navigator from '../navigators/Navigator'

export default function AppStack() {
  return <Navigator screens={AppScreens} initial={AppRoutes.HOME_STACK} />
}
