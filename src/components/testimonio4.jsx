import React from 'react'

const testimonio4 = (props) => {
  return (
    <>
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../images/image3.jpg')} alt="imagen" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-cargo'>{props.testimonio}</p>
            </div>
        </div>
    </>
  )
}

export default testimonio4
