import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component{
    render(){
        return(
            <div>
                <ul >
                    <li className='listStyle'>
                        <NavLink to={"/"} >Accueil</NavLink>
                    </li>
                    <li className='listStyle'>
                        <NavLink to={"/ecole"}>Ecole</NavLink>
                    </li>
                    <li className='listStyle'>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;