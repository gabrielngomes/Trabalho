import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';
import CEP from './src/pages/CEP';
import Endereco from './src/pages/Endereco';

const Tab = createBottomTabNavigator();

const icons = {
  Home:{
    name: 'ios-search',
  },
  Dicionario:{
    name: 'ios-book',
  },
  Contato:{
    name: 'ios-call',
  },
  CEP: {
    name: 'ios-map'
  },
  Endereco: {
    name: 'ios-map'
  }

}


export default function App(){
  
  return(
   
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Dicionario' component={Sobre} />
        <Tab.Screen name='Contato' component={Contato} />
        <Tab.Screen name='CEP' component={CEP} />
        <Tab.Screen name='Endereco' component={Endereco} />
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}
