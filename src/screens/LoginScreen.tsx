import React from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({navigation}:any) => {
    // Estado para almacenar el nombre de usuario y la contraseña
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        // Aquí puedes agregar la lógica de autenticación
        // Validar campos vacíos
        if (username === '' || password === '') {
            Alert.alert('Por favor, completa todos los campos.');
            return;
        }
        // Simular autenticación exitosa
        // Aquí puedes agregar la lógica para autenticar al usuario con un if
        if (username === 'admin' && password === 'admin') {
            Alert.alert('Inicio de sesión exitoso');   
             // Por ahora, simplemente navegamos a la pantalla de inicio
            navigation.navigate('Home', { user: { name: username } });
        } else {
            Alert.alert('Usuario o contraseña incorrectos');
            return;
        }
    };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>Bienvenido de nuevo</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    successText: {
        color: 'green',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
});



