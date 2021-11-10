import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import theme from '../../theme'

const Tab = createBottomTabNavigator()

export default function NavigatorBottomTabs({initial, screens}) {
  return (
    <Tab.Navigator
      initialRouteName={initial}
      screenOptions={{
        headerShown: false,
        headerTintColor: theme.colors.primary,
        headerStyle: {backgroundColor: theme.colors.blackLight},
        tabBarActiveBackgroundColor: theme.colors.blackLight,
        tabBarInactiveBackgroundColor: theme.colors.blackLight,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarItemStyle: {
          paddingTop: 5,
          paddingBottom: 5,
        },
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
