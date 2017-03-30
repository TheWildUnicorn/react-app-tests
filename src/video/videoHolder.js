import React, { Component } from 'react';
import Video from './Video';
import handshake from './handshake.mp4';
import lady from './lady.mp4';
import Button from './Button.js';

class VideoHolder extends Component {
	constructor(){
		super();
		this.state = {
			file: handshake,
			buttonDisabled: true
		};
	}
	render(){
		return (
		<div>
			<Video ref='vidRef' file={this.state.file} timeUpdate={(time) => this.timeUpdate(time)} />
			<div id='controls'>
				<Button disabled={this.state.buttonDisabled} action={() => this.changeFile()}/>
			</div>
		</div>
		);
	}
	changeFile(){
		let changes = {
			buttonDisabled: true
		};
		if(this.state.file === handshake){
			changes.file = lady;
		}
		else{
			changes.file = handshake;
		}
		this.setState(changes);
	}
	timeUpdate(player){
		var totalPlayedTime = 0;
		for(var i = 0; i < player.played.length; ++i){
			totalPlayedTime += (player.played.end(i) - player.played.start(i));
		}
		if(totalPlayedTime + 2 >= player.duration){
			this.setState({buttonDisabled: false});
		}
	}
}
export default VideoHolder;
