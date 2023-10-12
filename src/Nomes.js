
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
export default function Nomes(props) {
  //criar estado para fazer o controle do textinput, use state atualiza ao chamar a função                     
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const handleClick = (event)=>{
    props.mudarNomeJogadores(player1,player2);//props são todas as propriedades da tag como se fosse um objeto
    if(props.idJogo == 1){
      props.changeScreen("Velha");
    }else if(props.idJogo == 3){
      props.changeScreen("Memoria");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text>Jogador 1</Text>
      <TextInput style={styles.input} placeholder='Player1' onChangeText={setPlayer1} value={player1}></TextInput>

      <Text>Jogador 2</Text>
      <TextInput style={styles.input} placeholder='Player2' onChangeText={setPlayer2} value={player2}></TextInput>
      <Button title="Confirmar" onPress={handleClick}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  },
  input: {
    width: "100%",
    height: 20,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black"
  },
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
