import React, { Component } from 'react';

class Video extends Component {
	constructor(){
		super();
		this.state = {player: null};
	}
	render() {
		return (
		<video id="player" src={this.props.file} ref="playerRef" onTimeUpdate={this.onTimeUpdate.bind(this)}controls>
		Not Available. :(
		</video>	
		);
	}
	updateState(key, value) {
		this.setState({[key]: value});
	}
	
	onTimeUpdate(){
		let player = this.refs.playerRef;
		this.setState({player: player}, () => this.props.timeUpdate(player));
	}
} 

export default Video;
