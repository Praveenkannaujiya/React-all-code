import React from "react";
export default class Formvalidaton extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            password: "",
            nameerror: "",
            passworderror: ""
        }

    }
    valid() {
        if (!this.state.name.includes('@') && this.state.password.length < 5) {
            this.setState(
                { nameerror: "invalid name", passworderror: "password lenght shoud be more than 5" }
            )
        }
        else if (!this.state.name.includes('@')) {
            this.setState(
                { nameerror: "invalid name" }
            )
        }
        else if (this.state.password.length < 5) {
            this.setState(
                { passworderror: "password lenght shoud be more than 5" }
            )
        }
        else
        {
            return true
        }
    }
    submit() {
        this.setState(
            { nameerror: "", passworderror: " " }
        )
        if (this.valid()) {
            alert("form has been submited")
        }
    }


    render() {
        return (
            <div>
                <h1>FormValidations</h1>
                <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                <p style={{ color: "red", fontSize: "19px" }}>{this.state.nameerror}</p>
                <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <p style={{ color: "red",  fontSize: "19px" }}>{this.state.passworderror}</p>
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        )
    }
}