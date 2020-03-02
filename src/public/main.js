const  PUBLIC_VAPID_KEY = 'BAtKda8F-asJqK8Tw9-YEsCx1_TbELidV30Iruy2a0VevknRlT1AWzMx6LGhUfEWfouTuEV17N6SCzO3U1fLYk8';
//convierte string a array
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

const subscription = async () => {

    //registration services worker 
    const register = await navigator.serviceWorker.register('/workerSvc.js', {
        scope:'/'
    });
    console.log('new services worker');

    //utilizar el services worker para escuchar o enviar peticiones
    //le enviamos este objeto al servidor
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });
    //envio la peticion al servidor
    await fetch('/subscription',{
        method: 'POST',
        body: JSON.stringify(subscription),//los convertimos a string
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log('subscribed!');
}
subscription();