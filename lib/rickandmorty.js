const fetch = require('node-fetch');

const rickAndMortyData = async(number) => {
    const url = `https://rickandmortyapi.com/api/character/${number}`
    let data = await fetch(url);

    let JSObject = await data.json();
    
    
    return JSObject
}

module.exports = {
    rickAndMortyData
}