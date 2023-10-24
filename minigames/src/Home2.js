import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Usememo from './usememo';
export default function pagina1(props) {
    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="usememo" component={Usememo} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}