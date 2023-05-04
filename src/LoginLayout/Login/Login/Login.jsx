import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
const {loginUser,googleSingIn,gitHUbSingIn} = useContext(AuthContext)

const [update,setUpdate]= useState({})
const navigate = useNavigate()
const location = useLocation()
console.log(location)
const from = location.state?.from?.pathname || '/'


    const handelOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value
        setUpdate(newValue)
    }
    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value
        console.log(email,password)
        form.reset()

        loginUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })

        .catch(error=>{
            console.log(error.message)
        })

    }


    return (
        <>
             <form onSubmit={handleLogin}  className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold my-5">Login Now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={handelOnChange} type="text" placeholder="email" name='email' className="input input-bordered " required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={handelOnChange} type="password" name='password' placeholder="password" className="input input-bordered" required />
          
          <label className="label">
           <p>New To This Site Please <Link to='/register' className='text-blue-800' >Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-60">Login</button>
        </div>
        <div>
        <button onClick={()=>googleSingIn()} className="btn btn-secondary w-60"><FaGoogle className='mr-2'></FaGoogle> Login With Goggle</button> 
        </div>
        <div>
        <button onClick={()=>gitHUbSingIn()} className="btn btn-warning w-60"><FaGithub className='mr-2'/> Login With GitHub</button> 
        </div>
      </div>
    </div>
  </div>
</form>
        </>
    );
};

export default Login;