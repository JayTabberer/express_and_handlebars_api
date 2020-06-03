const fetch = require('node-fetch');

// const number = Math.ceil(Math.random() * 10);

const trumpData = async() => {
    const url = `https://api.tronalddump.io/random/quote/`
    let data = await fetch(url)

    let JSObject = await data.json();
    
    return JSObject
}

module.exports = {
    trumpData
}
