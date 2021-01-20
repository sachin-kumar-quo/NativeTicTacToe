import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import Card from './components/card';

const App= () => {
  const box = new Array(9).fill("");
  const [winMessage,setWinMessage] = useState("");
  const [isCircle,setIsCircle] = useState(false);
  const [filled,setFilled] = useState(false);
  const [items,setItems] = useState(box);
  
  useEffect(()=>{
    isWin();
  },[winMessage,items])

  const changeItem = (itemNumber) =>{
    if(winMessage){
      return ;
    }
    if(items[itemNumber]===""){
      setItems({...items,[itemNumber]:isCircle ? 'circle' : 'cross'})
      setIsCircle(!isCircle);
    }else{
      setFilled(true);
      setTimeout(()=>{
        setFilled(false);
      },3000);
    }
    console.log(items)
  }

  const resetGame = () => {
    setItems(box);
    setIsCircle(false);
    setWinMessage("");
    console.log("Game Resetted")
  }

  const onFilledMessage = () =>{
    if(filled){
      return(
        <View style={{alignSelf:"center"}}>
          <Text style={{fontSize:30,color:'red'}}>
            Already Choosen!!, Please choose other One !! 
          </Text>
        </View>
      )
    }
  }

  const isWin = () =>{
    if(
      items[0] === items[1] &&
      items[0] === items[2] &&
      items[0] !== ""
      ){
        setWinMessage(`${items[0]} wins the game !! `);
      }
    if(
       items[3] === items[4] &&
       items[4] === items[5] &&
       items[3] !== ""
      ){
       setWinMessage(`${items[3]} wins the game !! `);
      }
    if(
       items[6] === items[7] &&
       items[7] === items[8] &&
       items[6] !== ""
      ){
       setWinMessage(`${items[6]} wins the game !! `);
      }
    if(
       items[0] === items[3] &&
       items[3] === items[6] &&
       items[0] !== ""
      ){
       setWinMessage(`${items[0]} wins the game !! `);
      } 
    if(
       items[1] === items[4] &&
       items[4] === items[7] &&
       items[1] !== ""
      ){
       setWinMessage(`${items[1]} wins the game !! `);
      }
    if(
       items[2] === items[5] &&
       items[5] === items[8] &&
       items[2] !== ""
      ){
       setWinMessage(`${items[2]} wins the game !! `);
      }
    if(
       items[0] === items[4] &&
       items[4] === items[8] &&
       items[0] !== ""
      ){
       setWinMessage(`${items[0]} wins the game !! `);
      }
    if(
       items[2] === items[4] &&
       items[4] === items[6] &&
       items[2] !== ""
      ){
       setWinMessage(`${items[2]} wins the game !! `);
      }
  }

  const createCard = (item) =>{
    return(
      <Card cardItem={item} />
    )
  }

  const winDisplay = () =>{
    if(winMessage){
      Alert.alert("Game Over",winMessage);
      return (
        <View style={{alignSelf:"center"}}>
          <Text style={{fontSize:50,color:"orange"}}>
            {winMessage}
          </Text>
        </View>
      )
    }
  }

  


  return (
    <SafeAreaView style={styles.body} >
      <View style={{alignSelf:'center'}}>
        <Text style = {{fontSize:30,fontWeight:'bold',color:"#ff7300"}}>Native Tic-tac-Toe</Text>
      </View>
      
      <View style={styles.boxView}>
        {box.map((item,index)=>(
          <TouchableOpacity onPress={()=>changeItem(index)} key={index}>
            {createCard(items[index])}
          </TouchableOpacity>
        ))}
      </View>
      {winDisplay()}
      {onFilledMessage()}
      <View style={{alignSelf:'center',marginVertical:20,backgroundColor:"#6ecfff",borderRadius:10,borderColor:"red",borderWidth:2}}>
        <Text style={{fontSize:40}}>its {isCircle ? 'circle' : 'cross'} turn</Text>
      </View>
      <View style={{backgroundColor:"#ff7300",marginHorizontal:30,borderRadius:10,borderColor:"red",borderWidth:2}}>
        <Button style={{color:"blue"}} title="Reset Game" onPress={resetGame} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#bdfff7',
  },
  boxView:{
    flex:1,
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  }
});

export default App;
