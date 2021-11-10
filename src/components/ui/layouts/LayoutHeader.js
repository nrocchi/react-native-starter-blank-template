import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Mixins from '../../../theme/mixins'
import theme from '../../../theme/index'
// import ChatIconLink from '../buttons/ChatIconLink'
// import MenuIconLink from '../buttons/MenuIconLink'
import ButtonBack from '../buttons/ButtonBack'

const LayoutHeader = ({
  text,
  ph = 20,
  pt = 20,
  pb = 20,
  bgColor,
  // color = 'white',
  back,
  // ...props
}) => {
  return (
    <View style={{backgroundColor: bgColor}}>
      <View
        style={[
          styles.container,
          {
            paddingHorizontal: Mixins.wp(ph),
            paddingTop: Mixins.hp(pt),
            paddingBottom: Mixins.hp(pb),
            // backgroundColor: bgColor,
          },
        ]}
      >
        {/* <MenuIconLink color={color} {...props} /> */}
        {text && <Text style={styles.text}>{text}</Text>}

        {/* <ChatIconLink color={color} {...props} /> */}
      </View>

      {back && (
        <View
          style={{
            paddingBottom: 10,
          }}
        >
          <ButtonBack />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...Mixins.scaleFont(20),
    ...theme.fonts.semiBold,
  },
})

export default LayoutHeader
