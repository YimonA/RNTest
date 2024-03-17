import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Box = ({children,style}) => {
  return (
    <View style={[styles.box,style]}>
<Text style={styles.text}> {children}</Text></View>
  )
}

export default Box

const styles = StyleSheet.create({
    box: {
      backgroundColor:"#fff",
      padding:20,
      width:50,
      height:50,
   },
   text:{
  fontSize:24,
  fontWeight:"bold",
  textAlign:"center",
  color:"white"
   }
  });
  

