import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Buttons() {
  return (
    <View style={style.container}>
      <Text>LikesTab</Text>
    </View>
  )
}

Buttons.navigationOptions = {
  title: "Buttons",
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
