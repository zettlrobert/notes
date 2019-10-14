const request = require('request');

const url = 'https://api.darksky.net/forecast/636cd7f4f059f7257a414c392aaf8891/47.747608,-11.842190?units=si';

request({ url: url, json: true}, (error, response) => {
  if (error) {
    console.log(`Couldn\'t Connect to Weather Service`);
  } else if (response.body.error) {
    console.log(`{Unable to find location}`);
  } else {
    console.log(`
      ${response.body.daily.data[0].summary}
      It is currently ${response.body.currently.temperature} degrees outside.
      There is a ${response.body.currently.precipProbability}% chance of rain
      `);
  }
})


// Geocoding
// Address --> Latitude/Longitude --> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hausham.json?access_token=pk.eyJ1IjoiemVyb2RldiIsImEiOiJjazFxajBsODgxMjJkM2NyeTZia3Fqdzk3In0.tqMlaJgcTYt0OX9G-eUeZA&limit=1';

request({url: geocodeURL, json: true}, (error, response) => {

  if (error) {
    console.log(`There was an System Error ${error}`);
  } else if (response.body.features.length === 0) {
    console.log(`Location not found, try another search.`);
  } else {
    const latitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    console.log(`
      {Latitude is ${latitude} Longitude is ${longtitude}}
      `);
  }
})




// Playground Callback Concept Simulation
// const add = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x + y);
//   }, 2000)
// }
//
//
// add(1,4, (sum) => {
//   console.log(sum); // print 5
// })
