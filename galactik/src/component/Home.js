import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);
    var home = []

    useEffect(() => {
        axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/posts?acf_format=standard')
          .then(response => {
            setPosts(response.data.reverse());
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      posts.map(post => {
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
                    {

                        home.map(value => (
                            <div>
                            <h1>{value.titre}</h1>
                            <h3 dangerouslySetInnerHTML={{ __html: value.contenu}}></h3>
                            {/*<img src = 'https:\/\/g3.esiee-it.o3creative.fr\/wp-content\/uploads\/2023\/03\/home.jpg'>{value.image}</img>*/}
                            </div>

                        ))
                        
                        
                    }
                    <div>
                        <img src = 'https:\/\/g3.esiee-it.o3creative.fr\/wp-content\/uploads\/2023\/03\/home.jpg'>{home.image}</img>
                    </div>
                    <div>
                        <button link = ''>Participer au Quiz</button>
                    </div>


    
            </div>
        );
    }

};

export default Home;