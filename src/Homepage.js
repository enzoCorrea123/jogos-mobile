import React, { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
export default function Homepage(props) {
    const handleClick = (id)=>{
        if(id == 1){
            props.mudarId(id)
            props.changeScreen("Nomes")
        }else if(id == 2){
            props.changeScreen("Palavra")
        }else{
            props.mudarId(id)
            props.changeScreen("Nomes")
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Mini Jogos</Text>

      <Pressable style={styles.button} onPress={()=>{handleClick(1)}}>
        <Text style={styles.textButton}>Jogo da Velha</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={()=>{handleClick(2)}} >
        <Text style={styles.textButton}>Jogo da Forca</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={()=>{handleClick(3)}}>
        <Text style={styles.textButton}>Jogo da Memória</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 50,
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
  textTitle:{
    fontSize: 30,
    paddingBottom: 20
  },
  textButton:{
    fontSize: 15
  }
});
