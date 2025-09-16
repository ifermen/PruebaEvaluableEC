const tareas = [];

const anadirTarea = (tarea) => {
    tareas.push(tarea);
}

const mostrarTareas = () => {
    for(i=0; i<tareas.length; i++){
        console.log((i+1) + " " + tareas[i]);
    }
}

const eliminarTarea = (index) => {
    tareas.pop(index);
}

anadirTarea("comer");
anadirTarea("ducharse");
anadirTarea("dormir");

mostrarTareas();

eliminarTarea(1);

mostrarTareas();