import {
    saveTask
} from "./firebase.js";


const taskForm = document.getElementById("task-form");

taskForm.addEventListener("submit", async (e) => {  //AGREGAR NUEVAS ENTRADAS
    e.preventDefault();
    const sku = taskForm["task-sku"];
    const ubi = taskForm["task-ubi"];

    try {
        console.log("ingreso exitoso")
        await saveTask(
            sku.value, 
            ubi.value, 
            ); //Se mandan todos los elementos obtenidos con .value directamente
        taskForm.reset(); //Vacias los inputs una vez que se ha guardado la información
        sku.focus(); //regresar el cursor al título

    } catch (error) {
        console.log(console.log("ERROR:", error));
    }
});