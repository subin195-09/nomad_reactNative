import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';

const API_KEY = "680bca552e3fdfa5a7dd19b18e7c44e6";

export default class extends React.Component {
  state = {
    isLoding: true
  };

  getWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    );
    console.log(data);
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoding: false });
    } catch (error) {
      console.log("error : ", error);
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoding } = this.state;
    return isLoding ? <Loading /> : null;
  };
}
