import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import { Input, Button } from "react-native-elements"

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Input placeholder=" " leftIcon={<Icon name="user" size={24} color="black" />} />
      <Input placeholder=" " leftIcon={<Icon name="user" size={24} color="black" />} />
      <Button>login</Button>
      <Input placeholder="INPUT WITH ICON" leftIcon={{ type: "font-awesome", name: "chevron-left" }} />
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
