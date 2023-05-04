import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
const {createUser,updateUser} = useContext(AuthContext)
const [error,setError] = useState('')
const [sucess,setSucess] = useState('')
const handleRegister=(event)=>{
    event.preventDefault()
    setSucess('')
    setError('')
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email= form.email.value;
    const password = form.password.value;
    const matchPassword = form.matchPassword.value;
    // console.log(name,photo,email,password,matchPassword)
    form.reset()
if(password!==matchPassword){
   return setError('please type same password')
}
else if(!/(?=.*?[A-Z])/.test(password)){
    return setError('please type atleast 1 upercase')
}
else if(password.length < 8){
    return setError('please type atleast 8 character')
}
createUser(email,password)
.then(result=>{
    const currentUser = result.user
    console.log(currentUser)
    setSucess("user create sucess")
    updateUser()
})
.catch(error=>{
    setError(error.message)
})
    
}

    return (
        <div>
            <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold my-5">Register Now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered " required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="email" className="input input-bordered " required/>
        </div>
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
            <span className="label-text">Match Password</span>
          </label>
          <input type="password" name='matchPassword' placeholder=" password" className="input input-bordered" required />
          <label className="label">
           <p>Already Have an Account Please <Link to='/login' className='text-blue-800' >Login</Link></p>
          </label>
          <p className='text-red-500'>{error}</p>
          <p className='text-lime-600'>{sucess}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-60">Register</button>
        </div>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default Register;