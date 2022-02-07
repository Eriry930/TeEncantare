import React from 'react';
import Card from './Components/Layout/Cards/Cards';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer/Footer';



function App() {
  return <div className='App'>
    <>
      <Header title='React App'/>
      <Card />
      <Footer />
      </>
  </div>;
}

export default App;
