import React, { useState,  useEffect } from 'react'
import Navhome from '../nav/Navhome'
import Piepagina from './Piepagina';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View  } from '@react-pdf/renderer';

const Listado = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchCarnetData();
  }, []);

  const fetchCarnetData = async () => {
    try {
      const response = await fetch('https://carnettapi-production-05da.up.railway.app/carnet');
      const data = await response.json();
      setMovies(data.arrayCarnet);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(date) {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = formattedDate.getFullYear().toString().substr(-2);
    return `${day}/${month}/${year}`;
  }

  const styles = StyleSheet.create({
    lista: {
      width: '100%',
      height: '100%',
      paddingTop: 10,
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
    },
    tableHeader: {
      backgroundColor: '#823bc4',
      color: 'white',
      paddingLeft:5,
      paddingRight:5,
    },
    tableCell: {
      border: '1px solid #949191',
      padding: 8,
    },
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
    },
    content: {
      flexGrow: 1,
      padding: 10,
    },
    smallText: {
      fontSize: 12, // Ajusta el tamaño de fuente según tus necesidades
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.content}>
          <Text style={[styles.tableHeader, styles.smallText]}>
            Nombre y apellidos | No. Carnet | Poesia | Edad | Direccion | Telefono | F. inscripcion | F. concurso
          </Text>
          {movies.map((movie) => (
            <Text key={movie._id} style={[styles.tableCell, styles.smallText]}>
              {movie.nombre} | {movie.numcarnet} | {movie.poesia} | {movie.edad} | {movie.direccion} | {movie.telefono} |{' '}
              {formatDate(movie.fecha)} | {formatDate(movie.fechaconcurso)}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  const handleDelete = async (carnetId) => {
    try {
      const response = await fetch(`https://carnettapi-production-05da.up.railway.app/carnet/${carnetId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Éxito: el carnet se eliminó correctamente
        // Realiza alguna acción, como mostrar un mensaje de éxito
        console.log('Carnet eliminado correctamente');
        fetchCarnetData(); // Actualiza los datos de los carnets
      } else if (response.status === 404) {
        // Error: el servidor devuelve un error 

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
      <div className='listas'>
        <div className='lista'>
          <table>
            <thead>
              <tr className='encabezado'>
                <th>Nombre y apellidos</th>
                <th>No. Carnet</th>
                <th>Poesia</th>
                <th>Edad</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>F. inscripcion</th>
                <th>F. concurso</th>
                <th>Aprobado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.nombre}</td>
                  <td>{movie.numcarnet}</td>
                  <td>{movie.poesia}</td>
                  <td>{movie.edad}</td>
                  <td>{movie.direccion}</td>
                  <td>{movie.telefono}</td>
                  <td>{formatDate(movie.fecha)}</td>
                  <td>{formatDate(movie.fechaconcurso)}</td>
                  <td>{movie.aprobado}</td>
                  <td> 
                  <button className='eliminar' onClick={() => handleDelete(movie._id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='pdf'>
          <PDFDownloadLink document={<MyDocument />} fileName='listado.pdf'>
            {({ loading }) =>
              loading ? 'Generando PDF...' : 'Descargar PDF'
            }
          </PDFDownloadLink>
      </div>
        </div>
      </div>

      <div>
        <Piepagina />
      </div>
    </div>
  );
};


export default Listado