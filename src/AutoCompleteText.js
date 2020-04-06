import React from 'react';

export default class AutoCompleteText extends React.Component {
	constructor(props){
		super(props);
		this.items = [
			'St. Louis',
			'Columbia',
			'Kansas City'
		];
		}


		render () {
			return (
			<div>
				<input type="text" />
				<ul>
					{this.items.map((item) => <li>{item} </li> )}
				</ul>
			</div>
			)
		}
	}


