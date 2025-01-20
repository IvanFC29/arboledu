import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importar pantallas
import Home from '@/components/Home';
import InicioCalc from '@/components/calculator/InicioCalc';

// Definir los tipos de navegación
export type RootStackParamList = {
  Home: undefined;
  Calculadora: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Inicio" }} />
      <Stack.Screen name="Calculadora" component={InicioCalc} options={{ title: "Calculadora Ecológica" }} />
    </Stack.Navigator>
  );
}
