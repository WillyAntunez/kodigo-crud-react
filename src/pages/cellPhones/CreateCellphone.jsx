import { useNavigate } from 'react-router-dom';
import { createCellphone } from '../../api';
import {  CellphoneForm } from '../../components'

export const CreateCellphone = () => {
  const navigate = useNavigate();

  const onSubmitForm = async ( formState ) => {
    try {
      await createCellphone( formState );

      alert('Celular agregado con exito.');
      navigate('/cellphones');
    } catch (error) {
      alert('Error creando el videojuego.')
      console.log(error);
      navigate('/cellphones');
    }
  }
  
  const onCancel = async () => {
    const confirmation = window.confirm('¿Seguro que quieres cancelar la creacion del celular?');

    if( confirmation ) {
      navigate('/cellphones')
    }
  }

  return(
      <div className='container mt-4'>
        <CellphoneForm onSubmitFn={ onSubmitForm } onCancelFn={ onCancel } title='Agregar celular' />
      </div>
  )

}
