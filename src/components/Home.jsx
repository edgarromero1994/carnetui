import React, { useState, useEffect } from 'react';
import Navhome from '../nav/Navhome';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Piepagina from './Piepagina';

const Home = () => {

  const [estadoModal1, cambiarEstadoModal1] = useState(false)
  const [selectedCarnet, setSelectedCarnet] = useState(null);

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchCarnetData();
  }, []);

  const fetchCarnetData = async () => {
    try {
      const response = await fetch('http://localhost:5000/carnet');
      const data = await response.json();
      setMovies(data.arrayCarnet);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedCarnetData, setSelectedCarnetData] = useState(null);

  const handleCarnetClick = (movie) => {
    setSelectedCarnet(movie._id);
    setSelectedCarnetData(movie);
    cambiarEstadoModal1(true);
  };
  

  
  const handleformulario = () => {
    navigate('/formulario');
  };

  const handleDelete = async (carnetId) => {
    try {
      const response = await fetch(`http://localhost:5000/carnet/${carnetId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Éxito: el carnet se eliminó correctamente
        // Realiza alguna acción, como mostrar un mensaje de éxito
        console.log('Carnet eliminado correctamente');
        cambiarEstadoModal1(false);
        fetchCarnetData(); // Actualiza los datos de los carnets
      } else if (response.status === 404) {
        // Error: el servidor devuelve un error 404 (no se encontró el carnet)
        const errorMessage = await response.text();
        console.log(errorMessage);
      } else {
        // Error: el carnet no se pudo eliminar
        // Realiza alguna acción, como mostrar un mensaje de error genérico
        console.log('Error al eliminar el carnet');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  
  return (
    <div>
      <Navhome />
      <div className='cards'>
        <div className='navegacion'>
          <button onClick={handleformulario}>Ingresar Datos</button>
        </div>
        <div className='container'>
          {movies.map((movie) => (
            <div key={movie._id}>
              <div className='carnet' onClick={() => handleCarnetClick(movie)} >
                <div className='informacion'>
                  <h4>MIGUEL ANGEL ASTURIAS</h4>
                  <p>Ciudad de Guatemala, C.A.</p>
                </div>
                <div className='datos'>
                  <img src={movie.imagen} alt='' />

                  <div className='datospersonales'>
                    <span className='negrita'>Nombre: <span className='blanco'>{movie.nombre}</span></span>
                    <span className='negrita'>Direccion: <span className='blanco'>{movie.direccion}</span></span>
                    <span className='negrita'>Teléfono: <span className='blanco'>{movie.telefono}</span></span>
                    <span className='negrita'>Carrera: <span className='blanco'>{movie.carrera}</span></span>
                    <span className='negrita'>Género de poesía: <span className='blanco'>{movie.poesia}</span></span>
                  </div>
                </div>

                <div className='codigo'>
                  <h3>CODIGO: {movie.numcarnet}</h3>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    <Modal
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
    >
{selectedCarnetData && (
    <div>
      <div className='carnet' >
                <div className='informacion'>
                  <h4>MIGUEL ANGEL ASTURIAS</h4>
                  <p>Ciudad de Guatemala, C.A.</p>
                </div>
                <div className='datos'>
                  <img src={selectedCarnetData.imagen} alt='' />

                  <div className='datospersonales'>
                    <span className='negrita'>Nombre: <span className='blanco' > {selectedCarnetData.nombre}</span> </span>
                    <span className='negrita'>Direccion: <span className='blanco'> {selectedCarnetData.direccion}</span></span>
                    <span className='negrita'>Teléfono: <span className='blanco'>{selectedCarnetData.telefono} </span></span>
                    <span className='negrita'>Carrera: <span className='blanco'>{selectedCarnetData.carrera}</span> </span>
                    <span className='negrita'>Género de poesía: <span className='blanco'>{selectedCarnetData.poesia}</span> </span>
                  </div>
                </div>

                <div className='codigo'>
                  <h3>CODIGO: {selectedCarnetData.numcarnet}</h3>
                </div>

              </div>
    <div className='infocarnet'>
      <p className='negrita'>Fecha de Inscripción: <span className='blanco'>{selectedCarnetData.fecha}</span></p>
      <p className='negrita'>Género de Poesía: <span className='blanco'> {selectedCarnetData.poesia}</span> </p>
      <p className='negrita'>Edad: <span className='blanco'>{selectedCarnetData.edad} años </span></p>
      <p className='negrita'>Fecha de concurso: <span className='blanco'> {selectedCarnetData.fechaconcurso} </span> </p>
      <p className='negrita'>Fecha de nacimiento: <span className='blanco'> {selectedCarnetData.nacimiento} </span> </p>
    </div>
    <button  className='cerrarbot' onClick={() => handleDelete(selectedCarnet)}>Eliminar</button>
    </div>

      
  )}
      
    </Modal>
    <div>
    <Piepagina/>
    </div>
    </div>
  );
};

export default Home;