"use client"; // ✅ Requerido en Next.js para componentes interactivos
import React from "react";
import { Typography } from "@/ui";

// 🎯 Task recibe como props una tarea task y una función de toggleComplete para cambiar el estado a completado
const Task = ({ task, toggleComplete }) => {
    return (
        <li onClick={() => toggleComplete(task.id)} // ✅ Cambia estado de la tarea al hacer click
         className= {`cursor-pointer p-2 border-b border-gray-700 ${task.completed ? "line-through text-gray-400" : "text-white"}`}>
            
            {/* 📌 Muestra el texto de la tarea con estilos dinámicos*/}
            <Typography variant="paragraph" className="text-lg">
                {task.text}
            </Typography>
        </li>
    );
};

export { Task };

/*
    ✅ Resumen:
        ➡️ onClick cambia el estado de la tarea al hacer clic.
        🆗 Si la tarea está completada, se tachará (line-through) y cambiará de color (text-gray-400).
        🛑 Se usa Typography de Material Tailwind para una mejor apariencia.
*/