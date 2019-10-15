const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const location = process.argv[2];

if (!location) {
  console.log(`Provide a location.`);
} else {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    })
  })
}


console.log(`You provided ${process.argv[2]} as location`);
