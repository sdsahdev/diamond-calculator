import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabScreen from './BottomTabScreen';
import App from '../src/App';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from '../Redux/Store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RoutesScreens = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
   <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}> 
 
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default RoutesScreens;

const styles = StyleSheet.create({});
