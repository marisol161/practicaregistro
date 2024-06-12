import React from 'react'

const Formulario = ({setTarea,agregarTarea,tarea}) => {
  return (
    <>
      <h5>Practica de Js</h5>
      <form
        className="d-flex mb-4"
        onSubmit={(evt) => {
          evt.preventDefault();
          agregarTarea(tarea);
          setTarea("");
          console.log(listaTareas);
        }}
      >
        <input
          required
          className="p-1 me-2 form-control"
          placeholder="Escribiendo..."
          value={tarea}
          onChange={(evt) => {
            setTarea(evt.target.value);
          }}
        />
        <button className="btn btn-outline-primary">Agregar</button>
      </form>
    
    </>



  )
}

export default Formulario