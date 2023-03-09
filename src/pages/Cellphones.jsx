import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { deleteCellphone, getCellphones } from '../api';

import { Tabla } from '../components';

export const Cellphones = () => {

  const [cellphones, setCellphones] = useState([]);
  const navigate = useNavigate();

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
        setCellphones(res);
      });
  }, [])

  const onDeleteCellphone = async ( cellphone ) => {
    const { modelo, celularId, marca  } = cellphone;

    const confirm = await window.confirm( `¿Seguro que deseas borrar el celular "${marca} - ${modelo}"?` )

    if(confirm){
      try {
        await deleteCellphone(celularId);

        const nuevosCelulares = cellphones.filter( celular => celular.celularId !== celularId );
        setCellphones(nuevosCelulares);

        alert(`El celular " ${ marca } - ${ modelo }" fue eliminado con exito`);
      } catch (error) {
        console.log(error);
        alert('Ocurrio un error al borrar el videojuego.');
      }
    }
  }

  const onEditCellphone = (cellphone) => {
    const {celularId} = cellphone;
    navigate(`/cellphones/edit/${ celularId }`);
  }

 return (
    <div className='container'>
      <Tabla 
        campos={campos} 
        data={cellphones} 
        newUrl="/cellphones/new" 
        onDeleteItem={ onDeleteCellphone } 
        onEditItem={ onEditCellphone }
        />

    </div>
  )
}
