import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube,} from 'react-icons/fa';

const Piepagina = () => {
  return (
    <div className='piepaginacontent'>
      <div className='redes-sociales'>
        <a href='https://m.facebook.com/people/Edgar-Romero-Cuc/100082536101229/' className='redes-sociales-icono'>
          <FaFacebook />
        </a>
        <a href='https://www.instagram.com/edgarromero_123/' className='redes-sociales-icono'>
          <FaInstagram />
        </a>
        <a href='https://m.facebook.com/people/Edgar-Romero-Cuc/100082536101229/' className='redes-sociales-icono'>
          <FaYoutube />
        </a>
      </div>
      <div>
        <p className='kursiva'>Guatemala, C.A año 2023 </p>
      </div>
    </div>
  );
};

export default Piepagina