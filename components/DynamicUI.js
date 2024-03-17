import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'

const DynamicUI = () => {
    const windowWidth=useWindowDimensions().width;
    const windowHeight=useWindowDimensions().height;
  return (
    <View style={styles.container}>
        <View style={{
        width:windowWidth>500 ? "70%":"90%",
        height:windowHeight>600 ? "60%" :"90%",
    }}>
      <Text style={{fontSize:windowWidth>500 ? 50 :24,}}>DynamicUI</Text>
      </View>
    </View>
  )
}

export default DynamicUI

const windowWidth=Dimensions.get("window").width;
const windowHeight=Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"plum"
    },
//     box:{
//         width:windowWidth>500 ? "70%":"90%",
//         height:windowHeight>600 ? "60%" :"90%",
//     },
//     text:{
// fontSize:windowWidth>500 ? 50 :24,
//     }
})