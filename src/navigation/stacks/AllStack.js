import React from 'react'

import {AllRoutes} from '../routes/AllRoutes'
import {AllScreens} from '../screens/AllScreens'
import Navigator from '../navigators/Navigator'

export default function AllStack() {
  return <Navigator screens={AllScreens} initial={AllRoutes.AUTH_STACK} />
}
