import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Article.css'
import Header from './Header';

const Article = () => {
  let { slug } = useParams()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(`https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/posts?acf_format=standard&slug=${slug}'`)
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    if(posts.length > 0){
      console.log(posts[0])
        return (
          <div>
            <Header />
            <div className='divArticle'>
                <h1>{posts[0].title.rendered}</h1>
                <h3 dangerouslySetInnerHTML={{ __html: posts[0].content.rendered}}></h3>                  
                  <img src={posts[0].acf.image[0]}></img>                     
            </div>
          </div> 
      );
    }

};

export default Article;