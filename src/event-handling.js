import React from "react";
export default function Event() {
    function testfun() {
        alert("function trigger")
    }
    return (
        <div>
            <h1>function click event</h1>
            <button onClick={testfun}>click me</button>
        </div>
    )
}