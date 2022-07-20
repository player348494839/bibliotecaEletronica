import React from 'react';
import {NavigationContainer} from "@react-navigation/native" 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator()


export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transaction" Component={TransactionScreen}/>
          <Tab.Screen name="Search" Component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}