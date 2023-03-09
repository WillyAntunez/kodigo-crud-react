import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getVideoGameById, updateVideoGame } from '../../api';
import {  VideogameForm } from '../../components'


export const EditVideoGame = () => {

  const [initialState, setInitialState] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const onSubmitForm = async ( formState ) => {
    try {
      await updateVideoGame( { juegoId: params.id, ...formState } );
      alert('Juego actualizado con exito.')
      navigate('/videogames');
    } catch (error) {
      console.log('Error al actualizar el juego');
      navigate('/videogames')
    }
  }
  
  const onCancel = async () => {
    const confirmation = window.confirm('¿Seguro que quieres cancelar la edicion del videojuego?');

    if( confirmation ) {
      navigate('/videogames')
    }
  }

  useEffect(() => {
    const  getVideoGame = async () => {
      const id = params.id;
      try {
        const res = await getVideoGameById(id)
        
        if(res.status === 404) throw new Error(`El videojuego con el id ${ id } no existe`);
  
        setInitialState( () => res );
  
      } catch (error) {
        alert(error);
        navigate('/videogames')
      }
    }

    getVideoGame();
  }, [ navigate, params ])
  

  return(
      <div className='container mt-4'>
        <VideogameForm onSubmitFn={ onSubmitForm } onCancelFn={ onCancel } title="Editar videojuego" initialState={ initialState }  />
      </div>
  )

}
