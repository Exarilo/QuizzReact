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
      titre: post.title.rendered,
      contenu: post.content.rendered,
      image: post.acf.image.rendered,
    })
  })
  //console.log(home)
  if (home) {
    return (
      <div>
        <Header />
        <div className="main">
          <br></br>
          <br></br>
          <div className="quiz-box">
            <div className='divHome'>
              {

                home.map(value => (
                  <div className="TitrePres">
                    <h1 className="titre">{value.titre}</h1>
                    <text dangerouslySetInnerHTML={{ __html: value.contenu }}></text>
                  </div>

                ))


              }

              <br></br>
              <br></br>
                <div>
                  <button  ><NavLink className="quiz-button" to="/Quiz">Participer au Quiz</NavLink></button>
                </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  }

};

export default Home;