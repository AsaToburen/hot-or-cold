import React from 'react';

import './game.css';

import GameForm from './game-form';
import GameScore from './game-score';

export default class Game extends React.Component {
	constructor() {
		super();

		this.state = {
			hint: '',
			guesses: [],
			target: Math.floor(Math.random() * 101),
			winner: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	evalGuess(guess) {
		let diff = this.getDifference(guess);
		if (diff === 0) {
			this.setState({ winner: true });
			this.resetGame();
		} else if (diff <= 20) {
			this.setState({ hint: 'hot' });
		} else {
			this.setState({ hint: 'cold' });
		}
		console.log('test', this.state.target);
	}

	getDifference(guess) {
		return Math.abs(this.state.target - guess);
	}

	handleSubmit(value) {
		let isNewGuess = this.state.guesses.indexOf(value) === -1;

		if (!isNewGuess) {
			alert('Submit a new guess');
		} else {
			let guesses = [...this.state.guesses, value];
			this.setState({ guesses });
			this.evalGuess(value);
		}
	}

	resetGame() {
		alert("Congratulations! You've won!");
		this.setState({
			hint: '',
			guesses: [],
			target: Math.floor(Math.random() * 101),
			winner: false
		});
	}

	render() {
		return (
			<main role="main">
				<header role="banner">
					<h1>HOT or COLD</h1>
				</header>
				<GameScore {...this.state}>
					<GameForm count={this.state.guesses.length} submitGuess={this.handleSubmit} />
				</GameScore>
			</main>
		);
	}
}
