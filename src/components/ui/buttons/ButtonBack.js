import React from 'react'
import {Icon} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

import theme from '../../../theme'

const ButtonBack = ({disabled = false}) => {
  const navigation = useNavigation()

  return (
    <Icon
      name="arrow-back"
      type="ionicon"
      size={35}
      containerStyle={{
        width: 55,
        height: 55,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 5,
        marginLeft: 20,
      }}
      color={theme.colors.greyDarker}
      disabled={disabled}
      onPress={() => navigation.goBack()}
    />
  )
}

export default ButtonBack
