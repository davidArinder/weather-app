import React from "react";
import styles from "./WeatherAppRender.module.css";

function WeatherAppRender(props) {
  return (
    <div>
      {props.weatherDetails.temperature && (
        <div>
          <div className={styles.text}>{props.weatherDetails.location}</div>
          <img src={props.weatherDetails.icon} alt="new" />
          <div className={styles.temp}>
            {props.weatherDetails.temperature}°F
          </div>
          <div className={styles.description}>
            {props.weatherDetails.description}
          </div>

          <button onClick={props.handleToggle} className={styles.btn}>
            Five Day Forecast
          </button>
        </div>
      )}
    </div>
  );
}

export default WeatherAppRender;
