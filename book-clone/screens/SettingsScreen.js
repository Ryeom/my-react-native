import React from "react"
import { View } from "react-native"
import { Text } from "react-native-elements"
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text h2>히히 쎄팅</Text>
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: "app.json",
}
