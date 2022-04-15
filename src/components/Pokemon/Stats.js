import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {map, capitalize } from "lodash"

export default function Stats(props) {
    const {stats}= props;
    
    const barStyles =(num)=>{// funcion que usa el numero del sate para rellenar la barra 
        const color = num > 49 ? "#00ac17" :"#ff3e3e" // si el numero es mayor  que 49 el color es verde y sino es rojo
        return{
            backgroundColor: color,
            width:`${num}%`,
            height:5,
            borderRadius:20,
        }
    }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item,index)=>(
          <View key={index} style={styles.block}>
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name) }</Text>
              </View>
              <View style={styles.blockInfo}>
                  <Text style={styles.number}>{item.base_stat}</Text>
                  <View style={styles.bgBar}>
                    <View style={barStyles(item.base_stat)}/>
                  </View>
              </View>
          </View>
      ))}
    </View>
  );
  
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:20,
        marginTop:40,
        marginBottom:80,

    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        paddingBottom:5,
    },
    block:{
        flexDirection:"row",
        paddingVertical:5,
    },
    blockTitle:{
        width:"30%",
        
    },
    statName:{
        fontSize:12,
        color:"#6b6b6b"
    },
    blockInfo:{
        width:"70%",
        flexDirection:"row",
        alignItems:"center",
    },
    number:{
        width: "12%",
        fontSize:12,
    },
    bgBar:{
        backgroundColor:"#dedede",
        width:"88%",
        height:5,
        borderRadius:20,
        overflow: "hidden",
    },
    
})