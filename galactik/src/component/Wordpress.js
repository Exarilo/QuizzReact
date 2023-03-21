import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WordPress({}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/postes')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Notre questionnaire : </h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WordPress;
