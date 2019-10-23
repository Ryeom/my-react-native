import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

const Loading = () => {
  return (
    <View style={sytles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={sytles.text}>Getting the weather app</Text>
    </View>
  )
}

export default Loading

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 40,
    paddingVertical: 100,
    backgroundColor: "pink",
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
})
