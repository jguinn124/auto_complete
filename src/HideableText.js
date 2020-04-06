import React from 'react';

export default class HideableText extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isHidden: false,

		}
	}

	render () {
		return (
			<div>
				<button>Toggle</button>
				{!this.state.isHidden && this.props.text}
			</div>
		)
	}

	
}

