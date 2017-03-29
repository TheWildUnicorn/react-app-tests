
import React, { Component } from 'react';

class Button extends Component {
	render() {
		return (
		<button type="button" disabled={this.props.disabled} onClick={this.props.action}>Next</button>
		);
	}
} 
export default Button;
