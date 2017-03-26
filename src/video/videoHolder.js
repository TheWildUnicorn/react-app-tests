import React, { Component } from 'react';
import Video from './Video';
import handshake from './handshake.mp4';
import lady from './lady.mp4';

class VideoHolder extends Component {
	constructor(){
		super();
		this.state = {
			file: handshake,
		};
	}
	render(){
		return (
		<div>
			< Video file={this.state.file} />
			<button type="button" onClick={() => this.changeFile()}>Junk</button>
		</div>
		);
	}
	changeFile(){
		if(this.state.file === handshake){
			this.setState({file: lady});
		}
		else{
			this.setState({file: handshake});
		}
	}
}
export default VideoHolder;
