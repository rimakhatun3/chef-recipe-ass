import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value
        console.log(email,password)
        form.reset()
    }
    return (
        <>
             <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold my-5">Register Now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered " required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
          <label className="label">
           <p>New To This Site Please <Link to='/register' className='text-blue-800' >Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-60">Login</button>
        </div>
      </div>
    </div>
  </div>
</form>
        </>
    );
};

export default Login;