import React, { useMemo } from 'react'
import { useForm } from '../hooks/useForm'

export const VideogameForm = ( { onSubmitFn = () => {}, onCancelFn = () => {}, initialState, title = '' } ) => {

  const initialForm = useMemo( () =>  ({
    titulo: '',
    descripcion: '',
    plataforma: '',
    precio: '',
    categoria: '',
    ...initialState,
  }), [ initialState ] );

  const { titulo, descripcion, plataforma, precio, categoria, onInputChange, formState } = useForm( initialForm )

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    onSubmitFn( formState );
  }

  return(
    <>
      <div className='container mt-4'>
        <div className="row justify-content-center">
          <h2 className='text-center'>{ title }</h2>
          <div className="col-6">

            <form id="formulario" onSubmit={ onFormSubmit }>
                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input 
                      required
                      className="form-control" 
                      id="nombre" 
                      placeholder='Nombre del videojuego' 
                      value={ titulo }
                      name= 'titulo'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="descripcion">Descripción</label>
                    <textarea 
                      required
                      className="form-control" 
                      id="descripcion" 
                      placeholder='Descripcion breve del videojuego' 
                      value={ descripcion }
                      name= 'descripcion'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="plataforma">Plataforma</label>
                    <input 
                      required
                      className="form-control" 
                      id="plataforma" 
                      placeholder='Plataforma del videojuego' 
                      value={ plataforma }
                      name= 'plataforma'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="precio">Precio (USD)</label>
                    <input 
                      required
                      className="form-control" 
                      id="precio" 
                      type='number' 
                      placeholder='Precio del videojuego' 
                      value={ precio }
                      name= 'precio'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="categoria">Categoria</label>
                    <input 
                      required
                      className="form-control" 
                      id="categoria" 
                      placeholder='Categoria del videojuego' 
                      value={ categoria }
                      name= 'categoria'
                      onChange={ onInputChange }
                      />
                </div>

                <div className='mt-4 d-flex justify-content-center gap-2'>
                  <input type="submit" className="btn btn-success w-25 user-select-none" value='Enviar' />
                  <input 
                    type="button" 
                    className="btn btn-danger w-25 user-select-none" 
                    value='cancelar' 
                    onClick={ onCancelFn }
                    />
                </div>
            </form>

          </div>
        </div>
      </div>

    </>
      
  )

}
