import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Iniciar Sesion' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
    </Stack.Navigator>
  )
}

export default StackNavigator
