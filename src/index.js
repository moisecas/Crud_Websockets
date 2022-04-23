import express from "express";
import {Server as WebSocketServer} from "socket.io" 
import http from "http" 

//ya tengo un modulo de servidor que usa la configuración de express 
const app = express()
const server = http.createServer(app) //le paso app par que tenga la configuración de express 
const io = new WebSocketServer(server) //conexión a websocket 

//usa desde el modulo express static, para correr todo lo del frontend aquí
app.use(express.static(__dirname + '/public')) 

//para ejecutar websocket
io.on('connection', (socket)=>{ // socket? si.. cada vez que se haga una conexión, dime
    console.log('nueva conexión exitosa: ', socket.id) //socket es la info del cliente, puede indicarle que quiero ver, para este caso el id
})

server.listen(3000)
console.log('server corriendo en puerto', 3000) 