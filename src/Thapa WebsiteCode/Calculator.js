import React, { useState } from 'react'

const Calculator =()=> {
  const [result,setResult]=useState("")

  const Clickhendler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  const Cleardisplay=()=>{
    setResult('')
  }
  const Equalbtn =()=>{
    setResult(eval(result).toString())
  }

  return (
    <div className='calc'>
        <h1>CALCULATOR Praveen </h1>
        <input type="text" placeholder='0' id='answer' value={result}/>
        <input type="button" value='9'  className='button' onClick={Clickhendler} />
        <input type="button" value='8' className='button' onClick={Clickhendler} />
        <input type="button" value='7' className='button' onClick={Clickhendler} />
        <input type="button" value='+' className='button' onClick={Clickhendler} />
        <input type="button" value='6' className='button' onClick={Clickhendler} />
        <input type="button" value='5' className='button' onClick={Clickhendler} />
        <input type="button" value='4' className='button' onClick={Clickhendler} />
        <input type="button" value='-' className='button' onClick={Clickhendler} />
        <input type="button" value='3' className='button' onClick={Clickhendler} />
        <input type="button" value='2' className='button' onClick={Clickhendler} />
        <input type="button" value='1' className='button' onClick={Clickhendler} />
        <input type="button" value='*' className='button' onClick={Clickhendler} />
        <input type="button" value='.' className='button' onClick={Clickhendler} />
        <input type="button" value='0' className='button' onClick={Clickhendler} />
        <input type="button" value='%' className='button' onClick={Clickhendler} />
        <input type="button" value='/' className='button' onClick={Clickhendler} />
        <input type="button" value='C' className='button button1' onClick={Cleardisplay}/>
        <input type="button" value='=' className='button button1' onClick={Equalbtn}/>
    </div>
  )
}

export default Calculator