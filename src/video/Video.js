import React, { Component } from 'react';

class Video extends Component {
	constructor(){
		super();
		this.state = {time: 0};
	}
	render() {
		return (
		<video src={this.props.file} ref="playerRef" onTimeUpdate={this.onTimeUpdate.bind(this)}controls>
		Not Available. :(
		</video>	
		);
	}
	onTimeUpdate(){
		this.setState({time: this.refs.playerRef.currentTime});
		this.props.timeUpdate();
	}
} 

export default Video;
