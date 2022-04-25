
const socket = io() //me decuelve la conexión del servidor 

const saveNote = (title,description) =>{
    socket.emit('client:newnote', {
        title,
        description, 
    }); //cuando envíe desde el lado del cliente, evento y datos, el cliente emite el evento y el servidor va a esccuhar
    
};

socket.on('server:newnote', appendNote) //mostrando los datos en el frontend

//cuando el servidor te envíe el evento loadnotes vamnos a mostrar esos productos 
socket.on('server:loadnotes', loadNotes)