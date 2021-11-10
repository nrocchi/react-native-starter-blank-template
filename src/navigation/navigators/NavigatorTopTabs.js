import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {Icon} from 'react-native-elements'

import theme from '../../theme'

const Tab = createMaterialTopTabNavigator()

export default function NavigatorTopTabs({initial, screens}) {
  return (
    <Tab.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.colors.blackLight,
        tabBarInactiveBackgroundColor: theme.colors.blackLight,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarItemStyle: {
          paddingTop: 5,
          paddingBottom: 5,
        },
        // tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {backgroundColor: theme.colors.blackLight},
      }}
    >
      {screens.map((screen) => (
        <Tab.Screen
          {...screen}
          key={screen.name}
          options={{
            title: screen.label,
            tabBarIcon: ({color}) => (
              <Icon name={screen.icon} type="font-awesome-5" color={color} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
