import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Encabezado from '@/components/Encabezado'; 
import Formulario from './Formulario';
import { useState } from 'react';
import { calcularImpacto } from '@/assets/utils/Calculos';

const InicioCalc: React.FC = () => {
  const [resultado, setResultado] = useState<{ CO2compensado: number; O2_generado: number} | null>(null);

  const handleCalcular = (numArbloles: number, tiempoAnios: number) => {
    const res = calcularImpacto(numArbloles, tiempoAnios);
    setResultado(res);
  }

    return (
        <View style={styles.container}>
          <Encabezado />
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/secciones/img-calculador-ecologico.png')} 
              style={styles.image}
            />
            <Text style={styles.subtitle}>
                Hola, sabes cuanto de oxigeno aportas al medio ambiente?
                Con la calculadora ecológica puedes averiguarlo 
                Responde a unas preguntas y sabrás el resultado
            </Text>
            <Formulario onCalcular={handleCalcular}/>

            {resultado && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>🌱 CO₂ compensado: {resultado.CO2compensado.toFixed(2)} kg</Text>
                <Text style={styles.resultText}>💨 Oxígeno generado: {resultado.O2_generado.toFixed(2)} kg</Text>
              </View>
            )}
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
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    textAlign: "center",
  },
});
    
export default InicioCalc;
    
    
    
    
    
    
    
    
    