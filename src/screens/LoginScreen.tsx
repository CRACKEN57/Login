import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LoginStyles } from '../styles/Login.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }: any) => {

  //Estado para el usuario y contraseña
  const [user, setUser] = useState("")
  const [password, setPaswword] = useState("")
  const [email, setEmail] = useState("")

  //Funcion de validacion y redireccion
  const LoginByUser = async () => {
    if (!user || !password || !email) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    try {
      //Obetener los datos de AsyncStorage
      const UserData = await AsyncStorage.getItem("user");
      const DataUsers = UserData ? JSON.parse(UserData) : [];
      
      //Obetner el usuario que se quiere logear
      const LoginUser = DataUsers.find((item: any) => item.username === user && item.password === password && item.email === email);

      //Verficar si el usuario existe
      if (!LoginUser) {
        Alert.alert("Error", "Usuario o contraseña incorrectos");
        return;
      }
      
      //Redireccionar al home
      console.log("LoginUser =>", LoginUser);
      
      Alert.alert("Exito", "Bienvenido");
      navigation.navigate("Home", { user: LoginUser.username });

    } catch (error) {
      Alert.alert("Error", `${error}`);
    }
  };


  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.text}> Iniciar Sesion </Text>


      <TextInput
        style={LoginStyles.input}
        placeholder="Usuario"
        onChangeText={(text) => setUser(text)}
      ></TextInput>

      <TextInput
        style={LoginStyles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={(text) => setPaswword(text)}
      ></TextInput>

      <TextInput
        style={LoginStyles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <Button title="Iniciar Sesion" onPress={LoginByUser} />

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={LoginStyles.button}
      >
        <Text style={LoginStyles.text}>No tienes cuenta?</Text>

      </TouchableOpacity>

    </View>
  )
}


export default LoginScreen
