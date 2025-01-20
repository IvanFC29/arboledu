import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Image } from "react-native";

const Encabezado = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Plataforma Educativa para el Cuidado de Árboles y Plantas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 16,
        backgroundColor: '#f0f8e8',
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2d572c',
    },
    image: {
        width: 80,
        height: 80,
        marginBottom: 2,
    }
});
        
export default Encabezado;
        
        
        
        
        
        