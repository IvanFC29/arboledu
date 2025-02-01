import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import Encabezado from "../Encabezado";

const InicioRec: React.FC = () => {
    const [imagenSelect, setImagenSelect] = useState<string | null>(null);
    const [resultado, setResultado] = useState<any | null>(null);

    const handleImageSelect = async () => {
        // Pedir permisos para acceder a la galería
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Se necesita permiso para acceder a la galería');
            return;
        }

        // Abrir el selector de imágenes
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            setImagenSelect(result.assets[0].uri);
        }
    };

    const handleIdentify = async () => {
        if (!imagenSelect) return;
    
        try {
            const response = await fetch(imagenSelect);  // Obtener datos de la imagen
            const blob = await response.blob();          // Convertir a Blob
            const file = new File([blob], "image.jpg", { type: "image/jpeg" });  // Crear archivo
    
            const formData = new FormData();
            formData.append("images", file);  // Enviar como archivo
            formData.append("organs", "leaf");  
    
            const url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&nb-results=10&lang=en&api-key=2b10gQ2QsfjIjJgrsNmXUoBbe`;
    
            const res = await axios.post(url, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
    
            console.log("Tipo de res.data:", typeof res.data);  // 👀 Verifica el tipo en consola
            console.log("Contenido de res.data:", res.data);    // 🔍 Ver el contenido exacto

            setResultado(JSON.stringify(res.data));
        } catch (error) {
            console.error(error);
            setResultado('Error al identificar la planta');
        }
    };
    

    return (
      <View style={styles.scrollcontainer}>
        <Encabezado />
        <View style={styles.container}>
            <Text style={styles.parrafo}>Selecciona una imagen para identificar la planta 🌱</Text>
            
            {/* Botón para seleccionar imagen */}
            <TouchableOpacity style={styles.button} onPress={handleImageSelect}>
                <Text style={styles.buttonText}>Seleccionar imagen</Text>
            </TouchableOpacity>

            {/* Mostrar imagen seleccionada */}
            {imagenSelect && <Image source={{ uri: imagenSelect }} style={styles.imagen} />}

            {/* Botón para identificar */}
            <TouchableOpacity style={styles.button} onPress={handleIdentify}>
                <Text style={styles.buttonText}>Identificar</Text>
            </TouchableOpacity>

            <View style={styles.divresultado}>
                <Text style={styles.parrafo}>🌿 <Text style={{ fontWeight: "bold" }}>Planta identificada:</Text> {resultado}</Text>
                
            </View>
        </View>
    </View>  
    );
};

const styles = StyleSheet.create({
    scrollcontainer: { flex: 1, overflow: 'scroll'},
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    parrafo: { fontSize: 16, textAlign: 'center', marginVertical: 10, backgroundColor: '#ffe599', },
    button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, marginVertical: 10 },
    buttonText: { color: 'white', fontSize: 16 },
    imagen: { width: 200, height: 200, marginVertical: 10 },
    divresultado:{
        padding: 10
    }
});

export default InicioRec;
