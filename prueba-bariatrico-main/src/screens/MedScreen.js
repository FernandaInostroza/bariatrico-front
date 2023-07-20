import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard, StatusBar } from 'react-native';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(0);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height from cm to meters
    

    if (weightInKg && heightInM) {
      const bmiValue = weightInKg / (heightInM * heightInM);
      setBMI(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setBMICategory('Bajo peso');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBMICategory('Peso normal');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBMICategory('Sobrepeso');
      } else {
        setBMICategory('Obesidad');
      }
    }
  };

  const handleWeightChange = (text) => {
    setWeight(text.replace(/[^0-9.]/g, ''));
  };

  const handleHeightChange = (text) => {
    setHeight(text.replace(/[^0-9.]/g, ''));
  };

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.container} activeOpacity={1} onPress={handleKeyboardDismiss}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Peso (kg)"
          value={weight}
          onChangeText={handleWeightChange}
        />
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Altura (cm)"
          value={height}
          onChangeText={handleHeightChange}
        />
        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Tu IMC:</Text>
          <Text style={styles.result}>{bmi}</Text>
          <Text style={styles.resultCategory}>{bmiCategory}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  resultCategory: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BMICalculator;

