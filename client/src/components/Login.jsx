import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { delay, motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {


 const [state,setState]=useState('Login');
  const{setShowLogin, backendUrl, setToken, setUser}= useContext(AppContext);


const [name, setName]= useState("");
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');


const onSubmitHandler= async (e)=> {
      e.preventDefault();

      try {
        if(state=== 'Login') 
        {
          const {data}=  await axios.post(backendUrl + '/api/user/login', {email, password});

          if(data.success){
            setToken(data.token)
            setUser(data.user)

            localStorage.setItem('token', data.token)
             setShowLogin(false);
          }

          else {
               toast.error(data.message)
          }
        }


        else {
                 const {data}=  await axios.post(backendUrl + '/api/user/register', {name,email, password});

          if(data.success){
            setToken(data.token)
            setUser(data.user)

            localStorage.setItem('token', data.token)
             setShowLogin(false);
          }

          else {
               toast.error(data.message)
          }

        }



      }
      catch(error){
                   toast.error(error.message)
      }

}






// Disabling the scrolling for login form using useEffect

  useEffect(()=>{
                 document.body.style.overflow='hidden';

                 return ()=>{
                     document.body.style.overflow='unset';
                 }
  },[])


  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-10'>

    
    
    
    
      <motion.form  onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500' type='submit'
       initial={{opacity:.2, y:50}}
    transition={{duration:.3}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
      
      
      
      
      >
           <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
           <p className='text-sm'></p>
                     {state=== 'Login'? 'Welcome back! Please Login to continue' : 'Welcome back! Please Sign up to continue'}






        {/* if our state is not login then show additional field for username */}

         { state!=='Login' &&   <div className='border px-6 py-2 flex items-center gap-1.5 rounded-full
              mt-5'>
                <img src={assets.profile_icon} alt="" width={20} height={15} />
                <input onChange={e=>setName(e.target.value)}  value={name} type='text' className='outline-none text-sm ' placeholder='FULL NAME' required/>


             </div>
         }



              <div className='border px-6 py-2 flex items-center gap-2 rounded-full
              mt-5'>
                <img src={assets.email_icon} alt=""  />
                <input onChange={e=>setEmail(e.target.value)}  value={email} type='email' className='outline-none text-sm' placeholder=' EMAIL' required/>


             </div>

              <div className='border px-6 py-2 flex items-center gap-2 rounded-full
              mt-5'>
                <img src={assets.lock_icon} alt=""/>
                <input onChange={e=>setPassword(e.target.value)}  value={password} type='password' className='outline-none text-sm' placeholder=' PASSWORD' required/>


             </div>
  

              <p className='text-sm text-blue-600 my-4 cursor-pointer'> Forgot password</p>

              <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state=== 'Login'? 'Login' : 'Create Account'}</button>


              {/* we are checking that if out state is login then show signup option else show login option */}

{ state==='Login' ?
             <p className='mt-5 text-center'>Don't have an account?    <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>

:
              <p className='mt-5 text-center'>Already have an account?    <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
}

              <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=" " className='absolute top-5 right-5 cursor-pointer'/>


      </motion.form>
        




    </div>
  )
}

export default Login