import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon, Container, Content, Header, Left, Body, Right, Button, Image } from "native-base"
export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" style={{ color: tintColor }} />,
  }
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Text>프로필</Text>
      </Container>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
