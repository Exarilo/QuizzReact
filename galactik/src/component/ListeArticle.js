import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ListeArticle.css'

const ListeArticle = () => {
    const [posts, setPosts] = useState([]);
    var ListeArticle = []

    useEffect(() => {
        axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/posts?tags=3')
          .then(response => {
            setPosts(response.data.reverse());
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      posts.map(post => {
        console.log(post.tags[0])
          ListeArticle.push({
            titre : post.title.rendered,
          })
      })
    return (
        <div>
             

             <Header />
                    
                    {

                        ListeArticle.map(value => (
                            <div className = "DivListeArticle">
                            <h2><NavLink to="/Article">{value.titre}</NavLink></h2>
                            </div>

                        ))
                        
                        
                    }
                    



        </div>
    );
};

export default ListeArticle;