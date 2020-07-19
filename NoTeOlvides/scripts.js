const RecordatorioAlto = document.getElementById('Hight');
const RecordatorioMedio = document.getElementById('Medium');
const RecordatorioBajo = document.getElementById('Low');

eventListeners();

function eventListeners(){
    //Cuando se envia el formulario
    document.querySelector('#Formulario').addEventListener('submit',agregarRecordatorio);
}

function agregarRecordatorio(e){
    e.preventDefault();
    //obtener datos
    const Titulo = document.querySelector('#Title').value;
    const Descripcion = document.querySelector('#comentario').value;
    let eleccion = document.getElementsByName('importancia');
    for(i=0; i<eleccion.length; i++){
        if(eleccion[i].checked){        //Reconoce el radio button que esta seleccionado
        eleccion =eleccion[i].value;
        }
    }
    
     //Intento de boton de borrar sin funcionalidad
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-recordatorio';
    botonBorrar.innerText= 'X';

    const lista = document.createElement('li');
    lista.innerText = " Titulo: " + Titulo+"\n"+ " Descripción: " + Descripcion +"\n"+ " Prioridad: " +eleccion + "\n"+"\n";
    
    // Segun el radio button elegido va a un Div diferente con estilos diferentes
    switch (eleccion)
    {
        case 'Alta':
                    RecordatorioAlto.appendChild(lista);
                    break;
        case 'Media':
                    RecordatorioMedio.appendChild(lista);
                    break;
        case 'Baja':
                    RecordatorioBajo.appendChild(lista);
                    break;
    }
}