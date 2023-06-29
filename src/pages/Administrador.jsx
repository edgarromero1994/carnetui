import React, { useState } from 'react'
import Navhome from '../nav/Navhome'
import { useNavigate } from 'react-router-dom';
import Piepagina from '../components/Piepagina';
import Spiner from '../components/Spiner';

const Administrador = () => {
    const admin = {
        usuario: "edgar",
        contraseña: "45984577"
      };
    
      const navigate = useNavigate();
      const [usuario, setUsuario] = useState('');
      const [contraseña, setContraseña] = useState('');
      const [loggedIn, setLoggedIn] = useState(false);
      const [errorMessage, setErrorMessage] = useState(null);
      const [showSpinner, setShowSpinner] = useState(false);
    
      const handleLogin = (event) => {
        event.preventDefault();
    
        // Verificar si los datos de inicio de sesión son válidos
        const adminUser = admin.usuario;
        const adminPassword = admin.contraseña;
    
        if (usuario === adminUser && contraseña === adminPassword) {
          // Inicio de sesión exitoso
          setLoggedIn(true);
        } else {
          // Inicio de sesión fallido
          setErrorMessage('Nombre de usuario o contraseña incorrectos.');
          setLoggedIn(false);
        }
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Mostrar spinner
        setShowSpinner(true);
    
        // Simular espera de 5 segundos
        await new Promise((resolve) => setTimeout(resolve, 5000));
    
        // Ocultar spinner
        setShowSpinner(false);
    
        // Verificar las credenciales y realizar el inicio de sesión
        handleLogin(event);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'usuario') {
          setUsuario(value);
        } else if (name === 'contraseña') {
          setContraseña(value);
        }
      };
    
      if (loggedIn) {
        // Redirigir al usuario a otra página si se ha iniciado sesión con éxito
        navigate('/listado');
      }


  return (
    <div>
    <Navhome />
    <div className='cards'>
      <div className='navegacion'>
        <button onClick={() => navigate('/home')}>Ver Carnets</button>
        <button onClick={() => navigate('/formulario')}>Ingresar Datos</button>
      </div>
      <div className='formularios'>
        <form action='' onSubmit={handleSubmit}>
          <div className='formulariodatos'>
          <h4 className='formulariotitulo'>Administrador</h4>
            <label htmlFor='usuario'>Usuario</label>
            <input
              type='text'
              placeholder='Ingresa tu nombre'
              name='usuario'
              value={usuario}
              onChange={handleChange}
            />

            <label htmlFor='contraseña'>Contraseña</label>
            <input
              type='password'
              placeholder='Ingresa tu contraseña'
              name='contraseña'
              value={contraseña}
              onChange={handleChange}
            />

            <div className='botoenviar'>
              <button type='submit'>Ingresar</button>
            </div>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
          </div>
        </form>
      </div>
    </div>

    <div>{showSpinner && <Spiner />}</div>

    <div>
      <Piepagina />
    </div>
  </div>

  )
}

export default Administrador