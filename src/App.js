/* eslint-disable no-unused-vars */

import React, {useEffect, useState} from 'react';
import Header from './Components/Layout/Header/Header';
import Logo from './Components/Layout/Header/Logo';
import ContainerCards from './Components/Layout/ContainerCards/ContainerCards';
import Card from './Components/Layout/Cards/Cards';
import Footer from './Components/Layout/Footer/Footer';

import {arreglos} from './Components/Data/Arreglos'


function App() {

  


 
  return (
  <>
      <Header title='React App'>
        <Logo />
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
