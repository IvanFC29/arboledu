import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList} from 'react-native';
import Encabezado from "../Encabezado";

const InicioAlm: React.FC = () => {
    const [nombreArbol, setNombreArbol] = useState('');
    const [plantas, setPlantas] = useState<{nombre: string; recomendacion?:string}[]>([]);
    const [mostrarRecomendaciones, setMostrarRecomendaciones] = useState(false);

    /** Funcion para agregar una planta nueva */
    const agregarPlanta = () => {
        if (nombreArbol.trim() !== '') {
            setPlantas([...plantas, {nombre: nombreArbol}]);
            setNombreArbol('');
        }
    };

    // Funcion para generar recomendaciones 
    const generarRecomendaciones = () => {
        const listaPlantas = plantas.map((planta) => ({
            ...planta,
            recomendacion: 'Riego 2 veces por semana recomedado',
        }));
        setPlantas(listaPlantas);
        setMostrarRecomendaciones(true);
    };

    return(
        <View style={styles.scrollContainer}>
            <Encabezado />
            <View style={styles.container}>
                <View>
                    <Text> Ingresa los nombres de tus plantas para ver recomendaciones </Text>
                    <TextInput style={styles.input} value={nombreArbol} onChangeText={setNombreArbol} placeholder="Ej. Limon"/>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={agregarPlanta}>Agregar planta</Text>
                    </TouchableOpacity>
                </View>
                {/* Tabla de Plantas */}
                <View style={styles.table}>
                    <View style={[styles.row, styles.header]}>
                        <Text style={[styles.cell, styles.headerText]}>Plantas</Text>
                        {mostrarRecomendaciones && (
                            <Text style={[styles.cell , styles.headerText]}>Recomendaciones</Text>
                        )}
                    </View>
                    <FlatList
                        data={plantas}    
                        keyExtractor={(item, index) => index.toString()}
                        renderItem = {({item}) => (
                            <View style={styles.row}>  
                                <Text style={styles.cell}>{item.nombre}</Text>
                                {mostrarRecomendaciones && (
                                    <Text style={styles.cell}>{item.recomendacion}</Text>
                                )}
                            </View> 
                        )}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={generarRecomendaciones}>Ver Recomendaciones</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: { flex: 1, overflow: 'scroll'},
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, marginVertical: 10, width: 200, textAlign: 'center'},
    buttonText: { color: 'white', fontSize: 16 },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
    table:{
        borderWidth: 1,
        borderColor: '#ccc',
        width: 500
    },
    row:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell:{
        flex: 1,
        textAlign: 'center',
        padding: 10
    },
    header:{
        backgroundColor: 'gray',
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white'
    },
});
export default InicioAlm;