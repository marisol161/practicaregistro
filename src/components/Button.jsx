import React from 'react'

const Button = ({nombre, clase}) => {
  return (
    <div className={`btn btn-outline-${clase}`}>{nombre}</div>
  )
}

export default Button