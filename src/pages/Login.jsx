// import React,{useState} from 'react'
// import logo from '../assets/logo.png'
// import {login, signup} from '../firebase'
// import netflix_spinner from '../assets/netflix_spinner.gif'
 



// function Login() {
// const [signState, setSignState] = useState('Sign In')
// const [name, setName] = useState("")
// const [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const [loading, setLoading] = useState(false)


// const user_auth = async (event)=>{
//     event.preventDefault();
//     setLoading(true)
//     if(signState === "Sign In"){
//       await login(email, password);
//     }else{
//       await signup(name, email, password);
//     }
//     setLoading(false)
// }




//   return (
//     loading ? <div className="login_spinner w-[100%] h-[100vh] flex items-center justify-center">
//         <img src={netflix_spinner} alt='' className='w-[60px]'/>

//     </div>:

//         <div className="login h-[100vh] py-[20px] px-[8%] bg-[linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')]">

//         <img src={logo} alt='' className='login-logo w-[150px]'/>

//         <div className="login-form w-[100%] max-w-[450px] rounded-[4px] p-[60px] bg-[rgba(0,0,0,0.75)] mx-auto">
//             <h1 className='text-[32px] font-bold mb-[28px]'>{signState}</h1>


//             <form>
//                 {signState === 'Sign Up' ? 
//                 <input value={name} 
//                        onChange={(e)=>{setName(e.target.value)}} 
//                        type='text' 
//                        placeholder='Your name' 
//                        required 
//                       className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0
//                                  rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input> 

//                 : <></>}
                
//                 <input value={email} 
//                        onChange={(e)=>{setEmail(e.target.value)}} 
//                        type='email' 
//                        placeholder='Email'
//                        required 
//                        className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0
//                                  rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input>

//                 <input value={password} 
//                        onChange={(e)=>{setPassword(e.target.value)}} 
//                        type='password' 
//                        placeholder='Password' 
//                        required 
//                        className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 
//                                   rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input>

//                 <button onClick={user_auth} 
//                         type='submit' 
//                         className='w-full border-0 outline-0 p-[16px] bg-[#e50914] text-white  
//                                    rounded-[4px] text-[14px] font-medium mt-[20px] cursor-pointer'
//                                    >{signState}</button>

//                 <div className="form-help flex items-center justify-between text-[#b3b3b3] text-[13px]">
//                     <div className="remember flex items-center gap-[5px] mt-[10px]">
//                         <input type="checkbox" className='h-[18px] w-[18px]'/>
//                         <label htmlFor="">Remember Me</label>
//                     </div>
//                     <p>Need Help?</p>
//                 </div>
//             </form>

//             <div className="form-switch mt-[40px] text-[#737373]">
//                 {signState === 'Sign In' ?  
//                 <p>New to Netflix?<span onClick={()=>setSignState('Sign Up')} className='ml-[6px] 
//                    text-[#fff] cursor-pointer font-medium'>Sign Up Now</span></p>

//                 :<p>Already have account?<span onClick={()=>setSignState('Sign In')} className='ml-[6px] 
//                     text-[#fff] cursor-pointer font-medium'>Sign In Now</span></p>
//                 }
               
                
//             </div>

//         </div>

//     </div>

//   )
// }

// export default Login






import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { login, signup } from '../firebase'
import netflix_spinner from '../assets/netflix_spinner.gif'

function Login() {

  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {

    event.preventDefault()
    setLoading(true)

    if (signState === 'Sign In') {
      await login(email, password)
    } else {
      await signup(name, email, password)
    }

    setLoading(false)
  }

  return (

    loading ? (

      <div className="login_spinner flex h-[100vh] w-full items-center justify-center">
        <img
          src={netflix_spinner}
          alt=""
          className="w-[60px]"
        />
      </div>

    ) : (

      <div
        className="login min-h-[100vh] py-[20px] px-[8%]
                   bg-[linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')]
                   bg-cover bg-center
                   max-[500px]:py-[15px] max-[500px]:px-[5%]"
      >

        <img
          src={logo}
          alt=""
          className="login-logo w-[150px]"
        />

        <div
          className="login-form mx-auto mt-0 w-full max-w-[450px]
                     rounded-[4px] bg-[rgba(0,0,0,0.75)] p-[60px]
                     max-[500px]:mt-[30px] max-[500px]:p-[20px]"
        >

          <h1 className="mb-[28px] text-[32px] font-bold">
            {signState}
          </h1>

          <form onSubmit={user_auth}>

            {signState === 'Sign Up' && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                required
                className="my-[12px] h-[50px] w-full rounded-[4px]
                           border-0 bg-[#333] px-[20px] py-[16px]
                           text-[16px] font-medium text-white outline-0"
              />
            )}

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              className="my-[12px] h-[50px] w-full rounded-[4px]
                         border-0 bg-[#333] px-[20px] py-[16px]
                         text-[16px] font-medium text-white outline-0"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
              className="my-[12px] h-[50px] w-full rounded-[4px]
                         border-0 bg-[#333] px-[20px] py-[16px]
                         text-[16px] font-medium text-white outline-0"
            />

            <button
              type="submit"
              className="mt-[20px] w-full cursor-pointer rounded-[4px]
                         border-0 bg-[#e50914] p-[16px]
                         text-[14px] font-medium text-white outline-0"
            >
              {signState}
            </button>

            <div
              className="form-help flex items-center justify-between
                         text-[13px] text-[#b3b3b3]"
            >

              <div className="remember mt-[10px] flex items-center gap-[5px]">
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px]"
                />
                <label>Remember Me</label>
              </div>

              <p>Need Help?</p>

            </div>

          </form>

          <div className="form-switch mt-[40px] text-[#737373]">

            {signState === 'Sign In' ? (

              <p>
                New to Netflix?
                <span
                  onClick={() => setSignState('Sign Up')}
                  className="ml-[6px] cursor-pointer font-medium text-white"
                >
                  Sign Up Now
                </span>
              </p>

            ) : (

              <p>
                Already have account?
                <span
                  onClick={() => setSignState('Sign In')}
                  className="ml-[6px] cursor-pointer font-medium text-white"
                >
                  Sign In Now
                </span>
              </p>

            )}

          </div>

        </div>

      </div>

    )
  )
}

export default Login