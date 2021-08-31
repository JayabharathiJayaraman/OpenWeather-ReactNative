import React from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from './component/Search'
import Weather from './component/Weather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const App= () => {
  return (
    <>
    
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
         screenOptions={({route})=>({
           tabBarIcon:({color})=>{
             let iconName;
             if(route.name==="home"){
               iconName = 'home-city-outline'
             }else if(route.name==="search"){
               iconName = "city"
             }
             return <MaterialCommunityIcons marigin= {10} name={iconName} size={30} color={color} />
           }
         })}
         tabBarOptions={{
           activeTintColor:"white",
           inactiveTintColor:"white",
           activeBackgroundColor:"rgb(66, 122, 141)",
           inactiveBackgroundColor:"rgb(66, 122, 141)"
         }}
        >
          <Tab.Screen name="home" component={Weather} 
           initialParams={{city:"london"}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
   </>
  );
};


export default App;
