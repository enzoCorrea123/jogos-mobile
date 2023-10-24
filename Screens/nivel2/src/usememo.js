import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useMemo } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function UseMemo() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("Alterou valor de contador");
  }, [contador]);

  useEffect(() => {
    console.log("Alterou valor de contador 2");
  }, [contador2]);

  const array = useMemo(() => {
    console.log("Passou pelo use Memo");
    const itens = [...Array(contador)];
    return (
      <View>
        {
          itens.map((item, i) => {
            console.log("Passou dentro do map, index", i);
            return (
              <View key={i}>
                <Text>
                  Item {i + 1}
                </Text>
              </View>
            )
          })
      }
      </View>
    )
  }, [contador]);


  return (
    <View style={styles.container}>
      <Text>
        Contador: {contador}
      </Text>
      <Button title='Click' onPress={() => setContador(contador + 1)}/>
      <Text>
        Contador: {contador2}
      </Text>
      <Button title='Click' onPress={() => setContador2(contador2 + 1)}/>
      {array}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});