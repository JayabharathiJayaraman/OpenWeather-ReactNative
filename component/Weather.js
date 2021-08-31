import React,{useState,useEffect} from 'react';
import { Card,Title} from 'react-native-paper';
import {View,Image} from 'react-native'
import Header from './Header'
import AsyncStorage from '@react-native-community/async-storage';
import Picture from './Picture'
import configData from '../config.json'; 

const apiKey = configData.API_KEY; 

const Weather = (props)=>{
    const [info,setInfo] = useState({
        name:"loading !!",
        temp:"loading",
        humidity:"loading",
        desc:"loading",
        icon:"loading"
    })
    useEffect(()=>{
       getWeather()
    },[])
    const getWeather = async ()=>{
        let MyCity = await AsyncStorage.getItem("newcity")
        if(!MyCity){
           const {city} = props.route.params
           MyCity = city  
        }
       

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid=${apiKey}`)
     
     .then(data=>data.json())
     .then(results=>{
        setInfo({
            name:results.name,
            temp:results.main.temp,
            humidity:results.main.humidity,
            desc:results.weather[0].description,
            icon:results.weather[0].icon,
        })
     })
     .catch(err=>{
         alert(err.message)
     })
    }
    if(props.route.params.city != "london"){
        getWeather()
    }
    return(
        <View style={{flex:1}}>
            <Header name="Weather App" />
            <Picture></Picture>
           <View style={{alignItems:"center"}}>
               <Title 
               style={{
                   color:'rgb(66, 122, 141)',
                   marginTop:30,
                   fontSize:30
               }}>
                   {info.name}
               </Title>
               <Image 
               style={{
                   width:120,
                   height:120
               }}
               source={{uri:"https://openweathermap.org/img/w/"+info.icon+".png"}}
               
               />

           </View>

           <Card style={{
               margin:5,
               padding:12
           }}>
           <Title style={{color:"rgb(66, 122, 141)"}}>Temperature - {info.temp}</Title>
           </Card>
           <Card style={{
               margin:5,
               padding:12
           }}>
           <Title style={{color:"rgb(66, 122, 141)"}}>Humidity - {info.humidity}</Title>
           </Card>
           <Card style={{
               margin:5,
               padding:12
           }}>
           <Title style={{color:"rgb(66, 122, 141)"}}>Description-  {info.desc}</Title>
           </Card>
        </View>
    )
}


export default Weather