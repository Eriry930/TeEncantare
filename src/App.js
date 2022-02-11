/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import Header from './Components/Layout/Header/Header';
import Logo from './Components/Layout/Header/Logo';
import ContainerCards from './Components/Layout/ContainerCards/ContainerCards';
import Card from './Components/Layout/Cards/Cards';
import Footer from './Components/Layout/Footer/Footer';
import NavBar from './Components/common/Views/NavBar';

import {arreglos} from './Components/Data/Arreglos'
import {Link } from 'react-router-dom'



function App() {

 
  return (
  <>
      <Header title='React App'>
        <Logo />
        <div className="container">
            <div>
                <Link to="/" className=" btn">
                 Inicio
                </Link>
            </div>
            <div>
                <Link to="/breakFast" className=" btn">
                 Desayunos
                </Link>
            </div>
            <div>
                <Link to="/catalogue" className=" btn">
                 Catalogo 
                </Link>
            </div>
            <hr />
        </div>
        
      </Header> 
    
      <ContainerCards>
        {arreglos.map(menu => (
              <Card
              key= {menu.id}
              menu = {menu.Menu}
              type ={menu.type}
              image ={menu.image}
              products ={(menu.Products).toString()}
              price = {menu.Price} />
        ),)};
              <Footer />
      </ContainerCards>  
    
      
  </>
)
}

export default App;
