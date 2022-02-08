import React from 'react';
import Header from './Header.module.css'
import Logo from './Logo'


function header (props) {
   const {children} = props;
   return (
       <header className= {Header.container}>
           {children}
           <Logo />

       </header>
        
   );
}

export default header;
