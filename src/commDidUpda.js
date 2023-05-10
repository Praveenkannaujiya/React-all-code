import React from "react";
 export default class commDidup extends React.Component{
    constructor()
    {   
        super();
        this.state={
            active:null,
            who: null
       }
        console.warn("constructor")
    }
    componentDidUpdate()
    {
        
        console.warn("componentDidUpdate")
        if(this.state.who==null)
        {
            this.setState({who:"praveen deny"})
        }
    }
    render()
    {
        console.warn("render")
    return(
        <div>
            <h1>CommdidUpdate {this.state.who}</h1>
            <button onClick={()=>{this.setState({active:'yes'})}}>Activate</button>
        </div>
    )
    }
}