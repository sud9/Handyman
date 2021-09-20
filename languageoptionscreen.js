import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet,FlatList } from 'react-native'
import { Checkbox } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Button } from 'react-native-paper';
export default function languageoptionscreen() {
    const [checked, setChecked] = useState(false);
    
const DATA = [
    {
      id: 1,
      Lang: 'English',
    },
    {
      id:2,
      Lang: 'हिंदी',
    },
    {
      id: 3,
    Lang: 'Hinglish',
    },
    {
        id: 4,
       Lang: 'मराठी',
      },
      {
        id: 5,
      Lang: 'ભાષા',
      },
      {
        id: 6,
      Lang: 'ഭാഷ',
      },
  ];
    return (
        <View>
            <StatusBar barStyle="light-content" backgroundColor='#161414' />
            <View style={{ backgroundColor: "#000000", flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ position: "absolute", padding: 15, left: -10 }}>
                    <Ionicons color="white" size={32} name="chevron-back-outline" />
                </View>
                <Text style={styles.txt}>Select Language</Text>
            </View>


            <FlatList
           data={DATA}
           keyExtractor={item=>item.id}
           renderItem ={({item})=>(
            <View style={{ borderBottomWidth: 0.8, marginTop: 5, borderBottomColor: "#EEEEEE",paddingVertical:20 }}>
            <View style={{ flexDirection: "row",justifyContent:"flex-end"  }}>
                <Text style={styles.txt2}>{item.Lang}</Text>
               <View style={{marginRight:30}}>
                <Checkbox
                    
                    color="#03B7FF"
                    uncheckedColor="#707070"
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
               </View>
            </View>
        </View>

           )}
           /> 

<Button uppercase={false} style={{ marginTop: 50, backgroundColor: "#ED3237", width: "90%", alignSelf: "center", borderRadius: 10, elevation: 3 }} labelStyle={{ padding: 5, fontFamily: "Mulish-Bold", fontSize: 18, padding: 6 }} mode="contained" onPress={() => { }}>Continue</Button>
           
            
        </View>
    )
}
const styles = StyleSheet.create({
    txt: {
        textAlign: "center",
        fontSize: 21,
        color: "white",
        padding: 15,
        fontFamily: "Mulish-Bold",
        alignSelf: "center",
      
    },
    txt2: {
        fontSize: 17,
        fontFamily: "Mulish-SemiBold",
        color: "#000000",
        marginTop:6,position:"absolute",left:30
    }
})