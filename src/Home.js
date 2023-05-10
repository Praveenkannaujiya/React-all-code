import React from "react";
 export default class Home extends React.Component{
    constructor()
    {   
        super();
        this.state={
            data:null
       }
        console.warn("constructor")
    }
    componentDidMount()
    {
        this.setState({data:"updated"})
        console.warn("componentDidMount")
    }
    render()
    {
        console.warn("render")
    return(
        <div>
            <h1>home Component</h1>
        </div>
    )
    }
}