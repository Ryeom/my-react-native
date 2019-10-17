import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"

import MainTabNavigator from "./MainTabNavigator"

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./images/logo.png')}
        style={{ width: Math.min(WINDOW_WIDTH * 0.57, 200) }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);
export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
    },
    {
      //initialRouteName: "Components",
      contentOptions: {
        activeTintColor: "#548ff7",
        activeBackgroundColor: "transparent",
        inactiveTintColor: "#ffffff",
        inactiveBackgroundColor: "transparent",
        labelStyle: {
          fontSize: 15,
          marginLeft: 0,
        },
      },
      //drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
      contentComponent: CustomDrawerContentComponent,
    },
  ),
)
