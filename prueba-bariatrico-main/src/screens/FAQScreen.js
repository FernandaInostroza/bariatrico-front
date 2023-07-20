import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
//import { StatusBar } from 'expo-status-bar';

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/faqs/all')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al cargar los datos');
        }
      })
      .then((data) => {
        if (data.ok) {
          setFaqs(data.faqs.map((faq) => ({ ...faq, isOpen: false })));
        } else {
          throw new Error('Error al cargar los datos');
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const toggleAnswer = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Preguntas Frecuentes</Text>
        {faqs.map((faq) => (
          <TouchableOpacity
            key={faq.id}
            style={[styles.faqContainer, faq.isOpen && styles.faqContainerOpen]}
            onPress={() => toggleAnswer(faq.id)}
          >
            <Text style={styles.question}>{faq.question}</Text>
            {faq.isOpen && <Text style={styles.answer}>{faq.answer}</Text>}
          </TouchableOpacity>
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
    paddingBottom: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  faqContainerOpen: {
    backgroundColor: '#EAEAEA',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQList;