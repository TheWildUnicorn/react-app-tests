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
	updateState(key, value) {
		this.setState({[key]: value});
	}
	
	onTimeUpdate(){
		let time = this.refs.playerRef.currentTime;
		this.setState({time: time}, () => this.props.timeUpdate(time));
	}
} 

export default Video;
