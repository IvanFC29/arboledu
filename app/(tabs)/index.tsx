import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importar pantallas
import Home from '@/components/Home';
import InicioCalc from '@/components/calculator/InicioCalc';
import InicioRec from '@/components/recognizer/InicioRec';
import InicioAlm from '@/components/almanaque/InicioAlm';

// Definir los tipos de navegación
export type RootStackParamList = {
  Home: undefined;
  Calculadora: undefined;
  Reconocedor: undefined;
  Almanaque: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
      <Stack.Screen name="Calculadora" component={InicioCalc} options={{ title: "Calculadora Ecológica" }} />
      <Stack.Screen name="Reconocedor" component={InicioRec} options={{title: "¿Qué planta es?"}}/>
      <Stack.Screen name="Almanaque" component={InicioAlm} options={{title: "Cuidado de Plantas"}}/>
    </Stack.Navigator>
  );
}
