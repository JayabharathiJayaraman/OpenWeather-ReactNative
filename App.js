import React from 'react';
import { StatusBar } from 'react-native';
import Footer from './component/Footer';
import Home from './component/Home';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <Home home="Here you can search for any Country or City. And it shows the current weather report."></Home>
      <Footer></Footer>
    </>
  );
};


export default App;
