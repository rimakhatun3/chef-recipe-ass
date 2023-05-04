import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import './main.css'

const Main = () => {
const navigation = useNavigation()
    return (
            <div>
    <Header></Header>
    <div>{navigation.state==='lodding'&&<div className="radial-progress" style={{"--value":100}}>100%</div>}</div>
   <div className='min-h-[calc(100vh-250px)]'>
    <Outlet></Outlet>
   </div>
            <Footer></Footer>
                
        </div>
    );
};

export default Main;