console.log('Client Side JS');

const d = document;
const weatherForm = d.querySelector('form');
const search = d.querySelector('input');
const messageOne = d.querySelector('.message-1');
const messageTwo = d.querySelector('.message-2');


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messageOne.textContent = 'content loading...'
  messageTwo.textContent = '';

  const location = search.value;
  const url = `http://127.0.0.1:3000/weather?address=${location}`


  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = 'Error loading Weather Data!'
        messageTwo.textContent = data.error;
        console.log(data.error);

      } else {
        messageOne.textContent = `Your Location:${data.location}`
        messageTwo.textContent = `Forecast:${data.forecast}`
        console.log(data.location);
        console.log(data.forecast);
      }
    })
  })

})
