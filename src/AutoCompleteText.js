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
		if (this.value === 0){
			this.setState(( => ({
				
			})))
		}

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


