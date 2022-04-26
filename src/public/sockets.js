
const socket = io() //me decuelve la conexión del servidor 

/**
 * save a new product 
 * @param {string} title note title
 * @param {string} description note description 
 */

const saveNote = (title,description) =>{
    socket.emit('client:newnote', {
        title,
        description, 
    }); //cuando envíe desde el lado del cliente, evento y datos, el cliente emite el evento y el servidor va a esccuhar
    
};

const deleteNote = id =>{
    socket.emit('client:deletenote', id);  
    console.log(id) //solo necesito el id de lo que voy a borrar
}; 

const getNote = (id) => { //enviar este evento para obtener algo
    socket.emit("client:getnote", id); //emite evento y le paso como valor el id
}


const updateNote = (id,title,description)=>{
    socket.emit('client:updatenote', {
        id,
        title,
        description
    })
}

//cuando escuches el evento, haz 

socket.on('server:newnote', appendNote) //mostrando los datos en el frontend

//cuando el servidor te envíe el evento loadnotes vamnos a mostrar esos productos 
socket.on('server:loadnotes', renderNotes)

socket.on('server:selectednote', note =>{
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')

    title.value = note.title
    description.value=note.description

    saveID = note.id 
})