import React from "react"
import { StyleSheet, Platform } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"

import HomeTab from "./AppTabNavigator/HomeTab"
import LikesTab from "./AppTabNavigator/LikesTab"
import ProfileTab from "./AppTabNavigator/ProfileTab"
import AddMediaTab from "./AppTabNavigator/AddMediaTab"
import SearchTab from "./AppTabNavigator/SearchTab"

import { Provider } from "react-redux"
import store from "../store/configure"

const AppTabNavigator = createBottomTabNavigator(
  {
    //createTabNavigator가 deprecated되었음 ->createBottomTabNavigator
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }, //createBottomTabNavigator 생성후
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: "white",
          },
        }),
      },
      iconStyle: { height: 100 },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    },
  },
)

const AppTabContainet = createAppContainer(AppTabNavigator)

export default function MainScreen() {
  // navigationOptions 코드 추가

  //console.log("dispatch :", dispatch)

  return (
    // <View style={styles.container}>
    //   <Text>MainScreen</Text>
    // </View>
    <Provider store={store}>
      <AppTabContainet />
    </Provider>
  )
}

MainScreen.navigationOptions = {
  header: null,
  // headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
  // title: "인쭈따구래미",
  // headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
