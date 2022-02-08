import React from "react";
import Logo from './Logo.css'

function logo (props) {
  const {children} = props;
  return (
    <a href="mas" className={Logo.log}>
      {children}
      <img className={Logo.img}
        src={"./icons/Logo.png"} 
        alt={"hola"}
      />
    </a>
  );
}

export default logo;
