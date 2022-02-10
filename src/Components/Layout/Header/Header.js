import React from 'react';
import Header from './Header.module.css'



function header (props) {
   const {children} = props;
   return (
       <header className= {Header.container}>
           {children}
           

       </header>
        
   );
}

export default header;
