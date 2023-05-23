import React from 'react'
import { NavLink } from "react-router-dom"

export const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/porfolio" className={({ isActive }) => isActive ? "active" : ""}>Porfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skill</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({ isActive }) => isActive ? "active" : ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
              
            </ul>


        </nav>
    )
}
