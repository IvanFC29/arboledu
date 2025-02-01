import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Formulario = ({onCalcular}: {onCalcular: (especie: string, edad: number, altura: number, diametroTronco: number,frecuenciaRiego: string, plagasEnfermedades: boolean)=> void}) => {
    // Datos del árbol a agregar
    const [especie, setEspecie] = useState('');
    const [edad, setEdad] = useState('');
    const [altura, setAltura] = useState('');
    const [diametroTronco, setDiametroTronco] = useState('');
    const [frecuenciaRiego, setFrecuenciaRiego] = useState('Diario');
    const [plagasEnfermedades, setPlagasEnfermedades] = useState(false);

    const handleSubmit = () => {
      const nombreEspecie = especie; 
      const numEdad = parseInt(edad);
      const numAltura = parseFloat(altura);
      const numDiametro = parseFloat(diametroTronco);
      const laFrecRiego = frecuenciaRiego;
      const tienePlagas = plagasEnfermedades;

      if(nombreEspecie && !isNaN(numEdad) && !isNaN(numAltura) && !isNaN(numDiametro) && laFrecRiego){ 
        onCalcular(nombreEspecie, numEdad, numAltura, numDiametro, laFrecRiego, tienePlagas);
      }else{
        alert("Por favor ingrese datos correctos");
      }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.label}>  ¿Cuál es el nombre de tu planta/arbol? </Text>
            <TextInput style={styles.input} value={especie} onChangeText={setEspecie} placeholder="Ej. Pino"/>

            <Text style={styles.label}>¿Por cuántos años lo tienes?</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={edad} onChangeText={setEdad} placeholder="Ej. 3 (años)" />

            <Text style={styles.label}>¿Cuán alto es tu planta/arbol?</Text>
            <TextInput style={styles.input}keyboardType="numeric"  value={altura} onChangeText={setAltura} placeholder="Ej. 12 (m)" />

            <Text style={styles.label}>¿Cuál es el diametro del tronco de tu planta/arbol?</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={diametroTronco} onChangeText={setDiametroTronco} placeholder="Grosor aproximado Ej. 30 (cm)" />
        
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>     
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      overflow: "scroll"
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: "#4CAF50",
      padding: 10,
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
    },
  });
export default Formulario;