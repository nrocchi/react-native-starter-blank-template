import React from 'react'

import {TabsBottomRoutes} from '../routes/TabsBottomRoutes'
import {TabsBottomScreens} from '../screens/TabsBottomScreens'
import NavigatorBottomTabs from '../navigators/NavigatorBottomTabs'

export default function HomeStack() {
  return (
    <NavigatorBottomTabs
      screens={TabsBottomScreens}
      initial={TabsBottomRoutes.TABS_BOTTOM_HOME_SCREEN}
    />
  )
}
