import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WordPress({}) {
  const [posts, setPosts] = useState([]);
  var questionnaire = []

  useEffect(() => {
    axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/quiz')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(posts)
  posts.map(post => {
    questionnaire.push({
      titre : post.title.rendered,
      content : post.acf.question
    })
  })
  if(questionnaire.length > 0){
    return (
      <div>
        <h2>Notre questionnaire : </h2>
            <div>
              <h3>{questionnaire[0].titre}</h3>
              <p dangerouslySetInnerHTML={{ __html: questionnaire[0].content}}></p>
            </div>
      </div>
    );
  }

}

export default WordPress;
