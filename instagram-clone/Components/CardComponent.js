import React, { Component } from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from "native-base"

export default class CardComponent extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: "https://steemitimages.com/u/anpigon/avatar" }} />
            <Body>
              <Text>Anpigon</Text>
              <Text note> Jan 21, 2019</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
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
