import React from "react";
import './costom.css'
export default function style(prop)
{
        const h2={
            color:'green',
            fontSize:'48px'
        }
        const h3={
            color:'red',
            fontSize:'88px'
        }
    return(
        <div>
            <h1 className="deny" > react Globle Style</h1>
            <h2 style={prop.data=='apply'? h2:h3}> react  Inline Style</h2>

        </div>
    )
}