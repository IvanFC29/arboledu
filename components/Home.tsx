import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)/index";

import Encabezado from '@/components/Encabezado'; 

const Home: React.FC = () => {

  const navegacion = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();
    return (
        <View style={styles.container}>
          <Encabezado />
          {/* Imagen central - carousel */}
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/carousel/slide1.png')} 
              style={styles.image}
            />
            <Text style={styles.subtitle}>Aprende temas educativos respecto a las plantas y árboles</Text>
          </View>
    
          {/* Botones */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>¿Qué planta es?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Biblioteca</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => navegacion.navigate("Calculadora")}>Calculadora ecologica</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    
    
    
    
    
    
    
    
    