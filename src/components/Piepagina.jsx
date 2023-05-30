import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Piepagina = () => {
  return (
    <div className='piepaginacontent'>
      <div className='redes-sociales'>
       
          <FaFacebook />
 
          <FaInstagram />
     
          <FaYoutube />
      
  
          <FaWhatsapp />
   
      </div>
      <div>
        <p className='kursiva'>Guatemala, C.A año 2023 </p>
      </div>
    </div>
  );
};

export default Piepagina