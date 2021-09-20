import React from 'react'
import { View, Image, StyleSheet, StatusBar } from 'react-native'

export default function splashscreen({navigation}) {
    setTimeout(()=>{
        navigation.navigate('Home')
      },1000);
    return (
       
         <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor='#000000'/>
             <Image source={require("../assets/images/logo.png")}/>
         </View>
      
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#000000"

    }
})