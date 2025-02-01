import { View, Text, StyleSheet, Image } from 'react-native';
import Encabezado from '@/components/Encabezado'; 
import Formulario from './Formulario';
import { useState } from 'react';
import { calcularImpacto } from '@/assets/utils/Calculos';

const InicioCalc: React.FC = () => {
  const [resultado, setResultado] = useState<{ CO2compensado: number; O2_generado: number; especie:string; edad:number} | null>(null);

  const handleCalcular = (especie: string, edad: number, altura: number, diametroTronco: number,frecuenciaRiego: string, plagasEnfermedades: boolean) => {
    const res = calcularImpacto(especie, edad, altura, diametroTronco, frecuenciaRiego, plagasEnfermedades);
    setResultado(res);
  }

  return (
    <View style={styles.container}>
      <Encabezado />
      <View style={styles.imageContainer}>
        <Text style={styles.subtitle}>
          *Los resultados son en base a un modelo de produccion de oxigeno *
        </Text>
        <Formulario onCalcular={handleCalcular}/>
        {resultado && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>🌱 El arbol {resultado.especie} en {resultado.edad} años acumulo en todo su follaje un total de {resultado.CO2compensado.toFixed(2)} tn de carbono</Text>
            <Text style={styles.resultText}>💨 El arbol {resultado.especie} esta produciendo aproximadamente {resultado.O2_generado.toFixed(2)} kg de oxigeno</Text>
          </View>
        )}
      </View>
    </View>
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll"
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#ffe599',
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
    
    
    
    
    
    
    
    
    