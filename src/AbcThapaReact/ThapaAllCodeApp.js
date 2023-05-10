import React from 'react'
// import Jsx from './Jsx'
// import TampleteLit from './TampleteLit'
// import Challenge from './Challenge'
// import Imageweb from './Imageweb'
// import Greetingmsg from './Greetingmsg'
import Netflix1 from './Netflix1'
import Netflix2 from './Netflix2'
const ThapaAllCodeApp = () => {
  console.log(Netflix2)


  return (
    <>
   
    
    {/* <Jsx/>
    <TampleteLit/>
    <Challenge/>
    <Imageweb/>
    <Greetingmsg/> */}

        <h1 className='headingstyle'>CartOOn Hub</h1>
        

  
    
    {Netflix2.map((val)=>{
         return(

          <Netflix1 
          link={val.link}
          category={val.category}
          title={val.title}
          /> 
        );
      
    })}
    </>
  )
}

export default ThapaAllCodeApp