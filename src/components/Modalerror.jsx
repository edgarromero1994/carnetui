import React from 'react'

const Modalerror = ({children,  estado, cambiarEstado}) => {
  return (
    <>
      {estado && 
    <div className='modal'>
      <div className='container-modal-error'>
        <div className='cerrar-modal'>
          <button onClick={() => cambiarEstado('')}>X</button>
        </div>
        {children}
      </div>
    </div>
      }
  </>
  )
}

export default Modalerror