import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ScoreSection extends Component{
	componentDidMount() {
		setTimeout(this.props.bazinga,1000);
	}

	render() {
		return (
		  <div className="scoreSection">
		  	{(this.props.playerWin==1) &&
            	<p className="winningStatement"><span>Player </span> won!!!</p>
            }
            {(this.props.computerWin==1) &&
            	<p className="winningStatement"><span>Computer </span> won!!!</p>
            }
            {(this.props.tie==1) &&
            	<p className="winningStatement"><span>It's a tie! </span></p>
            }
            <div className="resetDiv">
            <button onClick={this.props.clearWeapon}
            		className="resetIt">Reset</button>
            </div>
          </div>
		);
	}
}

export default ScoreSection;