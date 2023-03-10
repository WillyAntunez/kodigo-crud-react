import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { deleteVideoGame, getVideogames } from '../../api'
import { Tabla } from '../../components'

export const Videogames = () => {

  const [videojuegos, setVideojuegos] = useState([]);
  const navigate = useNavigate();

  const campos = [
    'Id',
    'Titulo',
    'Descripcion',
    'plataforma',
    'precio',
    'categoria',
  ]

  useEffect(() => {
    getVideogames()
      .then((res = []) => {
        setVideojuegos(res);
      }).catch(err => {
        console.log(err);
        alert('Error cargando videojuegos')
      })
  }, [])

  const onDeleteVideogame = async ( game ) => {
    const { titulo, juegoId  } = game;

    const confirm = await window.confirm( `¿Seguro que deseas borrar el juego "${titulo}"?` )

    if(confirm){
      try {
        await deleteVideoGame(juegoId);

        const nuevosVideojuegos = videojuegos.filter( videojuego => videojuego.juegoId !== juegoId );
        setVideojuegos(nuevosVideojuegos);

        alert(`El juego ${ titulo } fue eliminado con exito`);
      } catch (error) {
        console.log(error);
        alert('Ocurrio un error al borrar el videojuego.');
      }
    }
  }

  const onEditVideoGame = (videogame) => {
    const {juegoId} = videogame;
    navigate(`/videogames/edit/${ juegoId }`);
  }

  return (
    <div className='container'>
      <h1>Registro de videojuegos:</h1>
      <hr />
      <h5 className='fz-2' >Total de videojuegos: {videojuegos.length}</h5>
      <Tabla 
        campos={campos} 
        data={videojuegos} 
        newUrl="/videogames/new" 
        onDeleteItem={ onDeleteVideogame } 
        onEditItem={ onEditVideoGame }
        />

    </div>
  )
}
