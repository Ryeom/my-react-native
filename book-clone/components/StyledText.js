import React from "react"
import { Text } from "react-native-elements"

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
}
