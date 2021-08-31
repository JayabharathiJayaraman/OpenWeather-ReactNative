import React,{useState} from 'react';
import { TextInput,Button,Card} from 'react-native-paper';
import {View,Text,FlatList} from 'react-native'
import Header from './Header'
import AsyncStorage from '@react-native-community/async-storage';
import IonIcon from 'react-native-vector-icons/Ionicons'

const Search = ({navigation})=> {
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
         <Header name="Search" /><br></br>
          <TextInput
           label="City Name"
           style={{ height: 80, width: 180, borderColor: 'rgb(5, 51, 66)', borderWidth: 1 }}
           theme={{colors:{primary:"rgb(5, 51, 66)"}}}
           value={city}
           onChangeText={(text)=>fetchCities(text)}
          />
          <Button
           icon="content-save"
           mode="contained" 
           style={{height: 50, width: 150, borderColor: 'rgb(5, 51, 66)', borderWidth: 1 }}
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