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
		};
	}

	onTextChange = (e) => {
		const value = e.target.value;
		let suggestions = [];
		if (value.length > 0){
			const regex = new RegExp(`^${value}`, `i`);
			suggestions = this.items.sort().filter(v => v.test(regex));
		}
		this.setState(() => ({ suggestions }));
	}

		render () {
			return (
			<div>
				<input onChange={this.onTextChange} type="text" />
				<ul>
					{this.items.map((item) => <li>{item} </li> )}
				</ul>
			</div>
			)
		}
	}


