import React from 'react'
import { Text, View } from 'react-native';
import { HomeStyles } from '../styles/Home.styles';



const HomeScreen = ({route}: any ) => {

    const {user} = route.params; // Extraer el usuario desde login

  return (
    <View style={HomeStyles.container}>
        <Text style={HomeStyles.text}>Bienvenido,{user}</Text>
    </View>
  )
}

export default HomeScreen
