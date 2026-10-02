import React,{useState} from 'react'
import logo from '../assets/logo.png'
 



function Login() {
const [signState, setSignState] = useState('Sign In')


  return (

        <div className="login h-[100vh] py-[20px] px-[8%] bg-[linear-gradient(#0000007e,#0000007e),url('/background_banner.jpg')]">

        <img src={logo} alt='' className='login-logo w-[150px]'/>

        <div className="login-form w-[100%] max-w-[450px] rounded-[4px] p-[60px] bg-[rgba(0,0,0,0.75)] mx-auto">
            <h1 className='text-[32px] font-bold mb-[28px]'>{signState}</h1>


            <form>
                {signState === 'Sign Up' ? 
                <input type='text' placeholder='Your name' required className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input> 
                : <></>}
                
                <input type='email' placeholder='Email' required className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input>
                <input type='password' placeholder='Password' required className='w-full h-[50px] bg-[#333] text-white my-[12px] border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[16px] font-medium'></input>
                <button className='w-full border-0 outline-0 p-[16px] bg-[#e50914] text-white rounded-[4px] text-[14px] font-medium mt-[20px] cursor-pointer'>{signState}</button>

                <div className="form-help flex items-center justify-between text-[#b3b3b3] text-[13px]">
                    <div className="remember flex items-center gap-[5px] mt-[10px]">
                        <input type="checkbox" className='h-[18px] w-[18px]'/>
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need Help?</p>
                </div>
            </form>

            <div className="form-switch mt-[40px] text-[#737373]">
                {signState === 'Sign In' ?  
                <p>New to Netflix?<span onClick={()=>setSignState('Sign Up')} className='ml-[6px] text-[#fff] cursor-pointer font-medium'>Sign Up Now</span></p>
                :<p>Already have account?<span onClick={()=>setSignState('Sign In')} className='ml-[6px] text-[#fff] cursor-pointer font-medium'>Sign In Now</span></p>
                }
               
                
            </div>

        </div>

    </div>

  )
}

export default Login