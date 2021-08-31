import {Image,StyleSheet} from 'react-native';
import React from 'react';

const Picture = () => {
return(
    
        <Image
            source = { require('../assets/background/img/haze.png')} style = {styles.image}>
        </Image>
    
);

}

const styles = StyleSheet.create({
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
  }

});

export default Picture