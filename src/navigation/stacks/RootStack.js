import React, {useContext} from 'react'

import {AuthContext} from '../../api/contexts/AuthContext'
import AppStack from './AppStack'
import AllStack from './AllStack'
import TabsTopStack from './TabsTopStack';
import TabsBottomStack from './TabsBottomStack';
import DrawerStack from './DrawerStack';

export default function RootStack() {
  const {state} = useContext(AuthContext)

  // return state.token ? <AppStack /> : <AllStack />
  return <AppStack />
}
