import React from 'react';
import { StatusBar } from 'react-native';
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Footer></Footer>
    </>
  );
};


export default App;
