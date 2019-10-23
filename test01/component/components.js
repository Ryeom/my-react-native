import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { Icon } from "react-native-elements"

import Buttons from "./tab/buttons"
//import ListsTab from "./tab/lists"

const Components = createBottomTabNavigator(
  {
    Buttons: {
      screen: Buttons,
      navigationOptions: {
        tabBarLabel: "Buttons",
        // tabBarIcon: ({ tintColor, focused }) => <Icon name={focused ? "emoticon-cool" : "emoticon-neutral"} size={30} type="material-community" color={tintColor} />,
      },
    },
    // ListsTab: {
    //   screen: ListsTab,
    //   path: "/lists",
    //   navigationOptions: {
    //     tabBarLabel: "Lists",
    //     tabBarIcon: ({ tintColor, focused }) => <Icon name="list" size={30} type="entypo" color={tintColor} />,
    //   },
    // },
  },
  {
    initialRouteName: "Buttons",
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#e91e63",
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  },
)

// Workaround to avoid crashing when you come back on Components screen
// and you were not on the Buttons tab
export default createStackNavigator(
  {
    ComponentsTabs: { screen: Components },
  },
  {
    headerMode: "none",
    navigationOptions: {
      drawerLabel: "Components",
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="settings"
          size={30}
          iconStyle={{
            width: 30,
            height: 30,
          }}
          type="material"
          color={tintColor}
        />
      ),
    },
  },
)
