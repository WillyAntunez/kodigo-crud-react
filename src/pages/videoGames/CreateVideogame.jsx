import { useNavigate } from 'react-router-dom';
import {  VideogameForm } from '../../components'
import { createVideogame } from '../../api';

export const CreateVideogame = () => {

  const navigate = useNavigate();

  const onSubmitForm = async ( formState ) => {
    try {
      await createVideogame( formState );
      alert('Videojuego creado con exito.');
      navigate('/videogames');
    } catch (error) {
      alert('Error creando el videojuego.')
      console.log(error);
      navigate('/videogames');
    }
  }
  
  const onCancel = async () => {
    const confirmation = window.confirm('¿Seguro que quieres cancelar la creacion del videojuego?');

    if( confirmation ) {
      navigate('/videogames')
    }
  }

  return(
      <div className='container mt-4'>
        <VideogameForm onSubmitFn={ onSubmitForm } onCancelFn={ onCancel } title='Agregar videojuego' />
      </div>
  )

}
