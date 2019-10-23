import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./store/modules"
import Counter from "./component/counter"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"
import { createDrawerNavigator, DrawerNavigatorItems } from "react-navigation-drawer"
import { createStackNavigator } from "react-navigation-stack"

import Components from "./component/components"
const store = createStore(rootReducer, composeWithDevTools())

export default function App() {
  return (
    <Provider store={store}>
      <MainRoot />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
// <Image source={require("./images/logo.png")} style={{ width: Math.min(2000 * 0.57, 200) }} resizeMode="contain" />
const CustomDrawerContentComponent = (props) => (
  <View style={{ flex: 1, backgroundColor: "#43484d" }}>
    <View style={{ marginTop: 40, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("./images/logo.png")} style={{ width: Math.min(1345, 200) }} resizeMode="contain" />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </View>
)

const MainRoot = createAppContainer(
  createDrawerNavigator(
    {
      Counter: {
        screen: Counter,
      },
      Components: {
        screen: Components,
      },
    },
    {
      contentComponent: (props) => <SideBar {...props} />,

      drawerWidth: Dimensions.get("window").width * 0.85,
      hideStatusBar: true,

      contentOptions: {
        activeBackgroundColor: "rgba(212,118,207, 0.2)",
        activeTintColor: "#53115B",
        itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8,
        },
        itemStyle: {
          borderRadius: 4,
        },
      },
    },
  ),
)
