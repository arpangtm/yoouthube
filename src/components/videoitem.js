import React from 'react'
import './videolist.css'
export default class Viditem extends React.Component{
    
    render(){
        const videolist=this.props.vid
        return(
            <div className="single" onClick={()=>{this.props.onvidclick(videolist)}}>
                <div className="ui relaxed list">
                    <div className="item desc">
                        <img  key={videolist.id.videoId} alt={videolist.snippet.title} src={`${videolist.snippet.thumbnails.medium.url}`} style={{margin:'10px'}}></img>
                        <div className="content ">
                            <div className="header"><h2>{videolist.snippet.title}</h2></div>
                            <div className="description"><h4>{videolist.snippet.description}</h4></div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>

        )
    }
    
}