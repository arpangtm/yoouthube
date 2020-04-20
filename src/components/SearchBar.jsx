import React from 'react'

export default class SearchBar extends React.Component{
    constructor(){
        super()
        this.state={value:""}
    }
    
    changed=(ele)=>{
       this.setState({value:ele.target.value})
       
    }

    onsubmit=(event)=>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.value)

    }
    render(){
        
        return(
            <div className="ui container search ">
                <form onSubmit={this.onsubmit}>
                    <div className="ui container icon input">
                        <input 
                        
                        onChange={this.changed} 
                        autoComplete='off'
                        className="prompt" 
                        type="text"
                        id="input"
                        placeholder="Search countries..."/>
                        <i className="search icon"></i>
                    </div>   
                </form>  
            </div>

        )
    }
    
}