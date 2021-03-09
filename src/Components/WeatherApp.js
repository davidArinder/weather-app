import React, { Component } from "react";

class WeatherApp extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null,
    };
  }

  // Get lat and lng on component mount
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        alert("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  render() {
    return <div></div>;
  }
}

export default WeatherApp;
