import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Formulario = ({onCalcular}: {onCalcular: (numArboles: number, tiempoAnios: number)=> void}) => {
    const [numArboles, setNumArboles] = useState<string>("");
    const [tiempoAnios, setTiempoAnios] = useState<string>("");

    const handleSubmit = () => {
        const numArbolesNum = parseInt(numArboles);
        const tiempoAniosNum = parseFloat(tiempoAnios);

        if(!isNaN(numArbolesNum) && !isNaN(tiempoAniosNum)){
            onCalcular(numArbolesNum, tiempoAniosNum);
        }else{
            alert("Por favor ingrese valores numericos");
        }
    };

    return(
        <View>
            <Text> ¿Cuántos árboles/plantas has cuidado o plantado? </Text>
            <TextInput style={styles.input} keyboardType="numeric" value={numArboles} onChangeText={setNumArboles} placeholder="Ej. 22"/>

            <Text style={styles.label}>¿Por cuántos años? (Ejemplo: 1.5 años)</Text>
            <TextInput style={styles.input} keyboardType="numeric" value={tiempoAnios} onChangeText={setTiempoAnios} placeholder="Ejemplo: 2.5" />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
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