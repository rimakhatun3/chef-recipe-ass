import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,lodding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(lodding){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;