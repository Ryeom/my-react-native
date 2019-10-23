import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

// Navigators
import { createDrawerNavigator } from "react-navigation-drawer"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from "react-navigation-stack"
// StackNavigator screens
import ItemList from "./component/ItemList"
import Item from "./component/Item"

// TabNavigator screens
import TabA from "./component/TabA"
import TabB from "./component/TabB"
import TabC from "./component/TabC"

// Plain old component
import Plain from "./component/Plain"
import { createBottomTabNavigator } from "react-navigation-tabs"

export const Stack = createStackNavigator(
  {
    ItemList: { screen: ItemList },
    Item: { screen: Item },
  },
  {
    initialRouteName: "ItemList",
  },
)

export const Tabs = createBottomTabNavigator(
  {
    TabA: { screen: TabA },
    TabB: { screen: TabB },
    TabC: { screen: TabC },
  },
  {
    order: ["TabA", "TabB", "TabC"],
  },
)

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
})
