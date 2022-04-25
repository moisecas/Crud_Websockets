//cliente 



//querySelector me permite capturar un elemento, vas a seleccionar el elemento que tiene el id (index.html)
const noteForm = document.querySelector('#noteForm')

//ahora capturamos los datos del input
const title = document.querySelector('#title')
const description = document.querySelector('#description') 



//desde noteform quiero capturar su evento
noteForm.addEventListener('submit', e =>{ //cuando se envíe ese formulario vas a capturar ese evento
    e.preventDefault()//para que no se reinice la pagina
    console.log(
        title.value, //.value para ver solo lo que contiene 
        description.value
    ) //confirmar x el inspector que se este dando el evento
    
    saveNote(title.value, description.value) 
    
    //reciendo los datos del backend para mostrar al cliente

})



//Probando el envío de eventos de mis sockets
// socket.on('ping', () =>{ //eventos del servidor, socket, escucha, desde el lado del cliente
//     socket.emit('pong') //cuando pase el evento ping, me responda, el servidor captura el evento pong y lo muestra por consola 
// }) 
