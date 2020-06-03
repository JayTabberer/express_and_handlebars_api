const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
//npm i body-parser
const app = express(); //initialise express as a function

require('dotenv').config()

//Set up of the body-parser in order to use app.post
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({extended: false}));
//ignore data types and make EVERYTHING a string
app.use(bodyParser.json());
//end of body-parser for set-up of the app.post

//imports
const rickAndMorty = require('./lib/rickandmorty');
const theDonald = require('./lib/thetrump')
const starwars = require('./lib/starwars')


// setting up of paths for style.css and other client-side code (any other js files that run in the browser)
// and creation of the handlebars (hbs) template
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

// app.get & app.listen set up for basic express web-server
app.get('/rickandmorty', async(req, res) => {
    
    res.render('rickandmorty',  );
    }
);

app.post('/rickandmorty', async(req, res) => {
    let number = req.body.number // must be declared before the below data variable or error "cannot access 'number" before inititialization will throw
    let data = await rickAndMorty.rickAndMortyData(number);
    
    let name = data.name
    let species = data.species
    let gender = data.gender
    res.render('rickandmorty', {data: {name, species, gender}});
})

app.get('/thetrump', async(req, res) => {
    let data = await theDonald.trumpData();
    let quote = data.value


    res.render('thetrump', { data: {quote} });
})

app.post('/starwars', async(req, res) => {
    let number = req.body.number
    let data = await starwars.starWars(number)
    let name = data.name
    let height =  data.height
    

    res.render('starwars', {data: {name, height}});
})

app.get('/starwars', async(req, res) => {
    // let data = await starwars.starWars();
    
    
    res.render('starwars', { });
})


app.listen(3000, () => {
    console.log('Port 3000 ready to gooooooooo');
    
})