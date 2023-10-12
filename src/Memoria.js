import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";

export default function Memoria(props) {
  const [player1, setPlayer1] = useState(props.nomeJogador1);
  const [player2, setPlayer2] = useState(props.nomeJogador2);
  const [cards, setCards] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
    
  ]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [emojis, setEmoji] = useState(["🇩🇰","🇦🇬", "🇦🇷", "🇦🇲", "🇦🇼", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇲", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇮🇴", "🇻🇬", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇰🇭", "🇨🇲", "🇨🇦", "🇮🇨", "🇨🇻", "🇧🇶", "🇰🇾", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇽", "🇨🇨", "🇨🇴", "🇰🇲", "🇨🇬", "🇨🇩", "🇨🇰", "🇨🇷", "🇨🇮", "🇭🇷", "🇨🇺"]);
  cards.forEach((row) => {
    let random;
    for (let i = 0; i < 5; i++) {
        random = Math.floor(Math.random() * emojis.length);
        row[i] = emojis[random];
        emojis.splice(random, 1);
      
    }
    return cards;
  });


  useEffect(() => {
    
  }, []);
  const handleClickPosition = (rowId, columnId) => {
   
  };
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
                    <Text style={styles.txt}>{column}</Text>
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
  txt: {
    fontSize: 15,
  }
});
