import React from "react"
import { View, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { Input, Button, Text } from "react-native-elements"
export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text h1>login</Text>
      <Input placeholder="INPUT WITH CUSTOM ICON" leftIcon={<Icon name="user" size={24} color="black" />} />
      <Input placeholder="INPUT WITH ICON" leftIcon={{ type: "font-awesome", name: "chevron-left" }} />
      <Button icon={<Icon name="arrow-right" size={15} color="white" />} title=" login" />
    </View>
  )
}

LinksScreen.navigationOptions = {
  title: "Links",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
})
