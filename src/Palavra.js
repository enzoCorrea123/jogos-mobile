import { useState } from "react";
import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
export default function Palavra(props) {
  const [palavra, setPalavra] = useState("");
  const [dica, setDica] = useState(props.dicaForca);
  const handleCLick = () => {
    props.mudarPalavra(palavra);    
    props.changeScreen("Forca");
    props.setDicaForca(dica)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a palavra da forca:</Text>

      <TextInput style={styles.input} onChangeText={setPalavra}></TextInput>
      <Text style={styles.label}>Digite uma dica:</Text>
      <TextInput style={styles.input} onChangeText={setDica}></TextInput>
      <Pressable style={styles.button} onPress={handleCLick}>
        <Text style={styles.textButton}>Confirmar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 20
  },
  button: {
    width: 90,
    height: 30,
    margin: 10,
    backgroundColor: "#41B3FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontSize: 18,
  },
  label:{
    fontSize: 20
  }
});
