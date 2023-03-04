import React, { useEffect, useState } from 'react'
import { getVideogames } from '../api/api'
import { Tabla } from '../components/Table'

export const Videogames = () => {

  const [videojuegos, setVideojuegos] = useState([]);

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
      .then(res => {
        setVideojuegos(res);
      });
  }, [])

  return (
    <div className='container'>
      <Tabla campos={campos} data={videojuegos} />
    </div>
  )
}
