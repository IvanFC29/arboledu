import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)/index";

import Encabezado from '@/components/Encabezado'; 

const Home: React.FC = () => {

  const navegacion = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();
    return (
        <View style={styles.container}>
          <Encabezado />
          {/* Funciones */}
          <View style={styles.buttonsContainer}>
            <View style={styles.div}>  
              <Image source={require('@/assets/images/secciones/img-reconocedor-plantas.png')} 
                style={styles.image}
              />
              <Text style={styles.subtitle}>
                Identifica las plantas por medio una imagen
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navegacion.navigate("Reconocedor")}>¿Qué planta es?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.div}>
              <Image source={require('@/assets/images/secciones/img-calculador-ecologico.png')} 
                style={styles.image}
              />
              <Text style={styles.subtitle}>
                ¿Conoces cuanto de oxigeno aportas al medio ambiente con las plantas de tu hogar?
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navegacion.navigate("Calculadora")}>Calculadora ecologica</Text>
              </TouchableOpacity>
            </View>   
            <View style={styles.div}>
              <Image source={require('@/assets/images/secciones/img-almanaque.png')} 
                style={styles.image}
              />
              <Text style={styles.subtitle}>
                Recibe recomendaciones para el cuidado de tus plantas
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navegacion.navigate("Almanaque")}>Cuidado de Plantas</Text>
              </TouchableOpacity>
            </View>          
          </View>
        </View>
    );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll"
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  div: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    maxWidth: 400
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    wordWrap: 'break-word',
  },
  button: {
    backgroundColor: '#68a357',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
    
export default Home;
    
    
    
    
    
    
    
    
    