import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Header from './Header';
import '../styles/Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    var home = []

    useEffect(() => {
        axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/posts?tags=4')
          .then(response => {
            setPosts(response.data.reverse());
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      posts.map(post => {
        console.log(post.tags[0])
          home.push({
            titre : post.title.rendered,
            contenu : post.content.rendered,
            image : post.acf.image.rendered,
          })
      })
      //console.log(home)
    if(home){
        return (
            <div>            
                    <Header />
                    <br></br>
                    <br></br>
                    <div className = "quiz-box">
                        <div className='divHome'>
                        {

                            home.map(value => (
                                <div className = "TitrePres">
                                <h1 className = "titre">{value.titre}</h1>
                                <h3 dangerouslySetInnerHTML={{ __html: value.contenu}}></h3>
                                {/*<img src = 'https:\/\/g3.esiee-it.o3creative.fr\/wp-content\/uploads\/2023\/03\/home.jpg'>{value.image}</img>*/}
                                </div>

                            ))
                            
                            
                        }

                        <br></br>
                        <br></br>
                        <div>
                            <button className = "quiz-button" ><NavLink to="/Quiz">Participer au Quiz</NavLink></button>
                        </div>


                        </div>
                  </div>
                        <br></br>
                        <div className = "imageFoot">
                            <img src = 'https:\/\/g3.esiee-it.o3creative.fr\/wp-content\/uploads\/2023\/03\/home.jpg'>{home.image}</img>
                        </div>
            </div>
        );
    }

};

export default Home;