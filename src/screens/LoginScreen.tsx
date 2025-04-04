import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, View } from 'react-native'
import { LoginStyles } from '../styles/Login.styles'

const LoginScreen = ({navigation}:any) => {

  //Estado para el usuario y contraseña
  const [user,setUser] = useState("")
  const [password,setPaswword] = useState("")

  //Funcion de validacion y redireccion
  const LoginByUser=() => {
    if(!user || !password){
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    //Simulamos la autenticación
    if(user === "admin" || password ==="142"){
      navigation.navigate("Home",{user:user})
    }else{
      Alert.alert("Error","Credenciales incorrectas");
    }

  }

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.text}> Iniciar Sesion </Text> 

   
      <TextInput
        style={LoginStyles.input}
        placeholder="Usuario"
        onChangeText={(text)=>setUser(text)}
      ></TextInput>

      <TextInput
        style={LoginStyles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text)=>setPaswword(text)}
      ></TextInput>

      <Button title="Iniciar Sesion" onPress={LoginByUser} />

    </View>
  )
}

export default LoginScreen
