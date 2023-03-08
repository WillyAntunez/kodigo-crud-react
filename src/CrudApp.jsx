import { BrowserRouter } from "react-router-dom";
import { CrudRouter } from "./router";
import { Navbar } from './components'

import './CrudApp.css'

export const CrudApp = () => {
  return (
    <BrowserRouter>
      <main className='container-fluid' >
            <Navbar />
            <CrudRouter />
      </main>
    </BrowserRouter>
  );
}
