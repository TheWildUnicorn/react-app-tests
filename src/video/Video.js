import React, { Component } from 'react';

class Video extends Component {
	render() {
		return (
		<video src={this.props.file} controls>
		Not Available. :(
		</video>	
		);
	}
} 
export default Video;
