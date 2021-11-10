import React, {useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet} from 'react-native'
import {Avatar, Button, Image, Text} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

import Images from '../../../../constants/Images'
// import {AppRoutes} from '../../../../navigation/routes/AppRoutes'
import {DrawerRoutes} from '../../../../navigation/routes/DrawerRoutes'
import {TabsTopRoutes} from '../../../../navigation/routes/TabsTopRoutes'
import theme from '../../../../theme'
import LayoutMain from '../../../ui/layouts/LayoutMain'

const ProfileScreen = () => {
  const [isLoading] = useState(false)
  const navigation = useNavigation()
  return (
    <LayoutMain
      title="Profile Screen"
      gradientColorStart={theme.colors.black}
      gradientColorEnd={theme.colors.blackLight}
      bgColor={theme.colors.primary}
      header={true}
      headerText="App Name"
      headerColor="white"
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, itaque quae.
          Consectetur reprehenderit sunt fugiat ipsa maiores ullam iusto! Et dolores consequuntur
          nulla quis facilis aspernatur minima. Quibusdam, officiis assumenda!
        </Text>
        <Image
          source={Images.NO_PICTURE}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator size="large" color={theme.colors.primary} />}
          placeholderStyle={{backgroundColor: 'white'}}
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
          activeOpacity={0.7}
        />

        <Button
          title="Page suivante"
          loading={isLoading}
          onPress={() => navigation.navigate(TabsTopRoutes.TABS_TOP_NEXT_SCREEN)}
          buttonStyle={{borderRadius: 20, paddingHorizontal: 20, marginTop: 20}}
          titleStyle={{...theme.fonts.semiBold}}
        />

        <Button
          title="Menu"
          loading={isLoading}
          onPress={() => navigation.navigate(DrawerRoutes.DRAWER_MENU_SCREEN)}
          buttonStyle={{borderRadius: 20, paddingHorizontal: 20, marginTop: 20}}
          titleStyle={{...theme.fonts.semiBold}}
        />
      </ScrollView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 0,
    backgroundColor: 'red',
  },
})

export default ProfileScreen
