import React from 'react';
import Card from './Components/Layout/Cards';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';



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
