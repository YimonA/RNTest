import { View, Text } from 'react-native'
import React from 'react'

const Pressable = () => {
  return (
    <Pressable onPress={()=>console.log("hello")}>
    <Text>Hi</Text>
    </Pressable>
  )
}

export default Pressable

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnContainer:{
      width:200,
      height:200
    }
  });