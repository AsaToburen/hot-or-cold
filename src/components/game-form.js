import React from 'react';

import './game-form.css';

export default class GameForm extends React.Component {
	constructor() {
		super();

		this.state = {
			value: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	evalInput(val) {
		let notNumber = isNaN(this.state.value);
		let num = Number(this.state.value);

		if (notNumber) {
			alert('Please input a number!');
		} else if (num < 1 || num > 100) {
			alert('Please submit a number between 1 and 100');
		} else if (num >= 1 && num <= 100) {
			return true;
		} else {
			return false;
		}
	}
	handleSubmit(e) {
		e.preventDefault();

		if (this.evalInput(this.state.value)) {
			this.props.submitGuess(this.state.value);
		}
		this.setState({ value: '' });
	}
	onChange(e) {
		this.setState({ value: e.target.value });
	}
	render(props) {
		return (
			<div className="game-form">
				<form onSubmit={this.handleSubmit}>
					<fieldset>
						<input type="text" value={this.state.value} onChange={this.onChange} required />
						<button>Guess</button>
					</fieldset>
				</form>
				<div className="guess-count">
					<h2>Guess #{this.props.count}</h2>
				</div>
			</div>
		);
	}
}
