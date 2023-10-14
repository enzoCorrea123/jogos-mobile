import { useState } from "react";
import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
export default function Palavra(props) {
  const [palavra, setPalavra] = useState("");
  const [dica, setDica] = useState(props.dicaForca);
  const handleClick = () => {
    if (palavra.length > 2 && palavra.match(/^[A-z\s]+$/g)) {
      props.mudarPalavra(palavra.toUpperCase());    
      props.changeScreen("Forca");
      props.setDicaForca(dica.toUpperCase());
    }else {
      alert("Erro: palavra necessita ter mais de dois caracteres, apenas letras e espaço!");
    }
    
  };
  const backhome = ()=>{
    props.changeScreen("Homepage");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite a palavra da forca:</Text>

      <TextInput style={styles.input} onChangeText={setPalavra}></TextInput>
      <Text style={styles.label}>Digite uma dica:</Text>
      <TextInput style={styles.input} onChangeText={setDica}></TextInput>
      <View style={styles.flexButton}>
        <Pressable style={styles.button} onPress={()=>{handleClick()}}><Text>Confirmar</Text></Pressable>
        <Pressable style={styles.button} onPress={()=>{backhome()}}><Text>Voltar</Text></Pressable>
      </View>
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
  flexButton:{
    flexDirection: "row"
  },
  button: {
    width: 100,
    height: 35,
    margin: 10,
    backgroundColor: "#41B3FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1
    shadowColor: "black",
    shadowRadius: 5
  },
  textButton: {
    color: "white",
    fontSize: 18,
  },
  label:{
    fontSize: 20
  }
});
