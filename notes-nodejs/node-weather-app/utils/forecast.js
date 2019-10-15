const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/636cd7f4f059f7257a414c392aaf8891/${lat},${long}?units=si`

  request({
    url: url,
    json: true
  }, (error, response) => {
    if (error) {
      callback(`Couldn\'t Connect to Weather Service`, undefined);
    } else if (response.body.error) {
      callback(`{Unable to find location}`, undefined);
    } else {
      callback(undefined, `
        ${response.body.daily.data[0].summary}
        It is currently ${response.body.currently.temperature} degrees outside.
        There is a ${response.body.currently.precipProbability}% chance of rain
      `)
    }
  })
}

module.exports = forecast;
