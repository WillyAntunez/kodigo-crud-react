import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getCellphoneById, updateCellphone } from '../../api';
// import { getVideoGameById, updateVideoGame } from '../api';

import {  CellphoneForm } from '../../components'


export const EditCellphone = () => {

  const [initialState, setInitialState] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const onSubmitForm = async ( formState ) => {
    try {
      await updateCellphone( { celularId: params.id, ...formState } );
      alert('Celular actualizado con exito.')
      navigate('/cellphones');
    } catch (error) {
      console.log('Error al actualizar el celular');
      navigate('/cellphones')
    }
  }
  
  const onCancel = async () => {
    const confirmation = window.confirm('¿Seguro que quieres cancelar la edicion del videojuego?');

    if( confirmation ) {
      navigate('/Cellphones')
    }
  }

  useEffect(() => {
    const  getCellphone = async () => {
      const id = params.id;
      try {
        const res = await getCellphoneById(id)
        
        if(res.status === 404) throw new Error(`El celular con el id ${ id } no existe`);
  
        setInitialState( () => res );
  
      } catch (error) {
        alert(error);
        navigate('/cellphones')
      }
    }

    getCellphone();
  }, [ navigate, params ])
  

  return(
      <div className='container mt-4'>
        <CellphoneForm onSubmitFn={ onSubmitForm } onCancelFn={ onCancel } title="Editar celular" initialState={ initialState }  />
      </div>
  )

}
