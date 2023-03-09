import React from 'react';

import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <NavLink className="navbar-brand" to='/'>KodiStore</NavLink>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to='videogames'>Videojuegos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='cellphones'>Celulares</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
