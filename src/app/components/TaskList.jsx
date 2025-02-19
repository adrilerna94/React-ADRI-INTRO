/* 
📌 TaskList.jsx - Lista de Tareas de la Misión 🚀
------------------------------------------------
✅ Usa `useState` para manejar el estado de las tareas
✅ Renderiza una lista de tareas dentro de un `Card` estilizado
✅ Permite marcar tareas como completadas al hacer clic en ellas
*/

"use client"; //✅ Este componente usa `useState`, por lo que debe ejecutarse solo en el cliente
import React, {useState} from "react"; // 📌 Importa React y `useState` para manejar el estado
import { Task } from "./Task"; // importamos componente Task
import { Card, CardBody, Typography } from "./ui"; // importamos componentes material tailwind

const TaskList = () => {
    /* 🔄 Estado inicial con 3 tareas predeterminadas */
    const [tasks, setTasks] = useState([
        { id: 1, text: "Aprovisionamiento de alimentos", completed: false},
        { id: 2, text: "Verificar comunicación de radiofrecuencia", completed: false},
        { id: 3, text: "Comprobar estado transbordador espacial", completed: false},
    ]);

    // ✅ Función para marcar tarea completada
    const toggleComplete = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) => {
            if (task.id === taskId) {
                return {...task, completed: true};
            }
            return task;
        })
    )};

    /* 🔽 Retorna el diseño con `Card` de Material Tailwind */
    return (
        // 📌 Contenedor Card
        <Card className="w-full max-w-md bg-gray-800 text-white shadow-lg">
            <CardBody>
                {/*🎯 Título principal de la Lista*/}
                <Typography variant= "h5" className="text-center font-bold text-amber-500 mb-4">
                    📝 Lista de Tareas de la Misión
                </Typography>
                 {/* 📋 Renderiza cada tarea dentro de una lista */}
                 <ul className="space-y-2">
                    {tasks.map((task) => (
                        <Task key= {task.id} task= {task} toggleComplete={toggleComplete}/>
                        /*
                            ✅ key={task.id} ➡️ React usa un identificador único para cada tarea.
                            ✅ task={task} ➡️ Pasa los datos de la tarea (id, text, completed) a Task.jsx.
                            ✅ toggleComplete={toggleComplete} ➡️ Pasa la función para cambiar el estado de la tarea.
                            ✅ Cuando hacemos clic en una tarea, toggleComplete(task.id) ➡️ cambia su estado.
                        */
                    ))}
                 </ul>
            </CardBody>
        </Card>

    )
}

export { TaskList } ;

/*
    🔍 Explicación Esquemática
        📌 useState → Maneja el estado de la lista de tareas
        📌 tasks.map() → Recorre el array de tareas y renderiza Task.jsx
        📌 toggleComplete(taskId) → Cambia el estado de completed: false → true
        📌 Card y Typography → Estilización con Material Tailwind
        📌 export { TaskList } → Exporta TaskList.jsx para poder usarlo en page.jsx

*/