const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiemVyb2RldiIsImEiOiJjazFxajBsODgxMjJkM2NyeTZia3Fqdzk3In0.tqMlaJgcTYt0OX9G-eUeZA&limit=1`

  request({
    url,
    json: true
    //Body destructured response Object
  }, (error, { body }) => {
    if (error) {
      callback(`Unable to connect to location services!`, undefined)
    } else if (body.features.length === 0) {
      callback(`Unable to find location, try another search`, undefined)
    } else {

      callback(undefined, {
        longtitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })

}


module.exports = geocode;