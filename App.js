import React from 'react';
import { StatusBar } from 'react-native';
import Footer from './component/Footer';
import Home from './component/Home';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Home></Home>
      <Footer></Footer>
    </>
  );
};


export default App;
