import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cellphones, Home, Videogames, CreateVideogame, EditVideoGame, CreateCellphone, EditCellphone } from '../pages';

export const CrudRouter = () => {
  return (
    
      <Routes>
          <Route path='/' element={ <Home /> } />
          
          <Route path='/cellphones' element={ <Cellphones /> }  />
          <Route path='/cellphones/new' element={ <CreateCellphone /> }  />
          <Route path='/cellphones/edit/:id' element={ <EditCellphone /> }  />

          <Route path='/videogames' element={ <Videogames /> } />
          <Route path='/videogames/new' element={ <CreateVideogame /> } />
          <Route path='/videogames/edit/:id' element={ <EditVideoGame /> } />
      </Routes>
      
  )
}
