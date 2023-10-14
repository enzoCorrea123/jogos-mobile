
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
export default function Nomes(props) {
  //criar estado para fazer o controle do textinput, use state atualiza ao chamar a função                     
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const handleClick = ()=>{
    props.mudarNomeJogadores(player1,player2);//props são todas as propriedades da tag como se fosse um objeto
    if(props.idJogo == 1){
      props.changeScreen("Velha");
    }else if(props.idJogo == 3){
      props.changeScreen("Memoria");
    }
    
  }
  const backhome = ()=>{
    props.changeScreen("Homepage");
  }

  return (
    <View style={styles.container}>
      <Text>Jogador 1</Text>
      <TextInput style={styles.input} onChangeText={setPlayer1} value={player1}></TextInput>

      <Text>Jogador 2</Text>
      <TextInput style={styles.input} onChangeText={setPlayer2} value={player2}></TextInput>
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
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
  }
});
// function getArray(state){
//   return [state, "Henrique"];

// }
//   const [nome,sobrenome] = getArray("Bruno");
function mystate(_state){
  let state = _state;

  function setState(value){
    state = value;
  }
  return [state, setState];

}
  const [nome,setNome] = mystate("Bruno");

//fazendo a desconstrução do array
