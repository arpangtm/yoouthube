import React from 'react'
import Viditem from './videoitem'

export default class Videolist extends React.Component{ 
    
   
    

    render(){
        const vidlist=this.props.list.map((vid)=>{
            return  <Viditem key={vid.id.videoId} vid={vid} onvidclick={this.props.onvidclick}/>
        })
        console.log(vidlist)
        
        return(
            <div>
                {vidlist}
            </div>
            
        )
    }
}