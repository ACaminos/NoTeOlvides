const RecordatorioGrabado = document.getElementById('Final');

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#Formulario').addEventListener('submit',agregarRecordatorio);
}

function agregarRecordatorio(e){
    e.preventDefault();
    const Titulo = document.querySelector('#Title').value;
    const Descripcion = document.querySelector('#comentario').value;
    let eleccion = document.getElementsByName('importancia');
    for(i=0; i<eleccion.length; i++){
        if(eleccion[i].checked){
        eleccion =eleccion[i].value;
        }
    }
    const botonBorrar = document.createElement('a'); //Intento de boton de borrar sin funcionalidad
    botonBorrar.classList = 'borrar-recordatorio';
    botonBorrar.innerText= 'X';
    const objeto = {
        Titulo , Descripcion , eleccion
    }

    const lista = document.getElementById('Final');
    lista.innerHTML = " Titulo: " + objeto.Titulo+"\n"+ " Descripción: " + objeto.Descripcion +"\n"+ " Prioridad: " +objeto.eleccion + "\n";
     
    console.log(objeto);
}