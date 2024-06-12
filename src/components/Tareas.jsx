import React from 'react'

const Tareas = ({status,tarea,editarTarea,eliminarTarea,id}) => {
  return (
    <>
    <div
              className={
                status
                  ? "alert alert-danger mb-2 col-4 d-flex justify-content-between"
                  : "alert alert-success mb-2 col-4 d-flex justify-content-between"
              }
            >
              <p>{tarea}</p>
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => editarTarea(id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(id)}
                >
                  Borrar
                </button>
              </div>
            </div>
    </>
    
    
  )
}

export default Tareas