import React, { useState, useEffect } from 'react';
import { Title } from 'react-native-paper';
import { View, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-community/async-storage';
import configData from '../config.json';
import { Context } from '../context/Context';

const apiKey = configData.API_KEY;
// function component with props
function Weather(props) {
    const [info, setInfo] = useState({
        name: "loading !!",
        temp: "loading",
        humidity: "loading",
        desc: "loading",
        icon: "loading",
        sunrise: "loading",
        sunset: "loading",
        speed: "loading"
    })
    useEffect(() => {
        getWeather()
    }, [])
    const getWeather = async () => {
        let MyCity = await AsyncStorage.getItem("newcity")
        if (!MyCity) {
            const { city } = props.route.params
            MyCity = city
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid=${apiKey}`)
            .then(data => data.json())
            .then(results => {
                console.log('res', results)
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                    sunrise: results.sys.sunrise,
                    sunset: results.sys.sunset,
                    speed: results.wind.speed
                })
            })
            .catch(err => {
                alert("Please enter the correct city")
            })
    }
    if (props.route.params.city != "london") {
        getWeather()
    }
    return (
        <>
            <Context.Provider value="Weather App">
                <Header />
            </Context.Provider>
            <View style={{ alignItems: "center" }}>
                <Title
                    style={{
                        color: 'rgb(66, 122, 141)',
                        marginTop: 30,
                        fontSize: 30
                    }}>
                    {info.name}
                </Title>
                <Image
                    style={{
                        width: 120,
                        height: 120
                    }}
                    source={{ uri: "https://openweathermap.org/img/w/" + info.icon + ".png" }}

                />

            </View>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/background/img/haze.png')} style={styles.image}>
                    <Text style={styles.temp}>Temperature - {Math.floor(info.temp - 273.15)}&#176;C</Text>
                    <Text style={styles.temp}>Humidity - {info.humidity}</Text>
                    <Text style={styles.temp}>Wind - {Math.floor((info.speed * 18) / 5)} km/hr</Text>
                    <Text style={styles.temp}>Sunrise -  {new Date(info.sunrise * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.temp}>Sunset - {new Date(info.sunset * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.temp}>Description - {info.desc}</Text>
                </ImageBackground>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: "50",
        height: "100",
        justifyContent: "center",
        overflow: 'hidden',
        borderRadius: 150
    },
    container: {
        flex: 1,
    },
    temp: {
        color: 'white',
        fontSize: 30,
        textAlign: "center"
    }
})


export default Weather;