import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissors.png'
import lizard from './images/lizard.png'
import spock from './images/spock.png'
import bazinga from './images/bazinga.png'
import black from './images/black.jpg'
import ScoreSection from './scoreSection';

class GameSection extends Component{
  constructor(){
    super();
    this.state={
      player: null,
      computer:null,
      playerWin:0,
      computerWin:0,
      tie:0
    }

    this.checkRule = this.checkRule.bind(this);
  }

  async checkRule(){
    console.log("Player Weapon:"+this.props.weaponName);
    console.log("Computer Weapon:"+this.state.computer);
    const rulesForGame = {
      rock : ["lizard","scissors"],
      scissors : ["paper","lizard"],
      paper :["rock","spock"],
      lizard:["spock"],
      spock:["scissors","rock"]
    }
    console.log(rulesForGame[this.props.weaponName]);
    
    //Player Wins
    rulesForGame[this.props.weaponName].map(async weapon => {
      if(this.state.computer == weapon)
        await this.setState({playerWin : 1});
    });

    //Computer Wins
    rulesForGame[this.state.computer].map(async weapon => {
      if(this.props.weaponName == weapon)
        await this.setState({computerWin : 1});
    });

    //Tie - try again
    if(this.props.weaponName == this.state.computer ||
      (this.state.tie==0 && this.state.playerWin==0 && this.state.computerWin==0))
    {
      await this.setState({tie : 1});
    }
    console.log(this.state);
  }

  async computerComponent(){
    var images=['rock','paper','scissors','lizard','spock'];
    var randomNumber = Math.floor((Math.random() * 5));
    console.log(images[randomNumber]);
    await this.setState({
      computer : images[randomNumber]
    })
    console.log(this.state);
    this.checkRule();
  }

  componentDidMount(){
    console.log("In here");

    this.setState({
      player : this.props.playerWeapon
    });
    this.computerComponent();
    console.log(this.props.playerWeapon);
  }

  bazinga() {
    var baz = document.querySelector(".bazinga");
    baz.classList.add('displayIt');
  }

	render() {
		return (
		  <div className="gameSection">
            {this.state && this.state.player &&
              <div>
                <img src={bazinga} className="bazinga" />
                <div className="game computer">
                   <img src={process.env.PUBLIC_URL + '/'+this.state.computer+'.png'} alt="logo" className="imageSizeDiv1"/>
                </div>
                <p> Vs </p>
                <div className="game player">
                  <img src={this.state.player} className="imageSizeDiv2"/>
                </div>
              </div>
            }
            {this.state && (this.state.playerWin || 
                            this.state.computerWin ||
                            this.state.tie) &&
              <ScoreSection playerWin = {this.state.playerWin}
                            computerWin = {this.state.computerWin}
                            tie = {this.state.tie}
                            clearWeapon={this.props.clearWeapon}
                            bazinga={this.bazinga}/>
            }
      </div>
		);
	}
}

export default GameSection;