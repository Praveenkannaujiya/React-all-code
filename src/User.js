import React, { Component } from 'react'

export default class User extends Component {
 
    componentWillUnmount() {
        alert("User  has been Delete")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>name:Praveen</li>
                    <li>Email:praveen@gmail.com</li>
                    <li>Contact:9532007548</li>
                </ul>
               
            </div>
        )
    }
}
