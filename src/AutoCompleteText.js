import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props){
		super(props);
		this.items = [
			'St. Louis',
			'Columbia',
			'Kansas City'
		];
		this.state = {
			suggestions: [],
			text: '',
		};
	}

	onTextChange = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0){
			const regex = new RegExp(`^${value}`, `i`);
			suggestions = this.items.sort().filter(v => regex.test(v));
		}
		this.setState(() => ({ suggestions, text: value }));
	}
	suggestionSelected () {
		
	}

	renderSuggestions () {
		const { suggestions } = this.state;
		if (suggestions.length === 0){
			return null;
		}
		return(
			<ul>
				{suggestions.map((item) => <li> {item} </li>)}
			</ul>
		)

	}

		render () {
			const { text } = this.state
			return (
			<div>
				<input value={text} onChange={this.onTextChange} type="text" />
				<ul>
					{this.renderSuggestions()}
				</ul>
			</div>
			)
		}
	}


