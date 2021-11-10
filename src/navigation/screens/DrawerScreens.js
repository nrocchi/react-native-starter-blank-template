import {DrawerRoutes} from '../routes/DrawerRoutes'

import ProfileScreen from '../../components/screens/menu/profile/ProfileScreen'
import MenuScreen from '../../components/screens/menu/MenuScreen'
import {AppRoutes} from '../routes/AppRoutes'
import TabsBottomStack from '../stacks/TabsBottomStack'
import TabsTopStack from '../stacks/TabsTopStack'

const DrawerScreens = [
  {
    name: AppRoutes.TABS_BOTTOM_STACK,
    component: TabsBottomStack,
    label: 'Accueil',
    icon: 'home',
  },
  {
    name: AppRoutes.TABS_TOP_STACK,
    component: TabsTopStack,
    label: 'Page suivante',
    icon: 'arrow-right',
  },
  {
    name: DrawerRoutes.DRAWER_MENU_SCREEN,
    component: MenuScreen,
    label: 'Menu',
    icon: 'bars',
  },
  {
    name: DrawerRoutes.DRAWER_PROFILE_SCREEN,
    component: ProfileScreen,
    icon: 'user-alt',
  },
]

export {DrawerScreens}
