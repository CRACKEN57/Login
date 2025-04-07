import React from 'react'
import { Alert, Button, Text, View } from 'react-native';
import { HomeStyles } from '../styles/Home.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeScreen = ({ route, navigation }: any) => {

  const { user } = route.params; // Extraer el usuario desde login

  const LogOut = async () => {
    try {
      await AsyncStorage.removeItem("user")
      navigation.replace("Login")
    } catch (error) {
      Alert.alert("Error", `${error}`)
    }
  }


  return (

    <View style={HomeStyles.container}>
      <Button title="Cerrar Sesion" onPress={LogOut} />
      <Text style={HomeStyles.text}>Bienvenido,{user}</Text>
    </View>
  )
}

export default HomeScreen
