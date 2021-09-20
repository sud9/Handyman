import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
export default function Referearn() {
    return (
        <View>
        <View style={{backgroundColor:"#ED3237"}}>
            <StatusBar barStyle="light-content" backgroundColor="#F24A4E"/>
            <View style={{ flexDirection: "row", justifyContent: "space-around",padding:14 }}>
                <Ionicons style={{ position: "absolute", left: 5,top:18 }} color="white" size={28} name="chevron-back-outline" />
                <Text style={{ color: "white", marginHorizontal: 60, fontSize: 20, fontFamily: "Mulish-Bold" }}>Refer and earn</Text>
                <EvilIcons style={{position:"absolute",right:40,top:16}} size={31} color="white" name="bell"/>
                <Feather size={22} style={{position:"absolute",right:10,color:"white",top:16}} name="more-vertical"/>
            </View>

            
        </View>
        <View style={{marginTop:80,backgroundColor:"#F2F2F2",height:"80%",borderRadius:30,marginHorizontal:20,alignContent:"center"}}>
            <View style={{alignItems:"center",marginTop:30}}>
            <Image source={require("../assets/images/group428.png")}/>
            </View>
            <View style={{marginTop:20}}>
              <Text style={{textAlign:"center",fontSize:18,fontWeight:"500",fontFamily:"Mulish-SemiBold"}}>Share your promo code with a friend </Text>
              <Text style={{textAlign:"center",fontSize:18,fontWeight:"500",fontFamily:"Mulish-SemiBold"}}>and you both get ₹500</Text>
              </View>


              <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={{marginTop:50}}>
                        <View style={{backgroundColor:"#F2E4E4",width:50,height:50,borderRadius:25,alignItems:"center",marginLeft:20}}>
                        <AntDesign color="#FF0000" style={{top:12,paddingHorizontal:10}} size={25} name="sharealt"/>
                        </View>
                         
                          <Text style={{color:"#101010",fontFamily:"Mulish-Bold",fontSize:16}}>Share with Friends</Text>
                    </View>

                    <View style={{marginTop:50}}>
                        <View style={{backgroundColor:"#F2E4E4",width:50,height:50,borderRadius:25,alignItems:"center",marginLeft:20}}>
                        <Entypo color="#FF0000" style={{top:12,paddingHorizontal:10}} size={25} name="attachment"/>
                        </View>
                         
                          <Text style={{color:"#101010",fontFamily:"Mulish-Bold",fontSize:16,left:20}}>Copy</Text>
                    </View>
            </View>

            </View>

            
        </View>
    )
}
