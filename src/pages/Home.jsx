import React from 'react';
import Intro from '../components/Intro'
import About from '../components/About'
import ProductList from '../components/ProductList'
import Contact from '../components/Contact'


function Home(props) {
  return (
    <>
      <Intro />
      <About />
      <ProductList/>
      <Contact/>
    
    </>
  );
}

export default Home;