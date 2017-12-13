import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissors.png'
import lizard from './images/lizard.png'
import spock from './images/spock.png'
import bazinga from './images/bazinga.png'
import GameSection from './gameSection';

class ImageSection extends Component{
    constructor(){
        super();
        this.state ={
            playerWeapon: null,
            playerWeaponName:null
        }
        this.chosenOne = this.chosenOne.bind(this);
        this.clearWeapon = this.clearWeapon.bind(this);
    }

    async chosenOne(e){
        e.preventDefault();
        console.log(e.target);
        await this.setState({
            playerWeapon : e.target.src,
            playerWeaponName: e.target.name
        });
        console.log(this.state);
    }

    async clearWeapon(){
        await this.setState({
            playerWeapon : null,
            playerWeaponName:null
        });
        console.log(this.state);
    }

	render() {
		return (
          <div>
    		  <div className = "imageSection">
                <img src={rock} 
                     alt="Rock" 
                     className="imageSize" 
                     name="rock"
                     onClick={this.chosenOne}/>
                <img src={paper} 
                     alt="Paper" 
                     className="imageSize" 
                     name="paper"
                     onClick={this.chosenOne}/>
                <img src={scissor} 
                     alt="Scissor" 
                     className="imageSize" 
                     name="scissors"
                     onClick={this.chosenOne}/>
                <img src={lizard} 
                     alt="Lizard" 
                     className="imageSize" 
                     name="lizard"
                     onClick={this.chosenOne}/>
                <img src={spock} 
                     alt="Spock" 
                     className="imageSize" 
                     name="spock"
                     onClick={this.chosenOne}/>
              </div>

              {this.state && this.state.playerWeapon && this.state.playerWeaponName &&
                <GameSection playerWeapon={this.state.playerWeapon}
                             clearWeapon={this.clearWeapon}
                             weaponName={this.state.playerWeaponName}/>
              }

            </div>
		);

	}

}

export default ImageSection;