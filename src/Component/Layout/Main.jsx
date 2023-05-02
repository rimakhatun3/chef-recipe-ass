import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import banner1 from '../../assets/images/banner1.avif'
import './main.css'
import Banner from '../Banner/Banner';
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