import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Header = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div>
          <div className=" lg:px-12 navbar bg-gray-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
          
      <ActiveLink to='/'>Home</ActiveLink>
      <ActiveLink to='/blog'>Blog</ActiveLink>
          </ul>
        </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl font-extrabold "><span className='text-orange-400'>Chef</span> <span className='text-indigo-600 ml-2'>Recipe</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <li> <ActiveLink to='/'>Home</ActiveLink></li>
      <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
    </ul>
    
  </div>
  <div className="navbar-end">
    {user?<>
    <button onClick={handleLogOut}>LogOut</button>
    <img className='w-10 mx-3 rounded-full ' src={user.photoURL} alt="" />
    </>
    
    :<><Link to='/login'><button >Login</button></Link></>}

  </div>
</div>
        </div>
    );
};

export default Header;