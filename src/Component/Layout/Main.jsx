import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './main.css'

const Main = () => {
    return (
      
            <div>

            
   <div>
    <Header></Header>
    
    
   </div>
   <div className='min-h-[calc(100vh-250px)]'>
    <Outlet></Outlet>
   </div>
          <div>
            <Footer></Footer>
            </div>  
            
        </div>
    );
};

export default Main;