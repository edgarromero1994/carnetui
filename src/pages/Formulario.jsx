import React, { useState } from 'react'
import Navhome from '../nav/Navhome'
import { useNavigate } from 'react-router-dom';
import Piepagina from '../components/Piepagina';
import Spiner from '../components/Spiner';

const Formulario = () => {

  const [showSpinner, setShowSpinner] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    genero: '',
    nacimiento: '',
    carrera: '',
    poesia: '',
    imagen: '',
    telefono: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleHome = async (route) => {
    setShowSpinner(true); // Mostrar el spinner
    // Simular un retraso de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setShowSpinner(false); // Ocultar el spinner

    navigate(route); // Redirigir a la ruta especificada
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // mensaje de error
    for (const key in formData) {
      if (formData[key] === '') {
        setErrorMessage('Debes llenar todos los campos vacios');
        return; // Detener la ejecución si hay un campo vacío
      }
    }

    setShowSpinner(true);

    // Simular espera de 5 segundos
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Ocultar spinner
    setShowSpinner(false);

    // Aquí puedes realizar la llamada a tu API para enviar los datos
    try {
      const response = await fetch('https://carnettapi-production-05da.up.railway.app/carnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Éxito: los datos se enviaron correctamente
        // Realiza alguna acción, como redirigir al usuario a una página de confirmación
        console.log('Datos enviados correctamente');
        navigate("/home");

      } else if (response.status === 400) {
        // Error: el servidor devuelve un error 400
        const errorMessage = await response.text();
        setErrorMessage(errorMessage);
      } else {
        // Error: los datos no se pudieron enviar
        // Realiza alguna acción, como mostrar un mensaje de error genérico
        console.log('Error al enviar los datos');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



    return (
    <div> 
        <Navhome/>
        <div className='cards'>
        <div className='navegacion'>
        <button onClick={() => handleHome('/home')}>Ver Carnets</button>
        <button onClick={() => handleHome('/administrador')}>Participantes</button>
            </div>
            <div className='formularios'>
              <form action=""  onSubmit={handleSubmit}>
              <div className='formulariodatos'>
                <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              placeholder='Ingresa tu nombre'
              name='nombre'
              value={formData.nombre}
              onChange={handleChange}
            />

            <label htmlFor="direccion">Direccion</label>
            <input
              type="text"
              placeholder='Direccion'
              name='direccion'
              value={formData.direccion}
              onChange={handleChange}
            />

            <label htmlFor="genero">Genero</label>
            <select
              name='genero'
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="ma">Masculino</option>
              <option value="fe">Femenino</option>
            </select>

            <label htmlFor="nacimiento">Fecha de nacimiento</label>
            <input
              type="date"
              placeholder='Fecha de Nacimiento'
              name='nacimiento'
              value={formData.nacimiento}
              onChange={handleChange}
            />

            <label htmlFor="carrera">Carrera</label>
            <input
              type="text"
              placeholder='carrera'
              name='carrera'
              value={formData.carrera}
              onChange={handleChange}
            />
                <label htmlFor="">Genero de poesia</label>
                <select
                name='poesia'
                value={formData.poesia}
              onChange={handleChange}
                >
                <option value="lirica">Lirica</option>
                <option value="epica">Epica</option>
                <option value="dramatica">Dramatica</option>
                </select>

            <label htmlFor="imagen">Ingresa el link de tu foto</label>
            <input
              type="text"
              placeholder='imagen'
              name='imagen'
              value={formData.imagen}
              onChange={handleChange}
            />

            <label htmlFor="telefono">Telefono</label>
            <input
              type="text"
              placeholder='telefono'
              name='telefono'
              value={formData.telefono}
              onChange={handleChange}
            />
                
                <div className='botoenviar'>
                 <button type='submit' >Enviar</button>
                </div>
                {errorMessage && <div className='error-message'>{errorMessage}</div>}
                </div>
              </form>
            </div>
        </div>
      
        <div>
        {showSpinner && <Spiner />}
        </div>
    <div>
      <Piepagina/>
    </div>
    </div>
  )
}

export default Formulario