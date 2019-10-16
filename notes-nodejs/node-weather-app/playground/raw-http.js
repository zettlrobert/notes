const https = require('https');

const url = `https://api.darksky.net/forecast/636cd7f4f059f7257a414c392aaf8891/70,-15?units=si`


const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString();
  })

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);

  })

})


request.on('error', (error) => {
    console.log(`An error, ${error}`);
})

request.end();
