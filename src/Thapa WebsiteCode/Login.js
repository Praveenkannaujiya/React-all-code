import React, { useRef} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const luckyName=useRef("")
    
       


    const Difftost=()=>{
        console.log(luckyName.current.value)
     
       
        toast.success(`hello Dear ${luckyName.current.value} SuccessFully Submit Form`,{position:"top-center"})
        toast.dark( "SuccessFully Submit Form",{position:"top-left"})
        toast.warning( " SuccessFully Submit Form",{position:"top-right"})
        toast.info( " SuccessFully Submit Form",{position:"bottom-center"})
        toast.error(" SuccessFully Submit Form",{position:"bottom-right"})
        toast.dark( " SuccessFully Submit Form",{position:"bottom-left"})

    }
  return (
    <>
        <div className='maindiv'>
            <h2>Welcome to My Company SignIn Now</h2>
            <input type="text" id='luckyName'ref={luckyName} />
            <button className='btn btn-primary' onClick={Difftost}>Click</button>
        </div>

        <ToastContainer/>
    </>
  )
}

export default Login