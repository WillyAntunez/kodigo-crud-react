import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Cellphones, Home, Videogames } from '../pages'

export const CrudRouter = () => {
  return (
    <main className='container-fluid' >
          <Navbar />
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/videogames' element={ <Videogames /> } />
              <Route path='/cellphones' element={ <Cellphones /> }  />
          </Routes>
    </main>
  )
}
