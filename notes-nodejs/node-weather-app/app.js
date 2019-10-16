const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const location = process.argv[2];

if (!location) {
  console.log(`Provide a location.`);
} else {
  //Second Argument, destructured data Object
  geocode(location, (error, {latitude, longtitude, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    })
  })
}


console.log(`You provided ${process.argv[2]} as location`);
