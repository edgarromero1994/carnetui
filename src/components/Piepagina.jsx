import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Piepagina = () => {
  return (
    <div className='piepaginacontent'>
      <div className='redes-sociales'>
        <a href='#' className='redes-sociales-icono'>
          <FaFacebook />
        </a>
        <a href='#' className='redes-sociales-icono'>
          <FaInstagram />
        </a>
        <a href='#' className='redes-sociales-icono'>
          <FaYoutube />
        </a>
        <a href='#' className='redes-sociales-icono'>
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <p className='kursiva'>Guatemala, C.A año 2023 </p>
      </div>
    </div>
  );
};

export default Piepagina