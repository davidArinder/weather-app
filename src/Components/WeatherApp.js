import React, { Component } from "react";
import styles from "./WeatherApp.module.css";
import FiveDayForecast from "./FiveDayForecast";
import WeatherAppRender from "./WeatherAppRender";

const SUCCESS = 200;

class WeatherApp extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      lat: null,
      lng: null,
      weatherDetails: {
        temperature: null,
        description: "",
        icon: null,
        location: "",
      },
      fiveDayForecastDisplay: false,
      noLocation: "",
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
      (err) => {
        alert("The weather app won't work if you don't allow location access.");
      }
    );
  }

  // Call API on user click
  handleClick() {
    if (this.state.lat !== null) {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lng}&appid=${API_KEY}&units=imperial`;
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod === SUCCESS) {
            this.setState({
              weatherDetails: {
                temperature: data.main.temp,
                description: data.weather[0].main,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                location: data.name,
              },
            });
          }
        })
        .catch((err) => {
          alert("Error: " + err);
        });
    } else {
      this.setState({
        noLocation:
          "Please close and refresh your browser and accept access to location data.",
      });
    }
  }

  // Toggle whether to show Five Day Forecast or not
  handleToggle() {
    if (this.state.fiveDayForecastDisplay === false) {
      this.setState({ fiveDayForecastDisplay: true });
    } else {
      this.setState({ fiveDayForecastDisplay: false });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className={styles.btn}>
          Show Weather At My Location
        </button>
        {this.state.noLocation && (
          <div className={styles.text}>{this.state.noLocation}</div>
        )}
        <WeatherAppRender
          weatherDetails={this.state.weatherDetails}
          handleToggle={this.handleToggle}
        />
        {this.state.fiveDayForecastDisplay && (
          <FiveDayForecast lat={this.state.lat} lng={this.state.lng} />
        )}
      </div>
    );
  }
}

export default WeatherApp;
