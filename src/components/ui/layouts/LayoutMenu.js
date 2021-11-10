import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import ButtonBack from '../buttons/ButtonBack'
import ErrorModal from '../modals/ErrorModal'
import Mixins from '../../../theme/mixins'
import theme from '../../../theme'
import {SafeAreaView} from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'

const LayoutMenu = ({
  statusBarcolor = theme.colors.purple,
  bgColor = theme.colors.purple,
  title,
  subtitle,
  image,
  isError,
  errorMessage,
  isLoading,
  children,
}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          edges={['top', 'bottom', 'left', 'right']}
          style={[styles.safeAreaView, {backgroundColor: bgColor || theme.colors.white}]}
        >
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <StatusBar backgroundColor={statusBarcolor} style="light" />

            <View style={styles.header}>
              <View style={{flex: 2}}>
                <ButtonBack />
              </View>

              {image ? (
                <Image source={image} style={{flex: 9}} resizeMode="contain" />
              ) : (
                <View style={{flex: 9}}></View>
              )}

              <View style={{flex: 2}}></View>
            </View>

            <Text style={[styles.textTitle, subtitle && {marginBottom: Mixins.hp(0)}]}>
              {title}
            </Text>
            {subtitle && <Text style={styles.textSubtitle}>{subtitle}</Text>}
            {!isLoading && children}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>

      {isError && <ErrorModal errorMessage={errorMessage} />}

      {isLoading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color={theme.colors.green} />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 0,
  },
  textTitle: {
    color: theme.colors.greyDarker,
    ...Mixins.scaleFont(25),
    ...theme.fonts.bold,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  textSubtitle: {
    color: theme.colors.purple,
    ...Mixins.scaleFont(12),
    ...theme.fonts.semiBold,
    marginBottom: Mixins.hp(20),
    paddingHorizontal: 20,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LayoutMenu
