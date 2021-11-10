import React, {useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native'
import {Avatar, Button, Image, Text} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

import Images from '../../../constants/Images'
import {AppRoutes} from '../../../navigation/routes/AppRoutes'
// import {DrawerRoutes} from '../../../navigation/routes/DrawerRoutes'
// import {TabsTopRoutes} from '../../../navigation/routes/TabsTopRoutes'
import theme from '../../../theme'
import LayoutMain from '../../ui/layouts/LayoutMain'

const HomeScreen = () => {
  const [isLoading] = useState(false)
  const navigation = useNavigation()
  return (
    <LayoutMain
      title="Home Screen"
      gradientColorStart={theme.colors.black}
      gradientColorEnd={theme.colors.blackLight}
      // bgColor={theme.colors.primary}
      // header={true}
      // headerText="App Name"
      // headerColor="white"
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque quae.
          Consectetur reprehenderit sunt fugiat ipsa maiores ullam iusto! Et dolores consequuntur
          nulla quis facilis aspernatur minima. Quibusdam, officiis assumenda!
        </Text>
        <Image
          source={Images.NO_PICTURE}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator size="large" color={theme.colors.primary} />}
          placeholderStyle={{backgroundColor: 'transparent'}}
        />

        <Image
          source={Images.FAKE_PHOTOS}
          resizeMode="contain"
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator size="large" color={theme.colors.primary} />}
        />

        <Avatar
          size="large"
          source={Images.FAKE_PHOTOS}
          icon={{name: 'user-alt', color: 'white', type: 'font-awesome-5'}}
          rounded
          overlayContainerStyle={{backgroundColor: theme.colors.primary}}
          onPress={() => console.log('Works!')}
          activeOpacity={0.9}
        />

        <Button
          title="gyu"
          loading={isLoading}
          onPress={() => navigation.navigate(AppRoutes.TABS_TOP_STACK)}
          // buttonStyle={{borderRadius: 20, paddingHorizontal: 20}}
          // titleStyle={{...theme.fonts.semiBold}}
        />

        <Button title="Solid Button" />

        <Button
          title="Next"
          loading={true}
          // loadingProps={{size: 'small', color: 'white'}}
          onPress={() => console.log('aye')}
        />

        {/* <Button
          title="Menu"
          loading={isLoading}
          onPress={() => navigation.navigate(AppRoutes.DRAWER_STACK)}
          buttonStyle={{borderRadius: 20, paddingHorizontal: 20, marginTop: 20}}
          titleStyle={{...theme.fonts.semiBold}}
        /> */}
      </ScrollView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 0,
  },
})

export default HomeScreen
