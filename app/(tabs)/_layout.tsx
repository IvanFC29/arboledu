import React from 'react';
import { Slot } from 'expo-router';

import { View, StyleSheet } from 'react-native';


export default function TabLayout() {

    return (
      <View style={styles.container}>
        {/* Aquí se renderizan las páginas hijas */}
        <Slot />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Puedes personalizar el color de fondo.
    padding: 16,
  },
});