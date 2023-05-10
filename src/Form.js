import React from "react";
export default class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            user: null,
            password: null
        }
    }
    submit() {
        console.warn(this.state)
    }

    render() {
        return (
            <div>
                <h1>Form heading</h1>

                <input
                    type="text"
                    name="praveen"
                    onChange={(e) => { this.setState({ user: e.target.value }) }}
                />
                <br /><br />
                <input
                    type="Password"
                    name="password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                />

                <br /><br />
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        )
    }
}