import {TabsBottomRoutes} from '../routes/TabsBottomRoutes'

import HomeScreen from '../../components/screens/home/HomeScreen'
import HomeSearchScreen from '../../components/screens/home/HomeSearchScreen'
import HomeSettingsScreen from '../../components/screens/home/HomeSettingsScreen'

const TabsBottomScreens = [
  {
    name: TabsBottomRoutes.TABS_BOTTOM_HOME_SCREEN,
    component: HomeScreen,
    label: 'Accueil',
    icon: 'home',
  },
  {
    name: TabsBottomRoutes.TABS_BOTTOM_SEARCH_SCREEN,
    component: HomeSearchScreen,
    icon: 'search',
  },
  {
    name: TabsBottomRoutes.TABS_BOTTOM_SETTINGS_SCREEN,
    component: HomeSettingsScreen,
    icon: 'cog',
  },
]

export {TabsBottomScreens}
