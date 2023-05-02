import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'
const ActiveLink = () => {
    return (
        <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive
                        ? "isActive"
                        : ''
                       
                    }
                  >
                    {/* other code */}
                  </NavLink>
    );
};

export default ActiveLink;