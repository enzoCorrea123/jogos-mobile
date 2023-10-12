import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

const images = [
    require("/assets/flags/africa.png"),
    require("/assets/flags/albania.png"),
    require("/assets/flags/brasil.png"),
    require("/assets/flags/alemanha.png"),
    require("/assets/flags/andorra.png"),
    require("/assets/flags/angola.png"),
    require("/assets/flags/belize.png"),
    require("/assets/flags/elSalvador.png"),
    require("/assets/flags/brunei.png"),
    require("/assets/flags/estonia.png"),
    require("/assets/flags/grecia.png"),
    require("/assets/flags/jordania.png"),
    require("/assets/flags/barbados.png"),
    require("/assets/flags/libano.png"),
    require("/assets/flags/libia.png"),
    require("/assets/flags/liechtenstein.png"),
    require("/assets/flags/marrocos.png"),
    require("/assets/flags/montenegro.png"),
    require("/assets/flags/nauru.png"),
    require("/assets/flags/panama.png"),
    require("/assets/flags/sanMarino.png"),
    require("/assets/flags/serraleoa.png"),
    require("/assets/flags/somalia.png"),
    require("/assets/flags/vanuatu.png"),
    require("/assets/flags/china.png"),
    require("/assets/flags/chile.png"),
    require("/assets/flags/coreiaDoSul.png"),
    require("/assets/flags/gana.png"),
    require("/assets/flags/malta.png")
  ];

export default function Memoria(props) {
  const [player1, setPlayer1] = useState(props.nomeJogador1);
  const [player2, setPlayer2] = useState(props.nomeJogador2);
  
//   const [imgCountry, setImgCountry] = useState(images[0]);

  const [countries, setCounries] = useState([
    "Africa",
    "Albania",
    "Brasil",
    "Alemanha",
    "Andorra",
    "Angola",
    "Belize",
    "El Salvador",
    "Brunei",
    "Estonia",
    "Grécia",
    "Jordânia",
    "Barbados",
    "Libano",
    "Libia",
    "Liechtenstein",
    "Marrocos",
    "Montenegro",
    "Nauru",
    "Panama",
    "San Marino",
    "Serra Leoa",
    "Somalia",
    "Vanuatu",
    "China",
    "Chile",
    "Coreia do Sul",
    "Gana",
    "Malta",
  ]);
  // const [virada, setVirada] = useState([
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  //   [false, false, false, false, false, false],
  // ])
  const [virada,setVirada] = useState(true)
  const [cards, setCards] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    
  ]);
  const [selectedCards, setSelectedCards] = useState([]);
  cards.forEach((row) => {
    let random;
    let nomeOuBandeira = false;

    for (let i = 0; i < 6; i++) {
      if (nomeOuBandeira) {
        random = Math.floor(Math.random() * countries.length);
        row[i] = countries[random];
        countries.splice(random, 1);
        nomeOuBandeira = false;

      } else {
        random = Math.floor(Math.random() * images.length);
        row[i] = images[random];
        images.splice(random, 1);
        nomeOuBandeira = true;
      }
    }
    return cards;
  });


  useEffect(() => {
    
  }, []);
  const handleClickPosition = (rowId, columnId) => {
    // let cartaVirada = [[...virada[0]],[...virada[1]],[...virada[2]],[...virada[3]],[...virada[4]],[...virada[5]],[...virada[6]],[...virada[7]],[...virada[8]],[...virada[9]]];
    // console.log(cartaVirada)
    // cartaVirada[rowId][columnId] = true;
    // setVirada(cartaVirada);
    
    // if (selectedCards.length === 2) {
    //   // Evita mais de 2 cartas selecionadas ao mesmo tempo
    //   return;
    // };

    // setSelectedCards([...selectedCards, index]);

    // if (selectedCards.length === 1) {
    //   // Se já tiver uma carta virada, verifica se há uma correspondência
    // }
  };
  const getStylesCard = (virada)=>{
    return {
      display: virada ?  "flex" : "none"
    }
      
    
  }
  return (
    <View style={styles.container}>
      {cards.map((row, rowId) => {
        return (
          <View style={styles.rows} key={rowId}>
            {row.map((column, columnId) => {
              return (
                <Pressable
                  key={`${rowId}${columnId}${column}`}
                  onPress={() => handleClickPosition(rowId, columnId)}
                >
                  <View style={styles.card}>
                    {(column.length > 20) ? <Image style={{...styles.image,...getStylesCard(virada)}} source={column} /> : <Text style={{...styles.txt, ...getStylesCard(virada)}}>{column}</Text>}
                  </View>
                </Pressable>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "gray"
  },
  card: {
    width: 70,
    height: 50,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  image: {
    width: 70,
    height: 50,
  },
  txt: {
    fontSize: 15,
  },
  displayFlex:{
    display: "flex",
    
  },
  displayNone:{
    display: "none"
  }
});
