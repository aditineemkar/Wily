import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen from './screens/SearchScreen';
import TransactionsScreen from './screens/BookTransactionsScreen'


export default class App extends Component() {
  render(){
    return <AppContainer/>
    
  }
}

const Tabs = createBottomTabNavigator({
  Transaction:{screen:TransactionsScreen},
  Search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(Tabs)

