//react
import {useState} from 'react'
import{Link,useNavigate} from 'react-router-dom'
import React from 'react'

//outside 
import axios from 'axios'

//icons
import {ReactComponent as ArrowRightIcon} from '../assets/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/visibilityIcon.svg'

function SignUp(){

  const navigate=useNavigate()

  
  const[formData,setFormData]=useState({
    first:'',
    last:'',
    email:'',
    password:'',
    password2:''
  })
  const [showPassword,setShowPassword]=useState(false)
  const{first,last,email,password,password2}=formData

  
  const onChange =(e) =>{
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,[e.target.id]:e.target.value,
    }))
  }

  const signUp = () => {
    console.log("***SIGNUP NEW USER(SIGN_UP.JS)*****")
    if(password!=password2){
      alert("passqords do not match!")
    }else{
      console.log(email)
      axios.post("http://localhost:3002/user/sign-up",{first:first,last:last,email:email,password:password}).then((response) => {
        console.log(response)
      })
    }
  }

 

  const signInInstead =()=> {
    navigate('/sign-in')
  }

  return(
    <div className="pageContainer">
    <header>
      <p className="pageHeader">Welcome Back!!</p>
   </header>
   <main className="m-4">
     <form onSubmit={(console.log('hi'))}>
        
        <input 
         id="first"
         className="emailInput"
         type="text"
         placeholder="First"
         value={first}
         onChange={onChange}/>
        <input 
         id="last"
         className="emailInput"
         type="text"
         placeholder="Last"
         value={last}
         onChange={onChange}/>
       <input 
         id="email"
         className="emailInput"
         type="email"
         placeholder="Email"
         value={email}
         onChange={onChange}/>
       <div className="passwordInputDiv">
         <input
           type={showPassword? 'text':'password'}
           className='passwordInput'
           placeholder="Password"
           id='password'
           value={password}
           onChange={onChange}
           />
           <img 
             className="showPassword"
             src={visibilityIcon}
             alt="show password"
             onChange={onChange}
             onClick={()=>{
               setShowPassword((prevState) =>!prevState)
             }}/>
       </div>
       <div className="passwordInputDiv">
         <input
           type={showPassword? 'text':'password'}
           className='passwordInput'
           placeholder="Confirm Password"
           id='password2'
           value={password2}
           onChange={onChange}
           />
           <img 
             className="showPassword"
             src={visibilityIcon}
             alt="show password"
             onChange={onChange}
             onClick={()=>{
               setShowPassword((prevState) =>!prevState)
             }}/>
       </div>
       
         <div className="signInBar">
           <p className="signInText">
             Sign Up
           </p>
           <button className="signInButton" onClick={signUp}>
             <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
           </button>
           
           <button className='registerLink' onClick={signInInstead}>
            Sign In Instead
          </button>
         </div>
     </form>
     
   </main>
 </div>
 


  )
}

export default SignUp