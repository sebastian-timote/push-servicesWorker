console.log('in services worker');
//self hace referencia a este archivo worker
self.addEventListener('push', e => {
    const data = e.data.json()
    console.log(data);
    self.registration.showNotification(data.title,{
        body:data.message,
        icon:'https://img2.freepng.es/20190516/qop/kisspng-portable-network-graphics-clip-art-youtube-image-c-material-design-s-svg-vector-icon-sets-free-icons-5cde0f25930565.1129893115580567416022.jpg'
    })

})
