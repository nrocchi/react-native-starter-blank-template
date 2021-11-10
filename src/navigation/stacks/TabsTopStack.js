import React from 'react'

import {TabsTopRoutes} from '../routes/TabsTopRoutes'
import {TabsTopScreens} from '../screens/TabsTopScreens'
import NavigatorTopTabs from '../navigators/NavigatorTopTabs'

export default function TabsTopStack() {
  return <NavigatorTopTabs screens={TabsTopScreens} initial={TabsTopRoutes.TABS_TOP_NEXT_SCREEN} />
}
