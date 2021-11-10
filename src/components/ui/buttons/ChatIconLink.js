import React from 'react'
import {StyleSheet, Pressable, View, Text, ImageBackground} from 'react-native'
// import {useNavigation} from '@react-navigation/native'

// import {AppRoutes} from '../../../navigation/routes/AppRoutes'
import theme from '../../../theme/index'
// import Images from '../../../constants/Images'
import Mixins from '../../../theme/mixins'

export default function ChatIconLink({value = 2, color}) {
  // const navigation = useNavigation()

  const onGoToChat = React.useCallback(() => {
    // navigation.navigate(AppRoutes.MESSAGES_SCREEN)
  }, [])

  const image = {
    // white: Images.HEADER_MESSAGES,
    // purple: Images.HEADER_MESSAGES_PURPLE,
  }

  return (
    <Pressable onPress={onGoToChat}>
      <ImageBackground resizeMode="contain" style={styles.container} source={image[color]}>
        <View style={styles.containerPastille}>
          <Text style={[{color: 'white'}, Mixins.scaleFont(10)]}>{value}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Mixins.wp(38),
    height: Mixins.wp(31),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  containerPastille: {
    width: Mixins.wp(16),
    height: Mixins.wp(16),
    backgroundColor: theme.colors.green,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    // marginTop: 13,
  },
})
