import React from "react"
import { Text } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
//Screens
import LoginScreen from "./LoginScreen/LoginScreen"
import HomeScreen from "./HomeScreen/HomeScreen"
import SettingScreen from "./SettingScreen/SettingScreen"
import SomethingScreen from "./SomethingScreen/SomethingScreen"

// createStackNavigator 하나의 화면을 말한다.
const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    defaultNavigationOpions: ({ navigation }) => ({
      title: "Home",
    }),
  },
)

//하나의 화면
const SettingStack = createStackNavigator(
  {
    SettingScreen,
    SomethingScreen,
  },
  {
    defaultNavigationOpions: ({ navigation }) => ({
      title: "Setting",
    }),
    initialRouteName: "SettingScreen",
  },
 )

// createBottonNavigator 하단 TAB
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setting: SettingStack,
  },
  {
    defaultNavigationOpions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horiziontal, tintColor }) => {
        const { routeName } = navigation.state
        let icon = "▲"

        if (routeName === "Home") {
          icon = "🌈"
        } else if (routeName === "Setting") {
          icon = "🌙"
        }

        return <Text style={{ color: (focused && "#3265ad") || "#888" }}>{icon}</Text>
      },
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888",
    },
  },
)

// 여기도 하나의 화면이다. 근데 스크린을 두개 주었다.
const AppStack = createStackNavigator({
  LoginScreen: LoginScreen, // login화면
  TabNavigator: {
    // 하단 tab
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
})

export default createAppContainer(AppStack)
