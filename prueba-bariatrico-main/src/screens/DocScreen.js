import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const DoctorRecord = () => {
    const [doctorRecords, setDoctorRecords] = useState([
      { id: '1', name: 'Paciente 1', rut:'11.111.111-1', telefono:'123456789', text: '' },
    ]);

    const handleTextChange = (id, value) => {
        setDoctorRecords((prevRecords) =>
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
            {doctorRecords.map((record) => (
              <View key={record.id} style={styles.recordContainer}>
                <Text style={styles.recordName}>{record.name}</Text>
                <Text style={styles.recordRut}>{record.rut}</Text>
                <Text style={styles.recordTelefono}>{record.telefono}</Text>
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
    
    export default DoctorRecord;
