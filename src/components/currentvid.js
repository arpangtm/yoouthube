import React, { Component } from 'react';

export default class Currentvid extends Component{
    render(){
        if (!this.props.video){
        return(
            <div>
                Click ON Any one
            </div>
        )
        }
        return(
            
            <div className="ui segment">
                <div className="ui embed">
                <iframe title="video player"
                src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}></iframe>
            </div>
                <h2>{this.props.video.snippet.title}</h2>
                <h4>{this.props.video.snippet.description}</h4>
            </div>
        )
    }
} 