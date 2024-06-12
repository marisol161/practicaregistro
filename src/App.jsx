import { useState } from "react";
import Tareas from "./components/Tareas";
import Button from "./components/Button";
import Formulario from "./components/Formulario";

function App() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [contadorID, setcontadorID] = useState(0);

  const agregarTarea = (task) => {
    let nuevaTarea = {
      id: contadorID,
      tarea: task,
      status: true,
    };

    setcontadorID(contadorID + 1);

    setListaTareas([...listaTareas, nuevaTarea]);
  };

  const editarTarea = (id) => {
    let listaTemporal = listaTareas.map(({ status, id: idTarea, tarea }) => {
      if (idTarea === id) {
        return {
          status: !status,
          id: idTarea,
          tarea: tarea,
        };
      } else {
        return {
          status: status,
          id: idTarea,
          tarea: tarea,
        };
      }
    });
    setListaTareas(listaTemporal);
  };

  const eliminarTarea = (id) => {
    let nuevaLista = listaTareas.filter((tarea) => tarea.id !== id);
    setListaTareas(nuevaLista);
  };

  return (
    <div className="container-fluid mt-5 d-flex flex-column align-items-center">
      <Formulario
      setTarea = {setTarea}
      agregarTarea = {agregarTarea}
      tarea={tarea}
      />
      {listaTareas.length > 0 ? (
        listaTareas.map(({ tarea, id, status }, index) => {
          return (

            <Tareas
            key = {index}
            status = {status}
            tarea = {tarea}
            id = {id}
            editarTarea = {editarTarea}
            eliminarTarea = {eliminarTarea}
            />
          );
        })
      ) : null}
       <Button nombre="Saludo" clase="warning"/>
       <Button nombre="Despidete" clase="danger"/>

    </div>
  );
}

export default App;