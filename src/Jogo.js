import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Pressable, Text } from "react-native";
//spread é adicionar um valor de array em outro: arr3 = [...arr1,...arr2]



export default function Jogo(props) {
  const [rodada, setRodada] = useState("O");
  const trocarRodada = () => {
    rodada == "X" ? setRodada("O") : setRodada("X");
  };
  const handleClick = (event) => {
    props.changeScreen("Nomes");
  };
  const [space, setSpace] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);

  useEffect(()=>{
    validarVitoria();
    trocarRodada();
  },[space])

  const handleClickButtons = (x, y) => {
    if (space[x][y] == " ") {
      const matriz = [[...space[0]],[...space[1]],[...space[2]]];
      matriz[x][y] = rodada;
      setSpace(matriz);
    }
  };
  const validarVitoria = () => {
    for (let i = 0; i < space.length; i++) {
      if (
        space[i][0] == rodada &&
        space[i][1] == rodada &&
        space[i][2] == rodada
      ) {//linha
        vitoria();
      }
      if (
        space[0][i] == rodada &&
        space[1][i] == rodada &&
        space[2][i] == rodada){//coluna
        vitoria();
      }
    }
    if (
      space[0][0] == rodada &&
      space[1][1] == rodada &&
      space[2][2] == rodada
    ) {
      //verificar diagonal 1
      vitoria();
    }
    if (
      space[0][2] == rodada &&
      space[1][1] == rodada &&
      space[2][0] == rodada
    ) {
      //verificar diagonal 2
      vitoria();
    }
    let cont = 0;
    for (let i = 0; i < space.length; i++) {
      for (let j = 0; j < space.length; j++) {
        if (space[i][j] != " ") {
          cont++;
        }
      }
    }
    if (cont == 9) {
      alert("Deu velha");
      props.changeScreen("Nomes");
    }
  };
  const vitoria = () => {
    if (rodada == "X") {
      alert("Parabéns " + props.nomeJogador1);
    } else {
      alert("Parabéns " + props.nomeJogador2);
    }
    props.changeScreen("Nomes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(0, 0);
          }}
        >
          <Text style={styles.text}>{space[0][0]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(0, 1);
          }}
        >
          <Text style={styles.text}>{space[0][1]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(0, 2);
          }}
        >
          <Text style={styles.text}>{space[0][2]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(1, 0);
          }}
        >
          <Text style={styles.text}>{space[1][0]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(1, 1);
          }}
        >
          <Text style={styles.text}>{space[1][1]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(1, 2);
          }}
        >
          <Text style={styles.text}>{space[1][2]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(2, 0);
          }}
        >
          <Text style={styles.text}>{space[2][0]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(2, 1);
          }}
        >
          <Text style={styles.text}>{space[2][1]}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            handleClickButtons(2, 2);
          }}
        >
          <Text style={styles.text}>{space[2][2]}</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.voltar}
        onPress={() => {
          handleClick();
        }}
      >
        <Text style={styles.textVoltar}>Voltar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  voltar: {
    backgroundColor: "#41B3FF",
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
  },
  textVoltar: {
    color: "white",
    fontSize: 30,
  },
});
