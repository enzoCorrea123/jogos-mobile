import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
export default function Memoria(props) {
  const [player1, setPlayer1] = useState(props.nomeJogador1);
  const [player2, setPlayer2] = useState(props.nomeJogador2);
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [emptyCards, setEmptyCards] = useState([
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""]]);
  const [fullCards, setfullCards] = useState([]);
  const [emojis, setEmoji] = useState(["🚗","🚌", "🚓", "🚑", "🛴", "🚲", "🚀", "✈️", "🛶", "🗿", "🏰", "🏝", "⏰", 
  "☎️", "🗡", "💉", "🎈", "🎻", "🎺", "🎮", "⚽️", "🏈", "🎧", "🏓", "🌻"]);
  const [selectedCards, setSelectedCards] = useState([]);
  const shuffledCards = ()=>{
    const shuffle = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    setfullCards(shuffle);
  }
  const changePlayer = ()=>{
    (currentPlayer == player1) ? setCurrentPlayer(player2) : setCurrentPlayer(player1);
  }

  const checkPlay = ()=>{
    if(selectedCards[0] == selectedCards[1]){
      if(currentPlayer == player1){
        setScore1(score1++);//terminar checkplay
      }else{
        setScore2(score2++);
      }

    }else{
      setTimeout(()=>{

    },1000)
    }
  }
  useEffect(() => {
    shuffledCards();
  }, []);
  useEffect(() => {
    if(selectedCards.length == 2){
      checkPlay();
      
    }
  }, []);
  const handleClickPosition = (rowId, columnId) => {
   const cards1 = [[...emptyCards[0]],[...emptyCards[1]],[...emptyCards[2]],[...emptyCards[3]],[...emptyCards[4]],[...emptyCards[5]],[...emptyCards[6]],[...emptyCards[7]],[...emptyCards[8]],[...emptyCards[9]]];
   const cards2 = [...fullCards];
   const selected = [...selectedCards];

   if(cards1[rowId][columnId] != ""){
     return;
   }else{
     if(selected.length<2){
        cards1[rowId][columnId] = cards2[rowId*5 + columnId]; 
        selected.push(cards1[rowId][columnId]);
        setEmptyCards([...cards1]);
        setSelectedCards(selected);
     }else{
       checkPlay();
     }
      
   }

   
  };
  return (
    <View style={styles.container}>
      <Text>É a vez de {currentPlayer}</Text>
      {emptyCards.map((row, rowId) => {
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
    justifyContent: "center"
  },
  rows:{
    flexDirection: "row"
  },
  card: {
    width: 70,
    height: 70,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  txt: {
    fontSize: 30,
  }
});
