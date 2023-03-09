import React, { useMemo } from 'react'
import { useForm } from '../hooks/useForm'

export const CellphoneForm = ( { onSubmitFn = () => {}, onCancelFn = () => {}, initialState, title = '' } ) => {

  const initialForm = useMemo( () =>  ({
    marca: '',
    color: '',
    descripcion: '',
    modelo: '',
    precio: '',
    operadora: '',
    ...initialState,
  }), [ initialState ] );

  const { marca, descripcion, color, modelo, precio, operadora, onInputChange, formState } = useForm( initialForm )

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
                    <label className="form-label" htmlFor="modelo">Modelo</label>
                    <input 
                      required
                      className="form-control" 
                      id="modelo" 
                      placeholder='modelo del videojuego' 
                      value={ modelo }
                      name= 'modelo'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="nombre">Marca</label>
                    <input 
                      required
                      className="form-control" 
                      id="nombre" 
                      placeholder='Nombre del videojuego' 
                      value={ marca }
                      name= 'marca'
                      onChange={ onInputChange }
                      />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="nombre">Color</label>
                    <input 
                      required
                      className="form-control" 
                      id="nombre" 
                      placeholder='Nombre del videojuego' 
                      value={ color }
                      name= 'color'
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
                    <label className="form-label" htmlFor="operadora">Operadora</label>
                    <input 
                      required
                      className="form-control" 
                      id="operadora" 
                      placeholder='operadora del videojuego' 
                      value={ operadora }
                      name= 'operadora'
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
