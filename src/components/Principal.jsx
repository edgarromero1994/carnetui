import React from 'react';
import Navhome from '../nav/Navhome';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Componente from './Componente';
import Piepagina from './Piepagina';

export const Principal = () => {

  const navigate = useNavigate();
  const handleformulario = () => {
    navigate('/formulario');
  };
  return (
    <div
      className='principal'
      style={{ backgroundImage: "url('https://www.actualidadfallera.es/images/stories/200701/declamacion1.jpg')" }}
    >
      <div className='overlay'></div> {/* Superposición opaca */}
      <Navhome />
      <div className='bienvenido'>
        <h1 >Bienvenido...</h1>
        <p >
          La Universidad de Guatemala tendrá un evento de poesía y se ha emitido invitación a todos los
          jóvenes estudiantes a participar, los requerimientos para ello ser mayor de 17 años.
        </p>

            <div className='botonreg'>
                <button onClick={handleformulario} >Registrarse</button>
            </div>
      </div>
      <Componente/>
  
      <Piepagina/>
    </div>
    
  );
};