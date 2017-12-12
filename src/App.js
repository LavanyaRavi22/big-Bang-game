import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissors.png'
import lizard from './images/lizard.png'
import spock from './images/spock.png'
import bazinga from './images/bazinga.png'

class App extends Component {
  render() {
    return (
      <div>
          <h2 className="gameTitle"> The Big <span className="bang">Bang</span> Game</h2>
          <p className="rpsls">(Rock-Paper-Scissors-Lizard-Spock)</p>
          <p className="chooseWeapon"> Choose your weapon </p>
          <div className = "imageSection">
            <img src={rock} alt="Rock" className="imageSize" name="rock"/>
            <img src={paper} alt="Rock" className="imageSize" name="paper"/>
            <img src={scissor} alt="Rock" className="imageSize" name="scissor"/>
            <img src={lizard} alt="Rock" className="imageSize" name="lizard"/>
            <img src={spock} alt="Rock" className="imageSize" name="spock"/>
          </div>
          <div className="gameSection">
            <img src={bazinga} className="bazinga" />
            <div className="game computer">
              <img src={rock} className="imageSizeDiv1"/>
            </div>
            <p> Vs </p>
            <div className="game player">
              <img src={rock} className="imageSizeDiv2"/>
            </div>
          </div>
          <div className="scoreSection">
            <p><span>Who&nbsp;</span>won!!!</p>
          </div>
          
      </div>
    );
  }
}

export default App;
