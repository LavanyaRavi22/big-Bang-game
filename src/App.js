import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageSection from './imageSection';
import rock from './images/rock.png';
import bazinga from './images/bazinga.png'
import ScoreSection from './scoreSection';
import GameSection from './gameSection';

class App extends Component {
  render() {
    return (
      <div>
          <h2 className="gameTitle"> The Big <span className="bang">Bang</span> Game</h2>
          <p className="rpsls">(Rock-Paper-Scissors-Lizard-Spock)</p>
          <p className="chooseWeapon"> Choose your weapon </p>
          <ImageSection />
          
      </div>
    );
  }
}

export default App;
