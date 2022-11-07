
import React from 'react'
import {Link} from 'react'
import {useState} from 'react'
//**FIGURE***import {getGoogleOAuthURL} from "../utils/getGoogleURL"

//outside
import axios from 'axios'

//Icons
import visibilityIcon from '../assets/visibilityIcon.svg'
import {ReactComponent as ArrowRightIcon} from '../assets/keyboardArrowRightIcon.svg'
import GoogleLogin from 'react-google-login'
import {useNavigate} from 'react-router-dom'

function SignIn() {

  
  const [showPassword,setShowPassword]=useState(false)
  const [admin,setAdmin] = useState(false)
  const [active,setActive] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const navigate=useNavigate()

  //remove this and place in safer place///////////////
  

  
 

async function signin(e){
   e.preventDefault()
    console.log("***SIGNING IN USER(SIGNIN>JS)*****")
   
      
      await axios.post("http://localhost:3002/user/sign-in",{email:email,password:password, admin:admin}).then((response) => {
        console.log('hello')
        if(response.data.loggedIn==true){
          navigate('/home3')
        }
      })
 
  }
 

  const signUpInstead = () => {
    navigate('/sign-up')
  }
 
  

  /**<img 
                className="showPassword"
                //src={visibilityIcon}
                alt="show password"
               /*onChange={onChange}
                onClick={()=>{
                  setShowPassword((prevState) =>!prevState)
                }}/> 
                 <Link 
                /*to='/forgot-password' 
                className='forgotPasswordLink'>
                Forgot Password
                </Link>
          
          <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
          </Link>
          
          */
         

         const onMutate = () => {
          setActive(!active)
          setAdmin(!admin)
          console.log(!admin)
          
        }

        

        //setInterval(waitForGoogle(),10000)
         

  return (
    <div>
      <div className="pageContainer">
       <header>
         <p className="pageHeader">Welcome Back!!</p>
      </header>
      <main classname="m-4">
        <form onSubmit={signin}>
          <input 
            id="email"
            className="emailInput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Email"
           />
          <div className="passwordInputDiv">
            <input
              /*type={showPassword? 'text':'password'}*/
              type='text'
              className='passwordInput'
              placeholder="Password"
              id='password'
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
             />
             <img 
             className="showPassword"
             src={visibilityIcon}
             alt="show password"
             onClick={()=>{
               setShowPassword((prevState) =>!prevState)
             }}/> 
              
            </div>
              <div className="signInBar">
              <p className="signInText">
               Sign In here
            </p>
            <button
                className={active ?'formButtonActive': 'formButton'}
                type="button"
                id="parking"
                value={false}
                onClick={onMutate}>
                  Admin
              </button>
           <button className="signInButton" type="submit" >
             <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
           </button>
              <button className="registerLink" onClick={signUpInstead}>
                Sign Up Instead
              </button>
              <a href="http://localhost:3002/auth/google" class="btn red darken-1">Login with Google
              </a>
              
            </div>
        </form>
        
      </main>
      </div>
    </div>
  )
}

export default SignIn