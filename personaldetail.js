import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Button } from 'react-native-paper';
export default function personaldetail() {
    return (
        <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor='#000000' />
            <Text style={styles.headertxt}>Personal Details</Text>
            <Text style={styles.txt2}>Tell us a bit about yourself.</Text>
            <View>
                <View style={{marginTop:30}}>
                    <Text style={styles.txt3}>Full Name</Text>
                    <TextInput style={styles.txtinput} placeholderTextColor="white" placeholder="Alex"/>
                </View>

                <View style={{marginTop:10}}>
                    <Text style={styles.txt3}>Pin Code</Text>
                    <TextInput style={styles.txtinput} placeholderTextColor="white" placeholder="201301"/>
                    <TextInput style={{ marginTop:20,...styles.txtinput }} placeholderTextColor="#A7A7A7" placeholder="Noida Uttar Pradesh"/>
                </View>
                <Button uppercase={false} style={{ marginTop: 55, backgroundColor: "#ED3237",alignSelf:"center", borderRadius: 15, elevation: 3, width:"90%",marginRight:8 }} labelStyle={{ padding: 8, fontFamily: "Mulish-Bold", fontSize: 18, padding: 6 }} mode="contained" onPress={() => { }}>Continue</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  headertxt:{
      textAlign:"center",
      fontFamily:"Mulish-Bold",
      fontSize:20,
      color:"white",
      padding:10
  },
  txt2:{
    textAlign:"center",
    fontFamily:"Mulish-Regular",
    fontSize:16,
    color:"white",
    marginTop:5
  },
  container:{
      backgroundColor:"#000000",
      flex:1
  },
  txt3:{
      color:"white",
      fontFamily:"Mulish-Bold",
      fontSize:16,
      marginLeft:10
  },
  txtinput:{
    backgroundColor:"#2A2A2A",
    margin:8,
    padding:-20,
    borderWidth:0.5,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    height:50,
    width:"93%",
    fontFamily:"Mulish-SemiBold"
  }
})