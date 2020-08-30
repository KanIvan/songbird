import React from 'react';
import './App.scss';
import Layout from './components/layout/Layout';
import birdsData from './data/DataBirds';
import { BirdContext } from './components/context/BirdContext';
import soundPlayer from './utils/soundPlayer';
import error from './sounds/error.mp3';
import success from './sounds/success.mp3';
import imageBird from './img/bird.png'


class App extends React.Component {

rnd = Math.floor( Math.random() * 6 );
  
constructor(props) {
  super(props);

  this.state = { 
    score: 0,
    maxScore: 5,
    maxLevel: 5,
    birdsList: birdsData[ 0 ],
    level: 0,
    question: birdsData[ 0 ][ this.rnd ],
    currentBird: '',
    answerId: null,
    correctId: this.rnd,
    сorrect: false,
    activeNextLevel: false,
    img: imageBird,
    finish: false
  };
};

getButtonValue = ( event ) => {

  if (this.state.activeNextLevel === true) {
    this.setState({currentBird: event})
    return
  }

  else {

  this.setState({currentBird: event})

  const targetId = event.id;

  if ( (targetId - 1) === this.state.correctId ) {
      this.setState( ( prevState ) => {
          return {
              score: prevState.score + this.state.maxScore,
              correct: true,
              activeNextLevel: true
              
          };
      } );

    const list = document.querySelectorAll('.bird')[event.id-1]
    list.classList.add('correct')
    document.querySelector('audio').pause();
    soundPlayer(success)
  }

  else {
    const list = document.querySelectorAll('.bird')[event.id-1]
    list.classList.add('incorrect')

    soundPlayer(error)
  }
  this.setState( ( prevState ) => {
      if(prevState.maxScore === 0) {
          return {
              answerId: targetId,
          }
      }
      return {
          answerId: targetId,
          maxScore: prevState.maxScore - 1
      };
  } );
}
};

nextLevel = () => {

  if (this.state.level < 5) {

    this.setState( ( prevState ) => {
      
      const rnd = Math.floor( Math.random() * 6 );

          return {
              level: prevState.level + 1,
              birdsList: birdsData[ this.state.level + 1 ],
              question: birdsData[ this.state.level + 1 ][ rnd ],
              correctId: rnd,
              correct: null,
              activeNextLevel: false,
              img: imageBird,
              answerId: '',
              color: null,
              maxScore: 5,
          };
    });
  }

    else {

      this.setState( () => {
        return {
          finish: true
        };
      });
    }
};

render(){

  return (
    <BirdContext.Provider 
    value = {{state: this.state,
              getButtonValue: this.getButtonValue,
              nextLevel: this.nextLevel}}>

      <Layout />

    </BirdContext.Provider>   
  )
  }
}

export default App;
