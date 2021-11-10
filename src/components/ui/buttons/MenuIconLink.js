import React from 'react'
import {TouchableWithoutFeedback, View} from 'react-native'
// import {useNavigation} from '@react-navigation/native'

// import {AppRoutes} from '../../../navigation/routes/AppRoutes'
import Mixins from '../../../theme/mixins'
import theme from '../../../theme/index'

export default function MenuIconLink({color}) {
  // const navigation = useNavigation()

  const onGoToMenu = React.useCallback(() => {
    // navigation.navigate(AppRoutes.MENU_SCREEN)
  }, [])

  const iconColor = {
    white: 'white',
    purple: theme.colors.purple,
  }

  return (
    <TouchableWithoutFeedback onPress={onGoToMenu}>
      <View
        style={{
          flexDirection: 'column',
          height: Mixins.hp(31),
          justifyContent: 'space-between',
        }}
      >
        <View style={{width: Mixins.wp(31), height: 2, backgroundColor: iconColor[color]}} />
        <View
          style={{
            width: Mixins.wp(17.54),
            height: 2,
            backgroundColor: color,
          }}
        />
        <View style={{width: Mixins.wp(31), height: 2, backgroundColor: iconColor[color]}} />
      </View>
    </TouchableWithoutFeedback>
  )
}
