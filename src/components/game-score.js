import React from 'react';

import './game-score.css';

export default function GameScore(props) {
	return (
		<div className="game-score">
			<div className="hint">
				<h2>{props.hint.toUpperCase() || 'Make your Guess!'}</h2>
			</div>
			{props.children}
			<div className="guesses">
				<ul>{props.guesses.map((guess, idx) => <li key={idx}>{guess}</li>)}</ul>
			</div>
		</div>
	);
}
