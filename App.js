import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    //<View style={{backgroundColor:"plum",flex:1}}></View>
    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray', flex: 1 }}>Box 1</Box>
    //   <Box style={{ backgroundColor: 'green', flex: 1 }}>Box 2</Box>
    //   <Box style={{ backgroundColor: 'blue', flex: 3 }}>Box 3</Box>
    //   <Box style={{ backgroundColor: 'yellow' }}>Box 4</Box>
    //   <Box style={{ backgroundColor: 'lightgreen' }}>Box 5</Box>
    //   <Box style={{ backgroundColor: 'lightblue' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: 'purple' }}>Box 7</Box>
    // </View>

    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray'}}>Box 1</Box>
    //   <Box style={{ backgroundColor: 'green' }}>Box 2</Box>
    //   <Box style={{ backgroundColor: 'blue' }}>Box 3</Box>
    // </View>

    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray', alignSelf: 'flex-start' }}>
    //     Box 1
    //   </Box>
    //   <Box style={{ backgroundColor: 'green', alignSelf: 'flex-end' }}>
    //     Box 2
    //   </Box>
    //   <Box style={{ backgroundColor: 'blue', alignSelf: 'center' }}>Box 3</Box>
    //   <Box style={{ backgroundColor: 'yellow', alignSelf: 'auto' }}>Box 4</Box>
    //   <Box style={{ backgroundColor: 'lightgreen', alignSelf: 'stretch' }}>
    //     Box 5
    //   </Box>
    //   <Box style={{ backgroundColor: 'lightblue' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: 'purple' }}>Box 7</Box>
    // </View>

    //  <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray'}}>Box 1</Box>
    //   <Box style={{ backgroundColor: 'green'}}>Box 2</Box>
    //   <Box style={{ backgroundColor: 'blue'}}>Box 3</Box>
    //   <Box style={{ backgroundColor: 'yellow' }}>Box 4</Box>
    //   <Box style={{ backgroundColor: 'lightgreen' }}>Box 5</Box>
    //   <Box style={{ backgroundColor: 'lightblue' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: 'purple' }}>Box 7</Box>
    // </View>

    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray', flexShrink: 1 }}>Box 1 Shrink</Box>
    //   <Box style={{ backgroundColor: 'green', flexShrink: 1 }}>
    //     Box 2 Shrink
    //   </Box>
    // </View>

    //   <View style={styles.container}>
    //   <Box style={{ backgroundColor: 'gray'}}>Box 1</Box>
    //   <Box style={{ backgroundColor: 'green'}}>Box 2</Box>
    //   <Box style={{ backgroundColor: 'blue'}}>Box 3</Box>
    //   <Box style={{ backgroundColor: 'yellow' ,flexGlow:1}}>Box 4</Box>
    //   <Box style={{ backgroundColor: 'lightgreen' }}>Box 5</Box>
    //   <Box style={{ backgroundColor: 'lightblue' }}>Box 6</Box>
    //   <Box style={{ backgroundColor: 'purple' }}>Box 7</Box>
    // </View>

    <View style={styles.container}>
      <Box style={{ backgroundColor: 'gray',top:75,left:75}}>Box 1</Box>
      <Box style={{ backgroundColor: 'green'}}>Box 2</Box>
      <Box style={{ backgroundColor: 'blue'}}>Box 3</Box>
      <Box style={{ backgroundColor: 'yellow' ,position:"absolute",top:75,left:75}}>Box 4</Box>
      <Box style={{ backgroundColor: 'lightgreen' }}>Box 5</Box>
      <Box style={{ backgroundColor: 'lightblue' }}>Box 6</Box>
      <Box style={{ backgroundColor: 'purple' }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // "row-reverse","column-reverse"
    justifyContent:"flex-end",
    //"flex-start","flex-end","center","space-between","space-around","space-wvenly"
    alignItems:"center",
//"flex-start","flex-end","center","stretch","baseline"

// alignSelf: "flex-start","flex-end","center","auto"

alignContent:"center",
// "flex-start","flex-end","center","space-between","space-around",

flexWrap:"wrap"
// "wrap","nowrap","wrap-reverse"

rowGap: 30,
    columnGap: 10,
    height: 300,
    marginTop: 50,
    borderWidth: 6,
    borderColor: 'red',
  },
});
