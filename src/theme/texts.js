import colors from './colors'
import fonts from './fonts'

const texts = {
  button: {
    fontSize: 17,
    ...fonts.semiBold,
    color: colors.white,
  },
  h1: {
    fontSize: 25,
    ...fonts.bold,
    color: colors.greyDarker,
    // marginBottom: 20,
  },
  h2: {
    fontSize: 20,
    ...fonts.bold,
    color: colors.white,
    marginBottom: 20,
  },
  h3: {
    fontSize: 18,
    ...fonts.semiBold,
    color: colors.greyDarker,
    marginBottom: 20,
  },
  h4: {
    fontSize: 16,
    ...fonts.semiBold,
    color: colors.purple,
    marginBottom: 20,
  },
  p: {
    fontSize: 14,
    ...fonts.regular,
    color: colors.greyDark,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    ...fonts.semiBold,
    color: colors.blackLight,
    marginBottom: 10,
    flexShrink: 1,
  },

  link: {
    fontSize: 16,
    ...fonts.regular,
    color: colors.greyDark,
    textDecorationLine: 'underline',
  },
  link_sm: {
    fontSize: 12,
    ...fonts.regular,
    color: colors.greyDark,
    textDecorationLine: 'underline',
  },

  address: {
    fontSize: 24,
    ...fonts.bold,
    color: colors.black,
    textAlign: 'center',
  },

  title: {
    fontSize: 16,
    ...fonts.bold,
    color: colors.black,
  },
  subtitle: {
    fontSize: 14,
    ...fonts.regular,
    color: colors.purple,
  },
  description: {
    fontSize: 14,
    ...fonts.regular,
    color: colors.blue,
  },
  quantity: {
    fontSize: 12,
    ...fonts.regular,
    color: colors.purple,
  },
  price: {
    fontSize: 16,
    ...fonts.bold,
    color: colors.green,
  },
  stock: {
    fontSize: 10,
    ...fonts.semiBold,
    color: colors.green,
  },
}

export default texts
