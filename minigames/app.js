import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Nomes from './src/Nomes';
import Velha from './src/Velha';
import Homepage from './src/Homepage';
import Palavra from './src/Palavra';
import Forca from './src/Forca';
import Memoria from './src/Memoria';
import Usememo from './src/usememo';
import Home2 from './src/Home2';
export default function App() {
  //criar estado para fazer o controle do textinput, use state atualiza ao chamar a função                     
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [palavra, setPalavra] = useState("");
  const [dica, setDica] = useState("");
  const [id, setId] = useState(0);
  const [screen, setScreen] = useState("Home2");
  const checkScreen = (checkScreen) => checkScreen === screen;
  const setPalavraForca = (_palavra) => {
    setPalavra(_palavra)
  }
  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1)
    setPlayer2(nome2)
  }
  const trocarId = (_id) => {
    setId(_id);
  }
  const setDicaForca = (_dica)=>{
    setDica(_dica)
  }
  const changeScreen = (newScreen) => setScreen(newScreen);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("Homepage") && <Homepage changeScreen={changeScreen} mudarId={trocarId}/>}
      {checkScreen("Nomes") && <Nomes mudarNomeJogadores={setJogadores} changeScreen={changeScreen} idJogo={id} />}
      {checkScreen("Velha") && <Velha nomeJogador1={player1} nomeJogador2={player2} changeScreen={changeScreen}  />}
      {checkScreen("Palavra") && <Palavra changeScreen={changeScreen} mudarPalavra={setPalavraForca} setDicaForca={setDicaForca}/>}
      {checkScreen("Forca") && <Forca changeScreen={changeScreen} palavraForca={palavra} dicaForca={dica}  />}
      {checkScreen("Memoria") && <Memoria changeScreen={changeScreen} nomeJogador1={player1} nomeJogador2={player2}/>}
      {checkScreen("usememo") && <Usememo/>}
      {checkScreen("Home2") && <Home2/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// function getArray(state){
//   return [state, "Henrique"];

// }
//   const [nome,sobrenome] = getArray("Bruno");
// function mystate(_state){
//   let state = _state;

//   function setState(value){
//     state = value;
//   }
//   return [state, setState];

// }
//   const [nome,setNome] = mystate("Bruno");

//fazendo a desconstrução do array
