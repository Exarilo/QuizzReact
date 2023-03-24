import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
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
      titre: post.title.rendered,
      slug: "/Article/" + post.slug
    })
  })
  return (
    <div>
      <Header />
      <div className="main">
        <br></br>
        <br></br>
        <div className="article-box">
          <div>
          {
            ListeArticle.map(value => (
              <div className="DivListeArticle">
                <h2 style={{ margin: "0px" }}><NavLink className = "titreArticle" to={value.slug} dangerouslySetInnerHTML={{ __html: value.titre }}></NavLink></h2>
              </div>

            ))
          }
          </div>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ListeArticle;