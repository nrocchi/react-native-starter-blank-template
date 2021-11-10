import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView} from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient'
import {StatusBar} from 'expo-status-bar'

import LayoutHeader from './LayoutHeader'
import theme from '../../../theme/index'
import ButtonBack from './../buttons/ButtonBack'
import ErrorModal from './../modals/ErrorModal'

const LayoutMain = ({
  title,
  isError,
  isLoading,
  errorMessage,
  statusBarcolor = theme.colors.purple,
  bgColor = theme.colors.purple,
  gradientColorStart,
  gradientColorEnd,
  paddingHorizontal,
  paddingVertical,
  header = false,
  headerTop,
  headerBottom,
  headerHorizontal,
  headerBgColor,
  headerColor,
  headerText,
  headerBack = false,
  back = false,
  backBgColor,
  overlay = false,
  children,
}) => {
  return (
    <>
      <LinearGradient colors={[gradientColorStart, gradientColorEnd]} style={styles.gradient}>
        <SafeAreaView
          edges={['top', 'bottom', 'left', 'right']}
          style={[
            styles.safeAreaView,
            !gradientColorStart &&
              !gradientColorEnd && {
                backgroundColor: bgColor || theme.colors.white,
              },
            {paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical},
          ]}
        >
          <View
            style={[
              {flex: 1},
              !gradientColorStart && !gradientColorEnd && {backgroundColor: 'white'},
            ]}
          >
            <StatusBar backgroundColor={statusBarcolor} style="light" />

            <View style={styles.header}>
              {header && (
                <LayoutHeader
                  color={headerColor}
                  bgColor={headerBgColor}
                  ph={headerHorizontal}
                  pt={headerTop}
                  pb={headerBottom}
                  text={headerText}
                  back={headerBack}
                />
              )}

              {back && (
                <View
                  style={{
                    backgroundColor: backBgColor,
                    paddingBottom: 10,
                  }}
                >
                  <ButtonBack />
                </View>
              )}
            </View>

            {title && <Text h1>{title}</Text>}

            {children}
          </View>
        </SafeAreaView>
      </LinearGradient>

      {isError && <ErrorModal title={errorMessage} />}

      {isLoading &&
        (overlay ? (
          <View style={styles.overlay}>
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={theme.colors.green} />
            </View>
          </View>
        ) : (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color={theme.colors.green} />
          </View>
        ))}
    </>
  )
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  header: {
    zIndex: 9999,
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
  loader: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    width: 100,
    height: 100,
    opacity: 1,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LayoutMain
