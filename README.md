# Async Twitter

El Objetivo de este ejercicio es hacer uso del API de Twitter para:

- Publicar un nuevo tweet.
- Hacer un reply a ese tweet.
- Dar Like al reply de ese tweet.
- Hacer un retweet con quote del reply.

Para esto forzosamente tendremos que esperar a que el API de Twitter publique el tweet inicial, y nos devuelva la data del mismo para así conocer el id con el que fue publicado(requisito para poder realizar un reply), esto lo repetiremos en cada paso.

A excepción de los ultimos 2 pasos, donde ya contamos con el id del reply y por lo tanto podemos realizar las 2 acciones en paralelo.

![Sequencia](sequence.png  "Sequencia")

## Herramientas
Para este ejercicio vamos a usar:

- El API de Twitter, especificamente la parte de [Post, retrieve and engage with Tweets](https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update).
- El paquete de  npm [Twitter](https://www.npmjs.com/package/twitter).
- NodeJs

## Inicialización
De ahora en delante en todos los proyectos encontrarás un [package.json](package.json), en él se almacenan todas las dependencias necesarias para correr el proyecto, gracias a él puedes simplemente ejecutar ```npm install``` desde la raíz del proyecto y todas las dependencias se instalarán automáticamente.

```
npm install
```

## Proceso

- Entra a [apps.twitter.com](https://apps.twitter.com/) y crea una nueva app, los permisos por defecto (Read/Write) son más que suficiente para esta prueba.

- En la sección Keys and Access Tokens encontrarás el ```consumer_key``` y el ```consumer_secret```, los necesitarás para llenar nuestro archivo de configuración.

- Al fondo encontrarás el botón nombrado Create access token, has click y Twitter te generará un ```access_token_key``` y un ```access_token_secret```, los necesitarás para llenar nuestro archivo de configuración.

Busca tu archivo [client.js](client.js) y reemplaza los valores por los tuyos:
```
const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});
```
## Twitter API

Las APIS son en su forma más burda una URL, como por ejemplo (https://api.twitter.com/1.1/statuses/update.json)[https://api.twitter.com/1.1/statuses/update.json] que se subdivide en partes.

- Protocolo: https://
- Dominio: api.twitter.com/
- Versión: 1.1/
- Endpoint: statuses/update
- Extensión: .json

Cuando queremos interactuar con ella utilizaremos alguno de los métodos estándard del protocolo HTTP (GET, POST, PUT, PATCH, DELETE, UPDATE).

Los 2 más básicos son:

- **GET:**  Se obtiene data sin provocar cambio alguno en los datos de API.
- **POST**: Se busca provocar un cambio en los datos del API, como crear un nuevo elemento o actualizar lo datos de alguno existente.

El paquete que descargamos para interactuar con el API de Twitter nos hace la vida más sencilla al manejar todos los valores por defecto para twitter y permitirnos interactuar con el API cambiando solo las cosas que son relevante para nosotros, **el método** (GET/POST) y el **EndPoint**, así mismo utiliza elegantes promesas para manejar el flujo del programa y los errores.

```
client.post('statuses/update', {
    status: 'Este es un tweet de prueba',
})
.then( (tweet) => {
    console.log(tweet);
})
.catch( (error) => {
    console.log(error);
});
```

## Ejecución

Para comenzar a correr el código, entra a la raíz de tu proyecto y ejecuta
```
node app.js
```

Entra a [la documentación del paquete Twitter](https://www.npmjs.com/package/twitter) para ver más detalles y darte ideas de que más puedes hacer, así mismo [app.js](app.js) comentado el flujo de acciones que describrimos al inicio del README.md, síguelo en compañia de tu *coach* y no olvides preguntar TODO.

