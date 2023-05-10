import React from "react";
 export default class Listmap extends React.Component{
    constructor()
    {
        super()
        this.state={
            list:[
                {name:'praveen',phone:'9532',email:"praveen@gmail.com"},
                {name:'ankit',phone:'8808',email:"ankit@gmail.com"},
                {name:'resham',phone:'9532',email:"resham@gmail.com"},
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>listing map</h1>
                {
                this.state.list.map((item)=>
                <div>
                     Name : {item.name} <span>,</span>
                     Email : {item.email} <span>,</span>
                     Phone : {item.phone}
                     </div>
                )
    }
            </div>
        )
    }
}