import React from "react";
export default function Props()
{
    return(
        <div>
            <h1>JSX Ki help se  aap JavaScript M Html code likh sakte hai</h1>
            <p>jis name se aap export function hota hai 
                vahi name se 
                import hona chahiye or path last m
                "props change nhi hote hai"
            </p>
            <h1>Without JSX html code Syntax</h1>
            <p> code =
            
                React.createElement(
                    'h1',
                    null,
                    'hello JSX'
                )

            </p>
        </div>
    )
}