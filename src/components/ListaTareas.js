import React, {useState} from "react";
import "../hojas-de-estilo/ListaTareas.css";
import TareaForm from "./TareaForm";
import Tarea from "./Tarea";

function ListaTareas(){

    const [tareas, setTareas]= useState([]);

    const agregarTarea = tarea => {
        
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActulizadas = [tarea, ...tareas];
            setTareas(tareasActulizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActulizadas = tareas.filter (tarea => tarea.id !== id);
        setTareas(tareasActulizadas);
    }

    const completarTarea = id =>{
        const tareasActulizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActulizadas);
    }
    return(
        <>
        <TareaForm onSubmit={agregarTarea} />
        <div className="tareas-lista-contenedor">
            {
                tareas.map((tarea) =>
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}

                    />
                )  
            }
        </div>
        </>
    );
}

export default ListaTareas;