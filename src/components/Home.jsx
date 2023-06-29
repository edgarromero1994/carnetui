import React, { useState, useEffect } from 'react';
import Navhome from '../nav/Navhome';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Piepagina from './Piepagina';
import Spiner from './Spiner';

const Home = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [estadoModal1, cambiarEstadoModal1] = useState(false)

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
    setSelectedCarnetData(movie);
    cambiarEstadoModal1(true);
  };
  

  
  const handleHome = async (route) => {
    setShowSpinner(true); // Mostrar el spinner
    // Simular un retraso de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setShowSpinner(false); // Ocultar el spinner

    navigate(route); // Redirigir a la ruta especificada
  };



  
  return (
    <div>
      <Navhome />
      <div className='cards'>
        <div className='navegacion'>
        <button onClick={() => handleHome('/formulario')}>Ingresar Datos</button>
        <button onClick={() => handleHome('/administrador')}>Participantes</button>
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
    </div>

      
  )}
      
    </Modal>
    <div>
    <Piepagina/>
    </div>
    <div>
    <div>
        {showSpinner && <Spiner />}
        </div>
    </div>
    </div>
  );
};

export default Home;