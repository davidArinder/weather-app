import styles from "./FiveDayForecastRender.module.css";

function FiveDayForecastRender(props) {
  return (
    <div className={styles.container}>
      {props.weatherDetails.map((item) => (
        <div key={item.timestamp} className={styles.card}>
          <img src={item.icon} alt="new" />
          <div>
            <div className={styles.temp}>{item.temperature}°F</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.datetime}>
              {item.timestamp.slice(16, 24)}
            </div>
            <div className={styles.datetime}>{item.timestamp.slice(0, 15)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForecastRender;
