import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import theme from '../../theme'

const Stack = createNativeStackNavigator()

export default function Navigator({initial, screens}) {
  return (
    <Stack.Navigator
      initialRouteName={initial}
      screenOptions={{
        // headerShown: false,
        headerMode: 'screen',
        headerTintColor: theme.colors.primary,
        headerStyle: {backgroundColor: theme.colors.blackLight},
      }}
    >
      {screens.map((screen) => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  )
}
