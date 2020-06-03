const fetch = require('node-fetch');


const starWars = async (number) => {
    const url = `https://swapi.dev/api/people/${number}`
    let data = await fetch(url);
    
    
    let JSObject = await data.json();
    console.log(JSObject);
    return JSObject
}

module.exports = {
    starWars
}