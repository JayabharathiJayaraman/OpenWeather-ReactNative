import {Image,StyleSheet} from 'react-native';
import React from 'react';

const Picture = () => {
return(
    
        <Image
            source = { require('../assets/background/img/haze.png')} style = {styles.container}>
        </Image>
    
);

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: null,
    height: null,
  },

});

export default Picture