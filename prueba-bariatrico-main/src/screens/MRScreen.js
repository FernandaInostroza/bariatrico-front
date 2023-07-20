import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const MedicalRecord = () => {
  const [medicalRecords, setMedicalRecords] = useState([
    { id: '1', title: 'Médico Cirujano', text: '' },
    { id: '2', title: 'Psicólogo', text: '' },
    { id: '3', title: 'Nutricionista', text: '' },
    { id: '4', title: 'Nutriólogo', text: '' },
    { id: '5', title: 'Paciente', text: '' },
  ]);

  const handleTextChange = (id, value) => {
    setMedicalRecords((prevRecords) =>
      prevRecords.map((record) => {
        if (record.id === id) {
          return { ...record, text: value };
        }
        return record;
      })
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Expedientes Medicos</Text>
        {medicalRecords.map((record) => (
          <View key={record.id} style={styles.recordContainer}>
            <Text style={styles.recordTitle}>{record.title}</Text>
            <TextInput
              style={styles.recordText}
              placeholder="Ingrese información aquí"
              value={record.text}
              onChangeText={(value) => handleTextChange(record.id, value)}
              multiline
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recordText: {
    fontSize: 16,
    minHeight: 100,
  },
});

export default MedicalRecord;


