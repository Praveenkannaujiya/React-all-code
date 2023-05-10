import React from 'react'

const Greetingmsg = () => {
  let msg= ""
  let time= new Date(2023,4,12,18)  // year month date time
    time=time.getHours()
    let cssstyle={}

    if(time>=1 && time<12){
      msg="Good Morning"
      cssstyle.color="green"
    }
    else if(time>=13 && time<18){
      msg="Good Afternoon"
      cssstyle.color="orange"
    }
    else{
      msg="Good Night"
      cssstyle.color="purple"
    }
  return (
    <div>
        <h1>Greeting msg</h1>
        <h1 style={{textAlign:'center'}}>Hello Praveen <span style={cssstyle}>{msg}</span></h1>
        
    </div>
  )
}

export default Greetingmsg