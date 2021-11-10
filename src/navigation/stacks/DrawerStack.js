import React from 'react'

import {DrawerRoutes} from '../routes/DrawerRoutes'
import {DrawerScreens} from '../screens/DrawerScreens'
import NavigatorDrawer from '../navigators/NavigatorDrawer'

export default function DrawerStack() {
  return <NavigatorDrawer screens={DrawerScreens} initial={DrawerRoutes.DRAWER_MENU_SCREEN} />
}
