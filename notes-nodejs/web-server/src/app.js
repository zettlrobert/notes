const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__filename);
console.log(__dirname);

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//Setup static directory to serve
app.use(express.static(publicDirPath));


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Robert Zettl'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Robert Zettl'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Helpful Message, you are stuck? Bad for you!',
    title: 'Help',
    name: 'Robert Zettl'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 50,
    location: 'Hausham'
  });
})


// 404 Pages
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Page not found',
    error: 'Help Documentation not found!'
  });
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found',
    error: '404 Page not found'
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
