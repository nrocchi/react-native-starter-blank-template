import {PixelRatio} from 'react-native'
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen'

const SKETCH_BASE_HEIGHT = 926 // 812
const SKETCH_BASE_WIDTH = 428 // 375

const wp = (dimension) => {
  return wp2dp((dimension / SKETCH_BASE_WIDTH) * 100 + '%')
}

const hp = (dimension) => {
  return hp2dp((dimension / SKETCH_BASE_HEIGHT) * 100 + '%')
}

const dimensions = (top, right = top, bottom = top, left = right, property) => {
  let styles = {}
  styles[`${property}Top`] = hp(top)
  styles[`${property}Right`] = wp(right)
  styles[`${property}Bottom`] = hp(bottom)
  styles[`${property}Left`] = wp(left)

  return styles
}

const Mixins = {
  wp,
  hp,
  scaleFont(size) {
    const fontSize = size * PixelRatio.getFontScale()

    return {
      fontSize,
      lineHeight: fontSize * 1.5,
      // lineHeight: fontSize * 1.375,
    }
  },
  margin(top = 0, right = 0, bottom = 0, left = 0) {
    return dimensions(top, right, bottom, left, 'margin')
  },
  padding(top = 0, right = 0, bottom = 0, left = 0) {
    return dimensions(top, right, bottom, left, 'padding')
  },
  boxShadow(color, offset = {height: 2, width: 2}, radius = 8, opacity = 0.2) {
    return {
      shadowColor: color,
      shadowOffset: offset,
      shadowOpacity: opacity,
      shadowRadius: radius,
      elevation: radius,
    }
  },
  borderRadius(ratio = 3) {
    const base = 5
    return {
      borderRadius: base * ratio,
    }
  },
  boxSize(height, width) {
    const wValue = width || height
    return {
      height: hp(height),
      width: wp(wValue),
    }
  },
  circle(pt) {
    return {
      height: hp(pt),
      width: hp(pt),
      borderRadius: hp(pt / 2),
    }
  },
}

export default Mixins
