function agregarTarea() {
    
    //Obtenemos valor del campo tarea
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;


//Validamos que el valor no sea vacío
    if(nuevaTareaTexto === ""){
        alert("La tarea no puede estar vacía");
        return;
    }

    //Crear elemento li
    let nuevaTarea = document.createElement("li");
    
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.onclick = function() {
        nuevaTarea.remove();
    }

    //Agregar botón eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Aregar el elemento/tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpieza del campo
    document.getElementById("nuevaTarea").value = "";
    
}