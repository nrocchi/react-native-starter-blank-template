import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Icon} from 'react-native-elements'

import theme from '../../theme'

const Drawer = createDrawerNavigator()

export default function NavigatorDrawer({initial, screens}) {
  return (
    <Drawer.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.white,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.white,
        drawerStyle: {
          backgroundColor: theme.colors.blackLight,
          // width: 240,
        },
      }}
    >
      {screens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          {...screen}
          options={{
            title: screen.label,
            drawerIcon: ({color}) => (
              <Icon name={screen.icon} type="font-awesome-5" color={color} size={20} />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}
