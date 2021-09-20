import React from 'react'
import { View, Text, StatusBar, ScrollView } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
export default function profileprogress() {
    return (
        <ScrollView contentContainerStyle={{flex:1}}>
             <StatusBar barStyle="light-content" backgroundColor="#F24A4E" />
            <View style={{ backgroundColor: "#ED3237" }}>
               
                <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 14 }}>
                    <Ionicons style={{ position: "absolute", left: 5, top: 18 }} color="white" size={28} name="chevron-back-outline" />
                    <Text style={{ color: "white", marginHorizontal: 60, fontSize: 20, fontFamily: "Mulish-Bold" }}>Profile Progress</Text>

                </View>
            </View>
            <View style={{backgroundColor:"#CE1313",height:"30%",borderBottomLeftRadius:25,borderBottomRightRadius:25}}>
             <Text>ggug</Text>
            </View>
        </ScrollView>
    )
}
