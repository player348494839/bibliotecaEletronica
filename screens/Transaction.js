import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default class TransactionScreen extends React.Component {
    render() {
        return (
            <View style={styles.conteiner}> 
                <Text style={styles.text}>
                    Tela de transação.
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    conteiner:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#5653d4"  
    },
    text:{
        color:"white", fontSize:30}
})