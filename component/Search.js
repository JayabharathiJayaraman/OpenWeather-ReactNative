import React,{useState} from 'react';
import { TextInput,Button,Card} from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'
import Header from './Header'
import AsyncStorage from '@react-native-community/async-storage';
import { Context } from '../context/Context';


function Search ({navigation}) {
    const [city,setCity] = useState('')
    const [cities,setCities] = useState([])
    const fetchCities = (text)=>{
        setCity(text)
        fetch("https://autocomplete.wunderground.com/aq?query="+text)
        .then(item=>item.json())
        .then(cityData=>{
            setCities(cityData.RESULTS.slice(0,9))
        })
    }
    const btnClick = async ()=>{
        await AsyncStorage.setItem("newcity",city)
        navigation.navigate("home",{city:city})
    }
    const listClick = async (cityname)=>{
        setCity(cityname)
        await AsyncStorage.setItem("newcity",cityname)
        navigation.navigate("home",{city:cityname})
    }
    return (
     <View style={{flex:1}}>
         <Context.Provider value = "Search City">
         <Header/>
         </Context.Provider>
         <TextInput
           label="City Name"
           style={{ marginLeft: 450,marginTop: 30, height: 80, width: 500, borderColor: 'rgb(5, 51, 66)', borderWidth: 1 }}
           theme={{colors:{primary:"rgb(5, 51, 66)"}}}
           value={city}
           onChangeText={(text)=>fetchCities(text)}
          />
          <Button
           mode="contained" 
           style={{marginLeft: 650, marginTop:5, height: 35, width: 100, borderColor: 'rgb(5, 51, 66)', borderWidth: 1 }}
           theme={{colors:{primary:"rgb(66, 122, 141)"}}}

           onPress={() => btnClick()}>
          <Text style={{color:"white"}}>Search</Text> 

        </Button>
        <FlatList
        data={cities}
        renderItem={({item})=>{
            return(
                <Card 
                 style={{margin:2,padding:12}}
                 onPress={()=>listClick(item.name)}
                >
                    <Text>{item.name}</Text>
                </Card>
            )
        }}
        keyExtractor={item=>item.name}
        />

     </View>
    )
 
}

export default Search