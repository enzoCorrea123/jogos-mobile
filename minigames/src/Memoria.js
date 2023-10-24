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
  const backHome = () => {
        props.changeScreen("Homepage");
    
}
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
        setScore1(score1+1);
      }else{
        setScore2(score2+1);
        
      }
      setSelectedCards([]);

    }else{
      setTimeout(()=>{
        const cards1 = [[...emptyCards[0]],[...emptyCards[1]],[...emptyCards[2]],[...emptyCards[3]],[...emptyCards[4]],[...emptyCards[5]],[...emptyCards[6]],[...emptyCards[7]],[...emptyCards[8]],[...emptyCards[9]]];
        cards1.map((card)=>{
          for(let i=0;i<card.length;i++){
            if(card[i] == selectedCards[0] || card[i] == selectedCards[1]){
              card[i] = "";
            }
          }
          
          
        })
        changePlayer();
        setEmptyCards([...cards1]);
        setSelectedCards([]);
      },1000)
    }
  }
  const checkVictory = ()=>{
    let fullBoard = true;
    emptyCards.forEach((card)=>{
      for(let i=0;i<card.length;i++){
        if(card[i] == ""){
          return fullBoard = false;
        }
      }
    })
    if(fullBoard){
      setTimeout(()=>{
        (score1>score2)? alert(`${player1} venceu!`) : (score2>score1)? alert(`${player2} venceu!`) : alert(`${player1} X ${player2}`);
      },100)
      backHome()
      
    }
    
  }
  useEffect(() => {
    shuffledCards();
  }, []);
  useEffect(() => {
    if(selectedCards.length == 2){
      checkPlay();
      
    }
  }, [selectedCards]);

  useEffect(()=>{
    checkVictory()
  },[emptyCards])
  const handleClickPosition = (rowId, columnId) => {
   const cards1 = [[...emptyCards[0]],[...emptyCards[1]],[...emptyCards[2]],[...emptyCards[3]],[...emptyCards[4]],[...emptyCards[5]],[...emptyCards[6]],[...emptyCards[7]],[...emptyCards[8]],[...emptyCards[9]]];
   const cards2 = [...fullCards];
   const selected = [...selectedCards];
   console.log(cards2)
   if(cards1[rowId][columnId] != ""){
     return;
   }else{
        cards1[rowId][columnId] = cards2[rowId*5 + columnId]; 
        selected.push(cards1[rowId][columnId]);
        setEmptyCards([...cards1]);
        setSelectedCards(selected);
   }

   
  };
  return (
    <View style={styles.container}>
      <Text style={styles.txt2}>{player1}:{score1}</Text>
      <Text style={styles.txt2}>{player2}:{score2}</Text>
      <Text style={styles.txt2}>É a vez de {currentPlayer}</Text>
      
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
      <Pressable style={styles.button} onPress={()=>{backHome()}}><Text>Voltar</Text></Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  },
  txt2:{
    fontSize: 20
  },
  button: {
    width: 70,
    height: 25,
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
