import React, { useState } from 'react'
import { Alert, View, TextInput, Button, StyleSheet } from 'react-native'
import { RegisterStyles } from '../styles/Register.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const RegisterScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegistration = async() => {
    if (!username || !email || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    try {

      //Obetener los datos de AsyncStorage
      const data =  await AsyncStorage.getItem("users")

      //Parsear los datos
      const users = data ? JSON.parse(data) : [];

      //Verificar si el usuario ya existe por medio de map
      const existingUser = users.map((user: any) => user.username === username || user.email === email);

      if (existingUser) {
        Alert.alert("Error", "El usuario ya existe");
        return;
      }

      //Agregar el nuevo usuario al array de usuarios
      const newUser = { username, email, password };
      users.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(users));

      console.log( await AsyncStorage.getItem("users") );
      
      //Redireccionar al login
      Alert.alert("Exito", "Usuario registrado con exito");
      navigation.navigate("Login");

    }
    catch (error) {
        Alert.alert("Error", `${error}`)
    }

  }

  return (
    <View style={RegisterStyles.container}>
      <TextInput
        style={RegisterStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={RegisterStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={RegisterStyles.input}
        placeholder="Password"
        secureTextEntry={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Registrarse" onPress={handleRegistration} />
    
    </View>
  )
}

export default RegisterScreen
