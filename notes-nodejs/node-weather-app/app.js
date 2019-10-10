const request = require('request');

const url = 'https://api.darksky.net/forecast/636cd7f4f059f7257a414c392aaf8891/47.747608,-11.842190?units=si';

request({ url: url, json: true}, (error, response) => {
  console.log(`
    ${response.body.daily.data[0].summary}
    It is currently ${response.body.currently.temperature} degrees outside.
    There is a ${response.body.currently.precipProbability}% chance of rain
    `);
})
