const { Router } = require('express')//trae solo el router de la libreria express
const router = Router()
const webpush = require('../webpush');
let pushSubscription;//gracias a este dato se a donde enviar el push
//crear ruta post
router.post('/subscription', async (req, res) => {
    pushSubscription = req.body;//guardamos los datos de la suscripcion del cliente
    res.status(200).json();
    //este es el mensaje que quiero enviar 
    const mensajePush = JSON.stringify({
        title: 'My custom Notification',
        message:'hello world'
    })
    try {
        await webpush.sendNotification(pushSubscription, mensajePush)       
    } catch (error) {
        console.log(error);
    }
})//respondo con mensaje de ok


module.exports = router;