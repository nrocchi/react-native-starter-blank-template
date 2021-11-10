import colors from './colors'
import fonts from './fonts'
import texts from './texts'
import grid from './grid'

const theme = {
  Button: {
    titleStyle: {
      ...texts.button,
    },
    buttonStyle: {
      backgroundColor: colors.purple,
      borderRadius: 50,
      height: 50,
    },
    disabledStyle: {
      backgroundColor: colors.purple,
    },
    containerStyle: {
      width: '100%',
      marginTop: 20,
      marginBottom: 20,
    },
  },

  Input: {
    containerStyle: {
      paddingHorizontal: 0,
    },
    inputContainerStyle: {
      borderWidth: 1,
      borderColor: colors.greyLight,
      borderRadius: 50,
      width: '100%',
      backgroundColor: colors.greyLight,
    },
    inputStyle: {
      marginLeft: 20,
      color: colors.blackLight,
      fontSize: 16,
      ...fonts.medium,
    },
    autoCapitalize: 'none',
    autoCorrect: false,
    secureTextEntry: false,
    keyboardAppearance: 'light',
    placeholderTextColor: colors.grey,
    errorStyle: {color: colors.red, marginLeft: 20},
  },

  Text: {
    style: {
      fontSize: 16,
      ...fonts.regular,
      color: colors.blackLight,
    },
    h1Style: {
      ...texts.h1,
    },
    h2Style: {
      ...texts.h2,
    },
    h3Style: {
      ...texts.h3,
    },
    h4Style: {
      ...texts.h4,
    },
  },

  colors,
  fonts,
  texts,
  grid,
}

export default theme
