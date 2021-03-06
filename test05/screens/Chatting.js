import * as WebBrowser from "expo-web-browser"
import React from "react"
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Input, Button, Icon } from "react-native-elements"

const BG_IMAGE = require('../assets/images/bg_screen4.jpg');

export default function Chatting() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
      <View style={styles.loginView}>
      <View style={styles.loginTitle}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.travelText}>TRAVEL</Text>
          <Text style={styles.plusText}>+</Text>
        </View>
        <View style={{ marginTop: -10 }}>
          <Text style={styles.travelText}>LEISURE</Text>
        </View>
      </View>
      <View style={styles.loginInput}>
        <Input
          leftIcon={<Icon name="user-o" type="font-awesome" color="rgba(171, 189, 219, 1)" size={25} />}
          containerStyle={{ marginVertical: 10 }}
          inputStyle={{ marginLeft: 10, color: "white" }}
          keyboardAppearance="light"
          placeholder="Email"
          autoFocus={false}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          blurOnSubmit={false}
          placeholderTextColor="white"
          errorStyle={{ textAlign: "center", fontSize: 12 }}
        
        />
        <Input
          leftIcon={<Icon name="lock" type="font-awesome" color="rgba(171, 189, 219, 1)" size={25} />}
          containerStyle={{ marginVertical: 10 }}
    
          inputStyle={{ marginLeft: 10, color: "white" }}
          secureTextEntry={true}
          keyboardAppearance="light"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
          placeholderTextColor="white"
        />
      </View>
      <Button
        title="LOG IN"
        activeOpacity={1}
        underlayColor="transparent"
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          height: 50,
          width: 250,
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{ marginVertical: 10 }}
        titleStyle={{ fontWeight: "bold", color: "white" }}
      />
      <View style={styles.footerView}>
        <Text style={{ color: "grey" }}>New here?</Text>
        <Button title="Create an Account" type="clear" activeOpacity={0.5} titleStyle={{ color: "white", fontSize: 15 }} containerStyle={{ marginTop: -10 }} />
      </View>
    </View>
      </ImageBackground>
    </View>
  );
}

Chatting.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    //width: SCREEN_WIDTH,
   // height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
