import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Item = (props) => {
  return (
    <View style={styles.container}>
      <Text> {props.navigation.state.params.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c0392d",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
})
