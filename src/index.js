import express from "express";
import {Server as WebSocketServer} from "socket.io" 
import http from "http" 
import {v4 as uuid} from 'uuid' //para darle a cada producto un id

const productos = []

//ya tengo un modulo de servidor que usa la configuración de express 
const app = express() //por acá podemos generar la  conexión a la base de datos
const server = http.createServer(app) //le paso app par que tenga la configuración de express 
const io = new WebSocketServer(server) //conexión a websocket 

//usa desde el modulo express static, para correr todo lo del frontend aquí
app.use(express.static(__dirname + '/public')) 

//para ejecutar websocket
io.on('connection', (socket)=>{ // socket? si.. cada vez que se haga una conexión, dime
    console.log('nueva conexión exitosa: ', socket.id) //socket es la info del cliente, puede indicarle que quiero ver, para este caso el id


    socket.emit('server:loadnotes', productos) //le voy a pasar el arreglo donde están los productos creados
    // //evento ping 
    // socket.emit('ping')
    
    // //evento pong
    // socket.on('pong', ()=>{
    //     console.log('pong') //cuando se conecte un nuevo cliente veré pong
    // })

    socket.on('client:newnote', newNote =>{ //lo recibimos mediante post
        const producto = { ...newNote, id: uuid()}
        console.log(producto)
        productos.push(producto)  //inserto la data de newnote al arreglo 
        console.log(productos)  //muestro por consola
        //al cliente le vas a emitir por pantalla los productos, emit
        socket.emit('server:newnote', producto) 
    }) //cuando escuches el evento client:newnote voy a hacer algo, el servidor escucha ese evento enviado desde el index, lado del cliente

})

server.listen(3000)
console.log('server corriendo en puerto', 3000) 