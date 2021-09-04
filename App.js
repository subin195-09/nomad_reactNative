import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from "expo-location";


export default class extends React.Component {
  state = {
    isLoding: true
  }

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
    } catch (error) {
      console.log("error : ", error);
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoding } = this.state;
    return isLoding ? <Loading /> : null;
  }
}
