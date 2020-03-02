const webpush = require('web-push')
//generamos llaves por consola pero tambien se puede por codigo
//console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY);//mostramos en consola las variables de entorno para acceder a una variables del servidor usamos process
webpush.setVapidDetails('mailto:stimotev11@gmail.com',
process.env.PUBLIC_VAPID_KEY,
process.env.PRIVATE_VAPID_KEY);//para decirle desde donde estan llegando las notificaciones//se puede colocar el nombre del dominio

module.exports = webpush;