import React from "react";

export default class state extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'peter',
            email: 'peter@gamil.com',
            count: 0
        }

    }
    update() {
        this.setState({
            name: 'praveen',
            count:this.state.count+2
        })
    }
    render() {
       
        return (
            <div>
                <h1>count : {this.state.count}</h1>
                <h1>Email : {this.state.email}</h1>
                <button onClick={() => { this.update() }} >Update name</button>
            </div>
        )
    }
}