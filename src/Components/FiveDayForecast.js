import React, { Component } from "react";

class FiveDayForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.lat,
      lng: props.lng,
      weatherDetails: [],
    };
  }

  render() {
    return <div></div>;
  }
}

export default FiveDayForecast;
