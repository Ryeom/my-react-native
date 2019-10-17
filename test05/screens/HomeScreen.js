import * as WebBrowser from "expo-web-browser"
import React from "react"
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native"
import { Input, SearchBar, Icon, Button, ThemeProvider } from "react-native-elements"

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
                  borderColor: 'rgba(110, 120, 170, 1)',
                  height: 50,
                  marginVertical: 10,
                },
                placeholderTextColor: 'rgba(110, 120, 170, 1)',
                inputStyle: {
                  marginLeft: 10,
                  color: 'white',
                },
                keyboardAppearance: 'light',
                blurOnSubmit: false,
              },
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(46, 50, 72, 1)',
                //width: SCREEN_WIDTH,
                alignItems: 'center',
                paddingBottom: 30,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  marginVertical: 10,
                  fontWeight: '300',
                }}
              >
                Sign up
              </Text>
              <Input
                leftIcon={
                  <Icon
                    name="user"
                    type="simple-line-icon"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                
              />
              <Input
                leftIcon={
                  <Icon
                    name="email-outline"
                    type="material-community"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
               
              />
              <Input
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="next"
             
              />
              <Input
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Confirm Password"
                autoCapitalize="none"
                keyboardAppearance="light"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
               
                blurOnSubmit
              />
            </View>
          </ThemeProvider>
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
})
// <View style={styles.headerContainer}>
// <Icon color="white" name="search" size={62} />
// <Text style={styles.heading}>Search Bars</Text>
// </View>
// <SearchBar placeholder="iOS searchbar" platform="ios" />
// <SearchBar placeholder="Android searchbar" platform="android" />
// <SearchBar placeholder="Default searchbar" />
// <View style={[styles.headerContainer, { backgroundColor: "#616389", marginTop: 20 }]}>
// <Icon color="white" name="input" size={62} />
// <Text style={styles.heading}>Inputs</Text>
// </View>
// <View style={{ alignItems: "center", marginBottom: 16 }}>
// <Input containerStyle={{ width: "90%" }} placeholder="Input with label" label="LABEL" labelStyle={{ marginTop: 16 }} />
// <Input containerStyle={styles.inputContainerStyle} placeholder="Simple input" />
// <Input leftIcon={<Icon name="map-marker" type="font-awesome" color="#86939e" size={25} />} leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }} containerStyle={styles.inputContainerStyle} placeholder="Input with left icon" />
// <Input rightIcon={<Icon name="chevron-right" type="entypo" color="#86939e" size={25} />} containerStyle={styles.inputContainerStyle} placeholder="Input with right icon" />
// <Input containerStyle={styles.inputContainerStyle} placeholder="Input with error message" errorMessage="Invalid input" />
// <Input containerStyle={[styles.inputContainerStyle]} placeholder="Shake input" ref={() => {}} rightIcon={<Button title="Shake" onPress={() => {}} />} errorMessage="Shake me on error !" />
// </View>
// <View style={styles.contentView}>
// <View
//   style={{
//     backgroundColor: "#2F343B",
//     width: SCREEN_WIDTH,
//     alignItems: "center",
//   }}
// >
//   <Text
//     style={{
//       fontSize: 30,
//       marginVertical: 10,
//       fontWeight: "300",
//       marginTop: 10,
//       color: "white",
//     }}
//   >
//     Login
//   </Text>
//   <View style={styles.overlay}>
//     <View style={styles.triangleLeft} />
//     <Input
//       inputContainerStyle={{
//         borderWidth: 1,
//         borderColor: "white",
//         borderLeftWidth: 0,
//         height: 50,
//         width: SCREEN_WIDTH - 80,
//         backgroundColor: "white",
//       }}
//       leftIcon={<Icon name="email-outline" type="material-community" color="black" size={25} />}
//       leftIconContainerStyle={{
//         marginRight: 10,
//       }}
//       containerStyle={{ paddingHorizontal: 0 }}
//       placeholder="Email"
//       placeholderTextColor="black"
//       autoCapitalize="none"
//       autoCorrect={false}
//       keyboardAppearance="light"
//       keyboardType="email-address"
//       returnKeyType="next"
//       ref={() => {}}
//       onSubmitEditing={() => {}}
//       blurOnSubmit={false}
//     />
//     <View style={styles.triangleRight} />
//   </View>
//   <View style={[styles.overlay, { marginBottom: 30, marginTop: 1 }]}>
//     <View style={styles.triangleLeft} />
//     <Input
//       inputContainerStyle={{
//         borderWidth: 1,
//         borderColor: "white",
//         borderLeftWidth: 0,
//         height: 50,
//         width: SCREEN_WIDTH - 80,
//         backgroundColor: "white",
//       }}
//       leftIconContainerStyle={{
//         marginRight: 10,
//       }}
//       containerStyle={{ paddingHorizontal: 0 }}
//       leftIcon={<Icon name="lock" type="simple-line-icon" color="black" size={25} />}
//       placeholder="Password"
//       placeholderTextColor="black"
//       autoCapitalize="none"
//       keyboardAppearance="light"
//       secureTextEntry={true}
//       autoCorrect={false}
//       keyboardType="default"
//       returnKeyType="done"
//       ref={() => {}}
//       blurOnSubmit={true}
//     />
//     <View style={styles.triangleRight} />
//   </View>
// </View>

// <ThemeProvider
//   theme={{
//     Input: {
//       containerStyle: {
//         width: SCREEN_WIDTH - 50,
//       },
//       inputContainerStyle: {
//         borderRadius: 40,
//         borderWidth: 1,
//         borderColor: "rgba(110, 120, 170, 1)",
//         height: 50,
//         marginVertical: 10,
//       },
//       placeholderTextColor: "rgba(110, 120, 170, 1)",
//       inputStyle: {
//         marginLeft: 10,
//         color: "white",
//       },
//       keyboardAppearance: "light",
//       blurOnSubmit: false,
//     },
//   }}
// >
//   <View
//     style={{
//       backgroundColor: "rgba(46, 50, 72, 1)",
//       width: SCREEN_WIDTH,
//       alignItems: "center",
//       paddingBottom: 30,
//     }}
//   >
//     <Text
//       style={{
//         color: "white",
//         fontSize: 30,
//         marginVertical: 10,
//         fontWeight: "300",
//       }}
//     >
//       Sign up
//     </Text>
//     <Input leftIcon={<Icon name="user" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Username" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" returnKeyType="next" ref={() => {}} onSubmitEditing={() => {}} />
//     <Input leftIcon={<Icon name="email-outline" type="material-community" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" returnKeyType="next" ref={() => {}} onSubmitEditing={() => {}} />
//     <Input leftIcon={<Icon name="lock" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Password" autoCapitalize="none" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="next" ref={() => {}} onSubmitEditing={() => {}} />
//     <Input leftIcon={<Icon name="lock" type="simple-line-icon" color="rgba(110, 120, 170, 1)" size={25} />} placeholder="Confirm Password" autoCapitalize="none" keyboardAppearance="light" secureTextEntry={true} autoCorrect={false} keyboardType="default" returnKeyType="done" ref={() => {}} blurOnSubmit />
//   </View>
// </ThemeProvider>
// </View>
