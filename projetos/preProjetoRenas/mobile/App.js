import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login';
import Home from './src/screens/home';
import Motorista from './src/screens/motorista';
import Veiculo from './src/screens/veiculo';
import Operacao from './src/screens/operacao';
import Manutencao from './src/screens/manutencao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Motorista" component={Motorista} />
        <Stack.Screen name="Veículo" component={Veiculo} /> 
        <Stack.Screen name="Operação" component={Operacao} /> 
        <Stack.Screen name="Manutenção" component={Manutencao} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}