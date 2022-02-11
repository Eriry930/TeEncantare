import React from 'react';
import Header from './Header.module.css'

import {Outlet} from "react-router-dom"
import Logo from './Logo';
import NavBar from '../../common/Views/NavBar'



const header =(props) => {
   const {children} = props;
   return (
       <>
           <header className= {Header.container}>
               {children}
            <Logo />
            <NavBar />


            </header>
            
            <Outlet />
       </> 
   );
}

export default header;
