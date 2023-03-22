import React from 'react';
import '../styles/header.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/"><img src="https://g3.esiee-it.o3creative.fr/wp-content/uploads/2023/03/logoGalactique-removebg-preview-e1679491818408.png"></img></NavLink>
            <ul>                           
                <li><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to="/Quiz">Quiz</NavLink></li>
            </ul>                            
        </div>
    );
};

export default Header;