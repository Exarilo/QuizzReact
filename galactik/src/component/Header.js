import React from 'react';
import '../styles/header.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/"><img src="https://g3.esiee-it.o3creative.fr/wp-content/uploads/2023/03/logoGalactique-removebg-preview-e1679491818408.png"></img></NavLink>
            <ul>                           
                <li><NavLink className="custom-link"  to="/">Acceuil</NavLink></li>
                <li><NavLink className="custom-link" to="/Quiz">Quiz</NavLink></li>
                <li><NavLink className="custom-link" to="/ListeArticle">Liste des Articles</NavLink></li>
            </ul>                            
        </div>
    );
};

export default Header;