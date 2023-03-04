import React from 'react';

import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand navbar-light bg-light">
            <Link className="navbar-brand" to='/'>CrudApp</Link>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='videogames'>Videojuegos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='cellphones'>Celulares</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
