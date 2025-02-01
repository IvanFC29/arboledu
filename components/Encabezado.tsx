import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Image } from "react-native";

const Encabezado = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('@/assets/images/icon-192x192.png')} 
                style={styles.image}
            />
            <Text style={styles.title}>Plataforma Educativa para el Cuidado de Árboles y Plantas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',  
        alignItems: 'center',  
        marginBottom: 16,
        backgroundColor: '#b6d7a8',
        padding: 7,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2d572c',
    },
    image: {
        width: 70,
        height: 70,
        marginBottom: 2,
        marginRight: 20,
    }
});
        
export default Encabezado;
        
        
        
        
        
        