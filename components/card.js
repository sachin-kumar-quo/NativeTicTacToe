import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
const circle = require('../assets/circle.jpeg')
const cross = require('../assets/cross.jpeg')

const Card = ({cardItem}) => {
    if(cardItem != ""){
        return(
            <Image style = {styles.cardImage} source={cardItem === 'circle' ? circle : cross}/>
        )
    }else{
        return(
            <Image style = {styles.cardImage} source={require('../assets/react.jpeg')}/>
        )
    }
    
}
export default Card;


const styles = StyleSheet.create({
    cardImage : {
        margin:5,
        width:110,
        height:120,
    }
})