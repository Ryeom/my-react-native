import * as WebBrowser from "expo-web-browser"
import React from "react"
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native"
import { Input, SearchBar, Icon, Button, ThemeProvider, ButtonGroup } from "react-native-elements"

import { LinearGradient } from "../components/LinearGradient"

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.headerContainer}>
        <Icon color="white" name="search" size={62} />
        <Text style={styles.heading}>Search Bars</Text>
      </View>
      <SearchBar placeholder="iOS searchbar" platform="ios" />
      <SearchBar placeholder="Android searchbar" platform="android" />
      <SearchBar placeholder="Default searchbar" />
      <View style={[styles.headerContainer, { backgroundColor: "#616389", marginTop: 20 }]}>
        <Text style={styles.heading}>넘사벽(이라고 쓰고 김대현이라고 읽는다고알고있는데 김대현 바보)이라고아나</Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Input containerStyle={{ width: "90%" }} placeholder="Input with label" label="LABEL" labelStyle={{ marginTop: 16 }} />
        <Input containerStyle={styles.inputContainerStyle} placeholder="Simple input" />
        <Input leftIcon={<Icon name="map-marker" type="font-awesome" color="#86939e" size={25} />} leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }} containerStyle={styles.inputContainerStyle} placeholder="Input with left icon" />
        <Input rightIcon={<Icon name="chevron-right" type="entypo" color="#86939e" size={25} />} containerStyle={styles.inputContainerStyle} placeholder="Input with right icon" />
        <Input containerStyle={styles.inputContainerStyle} placeholder="Input with error message" errorMessage="Invalid input" />
        <Input containerStyle={[styles.inputContainerStyle]} placeholder="Shake input" rightIcon={<Button title="Shake" />} errorMessage="Shake me on error !" />
      </View>
      <ThemeProvider
        theme={{
          Input: {
            containerStyle: {
              //width: SCREEN_WIDTH - 50,
            },
            inputContainerStyle: {
              borderRadius: 40,
              borderWidth: 1,
              borderColor: "rgba(110, 120, 170, 1)",
              height: 50,
              marginVertical: 10,
            },
            placeholderTextColor: "rgba(110, 120, 170, 1)",
            inputStyle: {
              marginLeft: 10,
              color: "white",
            },
            keyboardAppearance: "light",
            blurOnSubmit: false,
          },
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(46, 50, 72, 1)",
            //width: SCREEN_WIDTH,
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              marginVertical: 10,
              fontWeight: "300",
            }}
          >
            Sign up
          </Text>
          <Input leftIcon={<Icon name="user" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Username" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" returnKeyType="next" />
          <Input leftIcon={<Icon name="email-outline" type="material-community" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" returnKeyType="next" />
          <Input leftIcon={<Icon name="lock" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Password" autoCapitalize="none" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="next" />
          <Input leftIcon={<Icon name="lock" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Confirm Password" autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="done" blurOnSubmit />
        </View>
      </ThemeProvider>

      <View style={styles.contentView}>
        <View style={styles.headerContainer}>
          <Icon color="white" name="rocket" type="font-awesome" size={62} />
          <Text style={styles.heading}>Buttons</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button title={`Welcome to\nReact Native Elements`} containerStyle={{ marginVertical: 10 }} />
          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{ marginVertical: 10, height: 50, width: 250 }}
            titleStyle={{ fontWeight: "bold" }}
          />
          <Button
            title="Log in"
            loading={false}
            loadingProps={{ size: "small", color: "white" }}
            buttonStyle={{
              backgroundColor: "rgba(111, 202, 186, 1)",
              borderRadius: 5,
            }}
            titleStyle={{ fontWeight: "bold", fontSize: 23 }}
            containerStyle={{ marginVertical: 10, height: 50, width: 230 }}
            onPress={() => console.log("aye")}
            underlayColor="transparent"
          />
          <Button
            title="Add to Cart"
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
            linearGradientProps={{
              colors: ["#FF9800", "#F44336"],
              start: [1, 0],
              end: [0.2, 0],
            }}
            ViewComponent={LinearGradient}
            buttonStyle={{
              borderWidth: 0,
              borderColor: "transparent",
              borderRadius: 20,
            }}
            containerStyle={{ marginVertical: 10, height: 40, width: 200 }}
            icon={{
              name: "arrow-right",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
          />
          <Button
            title="Request an agent"
            titleStyle={{ fontWeight: "500" }}
            buttonStyle={{
              backgroundColor: "rgba(199, 43, 98, 1)",
              borderColor: "transparent",
              borderWidth: 0,
            }}
            containerStyle={{ marginTop: 10, width: 275, height: 45 }}
          />
          <Button
            title="SIGN UP"
            disabled={true}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
            }}
            containerStyle={{ marginTop: 20, width: 300, height: 45 }}
          />
          <Button
            title="SIGN UP"
            loading={true}
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              paddingVertical: 10,
            }}
            containerStyle={{ marginTop: 20, width: 300, height: 45 }}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="HOME"
              icon={{
                name: "home",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(90, 154, 230, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{ width: 130 }}
            />
            <Button
              title="PROFILE"
              icon={{
                name: "user",
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(199, 43, 98, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{ width: 150 }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              title="Basic Button"
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
                borderRadius: 3,
              }}
            />
            <Button
              title="Outline Button"
              buttonStyle={{
                borderColor: "rgba(78, 116, 289, 1)",
              }}
              type="outline"
              titleStyle={{ color: "rgba(78, 116, 289, 1)" }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              title="HOME"
              loading
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(111, 202, 186, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
                paddingVertical: 10,
              }}
              containerStyle={{ width: 100, height: 40 }}
            />
            <Button title="Clear Button" type="clear" titleStyle={{ color: "rgba(78, 116, 289, 1)" }} />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              title="Light"
              buttonStyle={{
                backgroundColor: "rgba(244, 244, 244, 1)",
                borderRadius: 3,
              }}
              containerStyle={{ height: 40 }}
              titleStyle={{ marginHorizontal: 20, color: "black" }}
            />
            <Button title="Dark" buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }} containerStyle={{ height: 40 }} titleStyle={{ color: "white", marginHorizontal: 20 }} />
            <Button title="Default" containerStyle={{ height: 40 }} buttonStyle={{ backgroundColor: "rgba(78, 116, 289, 1)" }} titleStyle={{ color: "white", marginHorizontal: 20 }} />
          </View>
          <View style={[styles.buttonsContainer, { marginBottom: 20 }]}>
            <Button title="Secondary" buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }} containerStyle={{ height: 40 }} titleStyle={{ color: "white", marginHorizontal: 20 }} />
            <Button title="Danger" buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }} containerStyle={{ height: 40 }} titleStyle={{ color: "white", marginHorizontal: 20 }} />
          </View>
        </View>
        <View style={[styles.headerContainer, { backgroundColor: "#292C44" }]}>
          <Icon color="white" name="wrench" type="font-awesome" size={62} />
          <Text style={styles.heading}>Button Groups</Text>
        </View>
        <ButtonGroup buttons={["SIMPLE", "BUTTON", "GROUP"]} containerStyle={{ marginBottom: 20 }} />
        <ButtonGroup buttons={["Multiple", "Select", "Button", "Group"]} selectMultiple containerStyle={{ marginBottom: 20 }} />
      </View>
      <View style={[styles.headerContainer, { backgroundColor: "#292C44" }]}>
        <Icon color="white" name="wrench" type="font-awesome" size={62} />
        <Text style={styles.heading}>Button Groups</Text>
      </View>
      <ButtonGroup
        buttons={["SIMPLE", "BUTTON", "GROUP"]}
        selectedIndex={1}
        containerStyle={{ marginBottom: 20 }}
      />
      <ButtonGroup buttons={["Multiple", "Select", "Button", "Group"]} selectMultiple selectedIndexes={[0,2,3]} containerStyle={{ marginBottom: 20 }} />
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  header: null,
  tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#B46486",
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triangleLeft: {
    position: "absolute",
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: "white",
    borderBottomWidth: 25,
    borderBottomColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "transparent",
  },
  triangleRight: {
    position: "absolute",
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: "white",
    borderBottomWidth: 25,
    borderBottomColor: "transparent",
    borderTopWidth: 25,
    borderTopColor: "transparent",
  },
  inputContainerStyle: {
    marginTop: 16,
    width: "90%",
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#4F80E1",
    marginBottom: 20,
  },
  heading: {
    color: "white",
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
})
