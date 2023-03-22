import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Wordpress.css'

function WordPress({}) {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0)
  var questionnaire = []
  const handleClick = () =>{

    setIndex(index + 1) 
    if(index >= (questionnaire.length -1)){
      setIndex(0) 
    }
}

  useEffect(() => {
    axios.get('https://g3.esiee-it.o3creative.fr/wp-json/wp/v2/quiz')
      .then(response => {
        setPosts(response.data.reverse());
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  posts.map(post => {
    questionnaire.push({
      titre : post.title.rendered,
      content : post.acf.question
    })
  })
  if(questionnaire.length > 0){
    console.log(questionnaire)
    return (
    <div className="quiz-box">
      <h2 className="quiz-title">Notre questionnaire :</h2>
      <div className="quiz-content">
        <h3>{questionnaire[index].titre}</h3>
        <p dangerouslySetInnerHTML={{ __html: questionnaire[index].content}}></p>
        <br></br><br></br>
        <button className="quiz-button" onClick={handleClick}>Suivant</button>
      </div>
    </div>

    );
  }
}

export default WordPress;
