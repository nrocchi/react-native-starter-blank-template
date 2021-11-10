import {AllRoutes} from '../routes/AllRoutes'

import AppStack from '../stacks/AppStack'
import AuthStack from '../stacks/AuthStack'

const AllScreens = [
  {
    name: AllRoutes.AUTH_STACK,
    component: AuthStack,
  },
  {
    name: AllRoutes.APP_STACK,
    component: AppStack,
  },
]

export {AllScreens}
