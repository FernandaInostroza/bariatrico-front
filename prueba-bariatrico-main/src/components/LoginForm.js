import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rut, setRut] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión
    console.log('Iniciar sesión:', email, password);
  };

  const handleRegistration = () => {
    // Lógica de registro
    console.log('Registrarse:', email, password, confirmPassword);
  };

  const handleFormSubmit = () => {
    // Lógica para guardar los datos del formulario
    console.log('Nombre:', name);
    console.log('Apellido:', lastName);
    console.log('RUT:', rut);
    console.log('Edad:', age);
    console.log('Sexo:', gender);
    console.log('Teléfono:', phone);
    console.log('Peso:', weight);
    console.log('Estatura:', height);
  };

  const renderLoginForm = () => {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Inicio de sesión</Text>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsRegistered(true)}>
                <Text style={styles.switchText}>¿No tienes una cuenta? Regístrate aquí</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  const renderRegistrationForm = () => {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Registro</Text>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                secureTextEntry
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
              />
              <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsRegistered(false)}>
                <Text style={styles.switchText}>¿Ya tienes una cuenta? Inicia sesión aquí</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  const renderDataForm = () => {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>
              <Text style={styles.title}>Datos relevantes</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={text => setName(text)}
                value={name}
              />
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                onChangeText={text => setLastName(text)}
                value={lastName}
              />
              <TextInput
                style={styles.input}
                placeholder="RUT"
                onChangeText={text => setRut(text)}
                value={rut}
              />
              <TextInput
                style={styles.input}
                placeholder="Edad"
                keyboardType="numeric"
                onChangeText={text => setAge(text)}
                value={age}
              />
              <TextInput
                style={styles.input}
                placeholder="Sexo"
                onChangeText={text => setGender(text)}
                value={gender}
              />
              <TextInput
                style={styles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                onChangeText={text => setPhone(text)}
                value={phone}
              />
              <TextInput
                style={styles.input}
                placeholder="Peso"
                keyboardType="numeric"
                onChangeText={text => setWeight(text)}
                value={weight}
              />
              <TextInput
                style={styles.input}
                placeholder="Estatura"
                keyboardType="numeric"
                onChangeText={text => setHeight(text)}
                value={height}
              />
              <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      {isRegistered ? renderRegistrationForm() : renderLoginForm()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    //backgroundColor: '#15212B',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default LoginScreen;