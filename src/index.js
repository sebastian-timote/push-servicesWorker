require('dotenv').config();//guarda variables de archivos como env para que el servidor las pueda acceder
const express = require('express')
const morgan = require('morgan')//nos permite ver por consola las peticiones que van llegando 
const path = require('path')

const app = express()//configuramos un cservidor
//seccion 1 middlewares  para configurar funciones que procesan rutas
app.use(morgan('dev'))//nos permite ver por consola las peticiones que llegan
app.use(express.urlencoded({extended: false}))//cuando el dato llega por formulario 
app.use(express.json())//convertir los datos que llegan desde el frontend al servidor en un formato json
//seccion 2 routes o rutas del sevidor
app.use(require('./routes/index'));
//seccion 3 static content envia determinados archivos al navegador
app.use(express.static(path.join(__dirname,'public')));//path convierte los slash dependiendo del SO dirname trae la ruta desde el SO de la carpeta public para hacerla publica
app.listen(3000);//escucha o inicia el servidor y este es el numero del puerto
console.log('server listening...');