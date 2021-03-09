import React, { Component } from "react";

const SUCCESS = "200";

class FiveDayForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.lat,
      lng: props.lng,
      weatherDetails: [],
    };
  }

  // call API on component mount
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}&appid=${API_KEY}&units=imperial`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === SUCCESS) {
          this.setState({
            weatherDetails: data.list.map((item) => ({
              temperature: item.main.temp,
              description: item.weather[0].main,
              icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              //   date: item.dt_txt,
              timestamp: new Date(item.dt * 1000).toString(),
            })),
          });
        }
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  }

  render() {
    return (
      <div>
        <FiveDayForecastRender weatherDetails={this.state.weatherDetails} />
      </div>
    );
  }
}

export default FiveDayForecast;
