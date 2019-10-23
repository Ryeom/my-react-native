import React from "react"
import { Alert } from "react-native"
import { StyleSheet, Text, View } from "react-native"
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from "axios"
import Weather from "./Weather"
// 여기는 걍 site https://openweathermap.org/current

//가져오는 법 http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
const API_KEY = `aee70fb25d41eae56c7fdc200b7d7d42`
export default class App extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    })
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you.", "So sad")
    }
  }

  componentDidMount() {
    this.getLocation()
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}
