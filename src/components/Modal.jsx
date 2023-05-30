import React from 'react'



const Modal = ({children, estado, cambiarEstado}) => {
  return (
    <>
    {estado && 
   <div className='modal'>
     
       <div className='containetmodal'>
        <div className='cerrarmodal'>
            <button onClick={() => cambiarEstado(false)}>X</button>
        </div>
          {children}
       </div>
    </div>
  }
    </>

  )
 
}

export default Modal