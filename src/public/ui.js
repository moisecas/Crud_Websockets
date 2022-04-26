//interfaz de usuario 

const notesList = document.querySelector('#notes') 

let saveID = "" //GUARDAR LO QUE QUIERO ACTUALIZAR 

const noteUI = note => {

    const div = document.createElement('div') 

    console.log(note) 
    //de las notas que vas a recibir, muestra
    div.innerHTML = `
    <div class = "card card-body mb-2">
        <div class="d-flex justify-content-between">  
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
            <button class="btn btn-danger delete" data-id="${note.id}">Delete</button>
            <button class="btn btn-secondary update" data-id="${note.id}">update</button> 
            </div>
        </div>
        <p>
        ${note.description}
        </p>
    </div>
    
    
    `; 
    const btnDelete = div.querySelector('.delete')  //tenga la clase delete, del div busca la clase delete
    const btnUpdate = div.querySelector('.update')  //tenga la clase delete, del div busca la clase update

    btnDelete.addEventListener('click', ()=>{
        deleteNote(btnDelete.dataset.id)
    })//cuando se ejecute un click en el boton delete, voy a mostrar el id 

    btnUpdate.addEventListener('click', ()=>{
        getNote(btnUpdate.dataset.id) //vas a ejecutar el evento getnote
    })//cuando se ejecute un click en el boton delete, voy a mostrar el id 

    return div // retornar un div para que liste los productos 
};

const renderNotes = notes =>{
    notesList.innerHTML=""; 
    notes.forEach((note) =>{
        notesList.append(noteUI(note)) 
    }); 
}//cuando renderizo recibo una lista de productos, recorro los productos 

const appendNote = note =>{ //recibe producto, agrega un nuevo producto
    notesList.append(noteUI(note))
}