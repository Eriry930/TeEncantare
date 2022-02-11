  import React from "react";
import Logo from './Logo.css'

function logo (props) {
  const {children} = props;
  return (
    <a href="mas" className={Logo.log}>
      {children}
      <img className="Logo"
        src={"https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/273322058_10227163930988143_4497941977403269611_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=uWvqjIhwpJ8AX_IhcK9&_nc_ht=scontent-bog1-1.xx&oh=00_AT9xOCPxncH5W2GhzaS24A_2vLC3zBup3Jnc_Ge5j6dvYA&oe=6209E018"} 
        alt={"hola"}
      />
    </a>
  );
}

export default logo;
