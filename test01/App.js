import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, ThemeProvider } from "react-native-elements"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./store/modules"
import Counter from "./component/counter"
const store = createStore(rootReducer, composeWithDevTools())

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Button title="Hey!" />
        <Counter />
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
