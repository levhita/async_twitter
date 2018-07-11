const client = require('./client');

client.post('statuses/update', {
    status: 'Este es un tweet de prueba, solo para ver que estructura tiene la respuesta del API',
})
.then( (tweet) => {
    console.log(tweet);
})
.catch( (error) => {
    console.log(error);
});

/*client.post('statuses/update', {
    status: 'Este es el primer tweet en nuestra cadena de tuits, noten como usamos el .then() para capturar su data',
})
.then( (tweet) => {
    //console.log(tweet);
    console.log(`El tuit "${tweet.text}" fue publicado, con el id "${tweet.id_str}"`);
    return client.post('statuses/update', {
        status: "Usando la data del tuit pasado podemos hacerle reply haciendo uso de in_reply_to_status_id",
        in_reply_to_status_id: tweet.id_str,
    });
})
.then( (tweet) => {
    //console.log(tweet);
    console.log(`El tuit "${tweet.text}" fue publicado, con el id "${tweet.id_str}"`);
    console.log("Ahora que el reply existe podemos darle un like");
    client.post('favorites/create', {
        id: tweet.id_str,
    }).then((tweet) => {
        console.log(`Le dimos like al tuit "${tweet.text}", con el id "${tweet.id_str}"`);
    });
    
    console.log("Y hacerle el quote, generando una bifurcación");
    return client.post('statuses/update', {
        status: `Y ahora le hacemos quote al reply https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`,
    });
})
.then( (tweet) => {
    //console.log(tweet);
    console.log(`El retweet quoteado "${tweet.text}" fue publicado, con el id "${tweet.id_str}"`);
})
.catch( (error) => {
    console.log(error);
});*/