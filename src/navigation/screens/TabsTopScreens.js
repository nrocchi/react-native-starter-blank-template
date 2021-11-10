import {TabsTopRoutes} from '../routes/TabsTopRoutes'

import NextScreen from '../../components/screens/next/NextScreen'
import NotificationsScreen from '../../components/screens/next/NotificationsScreen'

const TabsTopScreens = [
  {
    name: TabsTopRoutes.TABS_TOP_NEXT_SCREEN,
    component: NextScreen,
    label: 'Page suivante',
    icon: 'home',
  },
  {
    name: TabsTopRoutes.TABS_TOP_NOTIFICATIONS_SCREEN,
    component: NotificationsScreen,
    icon: 'search',
  },
]

export {TabsTopScreens}
