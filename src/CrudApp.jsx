import { BrowserRouter } from "react-router-dom";
import { CrudRouter } from "./router/CrudRouter";

import './CrudApp.css'

export const CrudApp = () => {
  return (
    <BrowserRouter>
      <CrudRouter />
    </BrowserRouter>
  );
}
