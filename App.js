import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

const gore = () =>{
  return (
    <ScrollView>
        <View>
          <Text 
            style={{
              fontsize: 45,
              alignSelf: "center",
              color:"green",
            }}
            >
              oiiii
            </Text>
          <Image source={{url:"https://i.pinimg.com/474x/8e/a3/b5/8ea3b5d795e1efa22d4609a3d0f7b339.jpg"}}> </Image> 
        </View>
    </ScrollView>
  )};

//  export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Teste</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//});
