# A Simple Weather App

This is a simple weather app that shows weather information at the user's current location both for the current day and a five-day, three-hourly forecast.

## To Run the App

Clone the codebase, install using your preferred method (e.g., `yarn install` or `npm install`), and use `yarn start` or `npm start` depending on your preference. Before it will work, though, you'll need to get an API key from [OpenWeatherMap](https://openweathermap.org/) by signing up for an account. Then create a .env file in the root of the app and add `REACT_APP_API_KEY=` and append your API key with no spaces or quotations.

## Next Steps

Here are some initial things I could do to continue to develop the app.

1. Cache the FiveDayForecast API call so that API isn't queried everytime the button is pushed.
2. Add a back-end with Node and Express to handle API calls.
