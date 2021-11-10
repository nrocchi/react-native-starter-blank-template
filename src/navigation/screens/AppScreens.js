import {AppRoutes} from '../routes/AppRoutes'

import TabsBottomStack from '../stacks/TabsBottomStack'
import DrawerStack from '../stacks/DrawerStack'
import TabsTopStack from '../stacks/TabsTopStack'

const AppScreens = [
  {
    name: AppRoutes.TABS_BOTTOM_STACK,
    component: TabsBottomStack,
  },
  {
    name: AppRoutes.TABS_TOP_STACK,
    component: TabsTopStack,
  },
  {
    name: AppRoutes.DRAWER_STACK,
    component: DrawerStack,
  },
]

export {AppScreens}
