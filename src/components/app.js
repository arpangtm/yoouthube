import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import Vlist from './videolist'
import Currentvid from './currentvid'
export default class App extends React.Component{
    state={videos:[],selectedvideo:null}
    ontermsubmit= async(terms)=>{
        
        const response=await youtube.get('/search',{
            params:
            { 
                part:'snippet',
                maxResults:20,
                key:'AIzaSyDxBTY44zVYLuOrUAU3IGDJzzunp9jzmoQ',
                q:terms 
            }
            
        }
        
        )
        this.setState({videos:response.data.items})
        
        
        
    }

    onvidclick=(vid)=>{
        this.setState({selectedvideo:vid})
    }

    render(){
        console.log(this.state.videos)
        return(
            <div>
                <SearchBar onFormSubmit={this.ontermsubmit}/>
                <Currentvid video={this.state.selectedvideo}></Currentvid>
                <Vlist list={this.state.videos} onvidclick={this.onvidclick}/>
                I have {this.state.videos.length} videos
            </div>

        )
    }

} 