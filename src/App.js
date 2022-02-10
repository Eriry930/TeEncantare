import React from 'react';
import Card from './Components/Layout/Cards/Cards';
import ContainerCards from './Components/Layout/ContainerCards/ContainerCards';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';
import Logo from './Components/Layout/Header/Logo';

function App() {

 
  return <div className='App'>
    <>
      <Header title='React App'/>
      <ContainerCards />
      <Card />
      <Footer />
      <Logo />
      </>
  </div>;
}

export default App;
