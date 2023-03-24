import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import '../styles/ListeArticle.css'


const ListeArticle = () => {
  const [posts, setPosts] = useState([]);
  var ListeArticle = []
  useEffect(() => {
    axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/posts?tags=3&acf_format=standard')
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
      slug: "/Article/" + post.slug,
      img : post.acf.image[0] 
    })
  })
  

  const [pageActuelle, setPageActuelle] = useState(0);
  const élémentsParPage = 3;
  const nbPages = Math.ceil(ListeArticle.length / élémentsParPage);
  const indexDeDébut = pageActuelle * élémentsParPage;
  const indexDeFin = indexDeDébut + élémentsParPage;
  const élémentsAAfficher = ListeArticle.slice(indexDeDébut, indexDeFin);

  function setPage(page) {
    setPageActuelle(Math.max(0, Math.min(page, nbPages - 1)));
  }
  return (
    <div>
      <Header />
      <div className="main">
        <br></br>
        <br></br>
        <div className="article-box">
          <div>
          {
            élémentsAAfficher.map(value => (
              <div className="card">
                <NavLink className = "titreArticle" to={value.slug} >{
                  <div>
                  <img src={value.img}></img>
                  <p dangerouslySetInnerHTML={{ __html: value.titre }}></p>
                </div>
                }
                </NavLink>

              </div>

            ))
          }
          </div>
          <div>
            <button className='button' onClick={() => setPage(pageActuelle - 1)}>Précédent</button>
            <button className='button' onClick={() => setPage(pageActuelle + 1)}>Suivant</button>
          </div>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default ListeArticle;