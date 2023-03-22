import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Wordpress.css'
import Home from './Home';
import { NavLink } from 'react-router-dom';

function WordPress({}) {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0)
  const [numBonneReponse, setCompteBonneReponse] = useState(0)
  var questionnaire = []
  var quizEnd = false



  const handleClick = () =>{
    {questionnaire[index].reponses.map((value) => 
      {
        if(document.getElementById(value.question).checked === true){
          value.bonne_reponse === true && setCompteBonneReponse(numBonneReponse + 1)
          document.getElementById(value.question).checked = false
        }
      }) 
    }
    setIndex(index + 1) 
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
      content : post.acf.question,
      reponses: post.acf.reponses
    })
  })
  if(questionnaire.length > 0 && index < questionnaire.length){
    return (
    <div className="quiz-box">
      <h2 className="quiz-title">Notre questionnaire :</h2>
      <div className="quiz-content">
        <h3>{questionnaire[index].titre}</h3>
        <p dangerouslySetInnerHTML={{ __html: questionnaire[index].content}}></p>
        {questionnaire[index].reponses.map((value) => (
                <div>
                  <input type="checkbox" id={value.question} value='false' />
                  <label >{value.question}</label>
                </div>
              )) } 
        <br></br><br></br>      
        <button className="quiz-button" onClick={ handleClick }>Suivant</button>
        <nav id="sidebar">
        <NavLink to="/Home">Home</NavLink>
        </nav>
      </div>
    </div>

    );
  }
  else if(index >= (questionnaire.length - 1)){
    return (
    <div className="quiz-box">
      <h2 className="quiz-title">Notre questionnaire :</h2>
      <div className="quiz-content">
        <h3>Notre Petit Quiz est fini Voici votre score</h3>
        <h2>{ numBonneReponse }/{ questionnaire.length }</h2>

      </div>
    </div>

    );
  }
}

export default WordPress;
