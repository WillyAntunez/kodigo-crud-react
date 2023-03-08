import React, { useEffect, useState } from 'react'

import { getCellphones } from '../api'
import { Tabla } from '../components'

export const Cellphones = () => {

  const [videojuegos, setVideojuegos] = useState([]);

  const campos = [
    'Id',
    'Marca',
    'Modelo',
    'Color',
    'precio',
    'Descripcion',
    'Operadora',
  ]

  useEffect(() => {
    getCellphones()
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
