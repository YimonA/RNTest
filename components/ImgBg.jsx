import { StyleSheet, Text, View,ImageBackground } from 'react-native';
   const image={uri:'https://legacy.reactjs.org/logo-og.png'};

const ImgBg = () => {
  return (
    <View>
<ImageBackground source={image} resizeMode="cover" style={styles.imgContainer}>
      <Text style={{color:"red",fontSize:24,textAlign:"center"}} >Inside</Text>
    </ImageBackground>
        </View>
  )
}

export default ImgBg

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgContainer:{
      width:200,
      height:200
    }
  });