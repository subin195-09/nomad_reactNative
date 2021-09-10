import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "680bca552e3fdfa5a7dd19b18e7c44e6";

export default class extends React.Component {
  state = {
    isLoding: true
  };

  getWeather = async (lat, lon) => {
    const {
      data: {
        main : { temp },
        weather
      } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoding:false,
      temp,
      condition: weather[0].main});
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log("error : ", error);
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoding, temp, condition } = this.state;
    return isLoding ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  };
}
