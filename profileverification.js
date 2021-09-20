import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default class profileverification extends Component {
    
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{}} alwaysBounceVertical={true}  >
                <ImageBackground source={require('../assets/images/group355.png')} resizeMode="cover" style={styles.slide}>
                    <Image style={{ marginTop: 20 }} source={require("../assets/images/Group363.png")} />
                    <Image style={{ marginTop: 30 }} source={require("../assets/images/group400.png")} />
                    <Text style={{ fontSize: 30, fontFamily: "Mulish-ExtraBold", color: "#CE1313", marginTop: 20 }}>Welcome!</Text>
                    <Text style={{ fontSize: 12, fontFamily: "Mulish-Bold" }}>WE ARE A MEMBERS ONLY PLATFORM.</Text>

                    <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 0.6, borderColor: "#BCBCBC", width: "90%", marginTop: 50, borderRadius: 10, padding: 10, backgroundColor: "#FFFFFF" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 40, height: 40, backgroundColor: "red", borderRadius: 20, paddingTop: 8, marginTop: 10 }}>
                                <Image style={{ alignSelf: "center" }} source={require("../assets/images/deal.png")} />
                            </View>

                            <Text style={{ padding: 15, fontSize: 18, fontFamily: "Mulish-Regular", color: "#101010", fontWeight: "900" }}>Why Join Us ?</Text>
                        </View>

                    </TouchableOpacity>




                    <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 0.6, borderColor: "#BCBCBC", width: "90%", marginTop: 20, borderRadius: 10, padding: 10, backgroundColor: "#FFFFFF" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 40, height: 40, backgroundColor: "#00A7EE", borderRadius: 20, paddingTop: 8, marginTop: 10 }}>
                                <Image style={{ alignSelf: "center" }} source={require("../assets/images/crown.png")} />
                            </View>

                            <Text style={{ padding: 15, fontSize: 18, fontFamily: "Mulish-Regular", color: "#101010", fontWeight: "900" }}>Membership criteria? ?</Text>
                        </View>

                    </TouchableOpacity>



                    <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 0.6, borderColor: "#BCBCBC", width: "90%", marginTop: 20, borderRadius: 10, padding: 10, backgroundColor: "#FFFFFF" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 40, height: 40, backgroundColor: "#FF8600", borderRadius: 20, paddingTop: 8, marginTop: 10 }}>
                                <Image style={{ alignSelf: "center" }} source={require("../assets/images/time.png")} />
                            </View>

                            <Text style={{ padding: 15, fontSize: 18, fontFamily: "Mulish-Regular", color: "#101010", fontWeight: "900" }}>Membership process??</Text>
                        </View>

                    </TouchableOpacity>

                    <View style={{ marginTop: 30, flex: 1, flexDirection: "row" }}>
                        <View style={{ borderWidth: 0.5, backgroundColor: "#FADFE0", width: "45%", padding: 20, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, flexDirection: "row", justifyContent: "space-around", borderColor: "#FADFE0" }}>
                            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#ffff", marginVertical: -5 }}>
                                <Ionicons style={{ alignItems: "center", paddingHorizontal: 10, paddingVertical: 10 }} size={20} color="red" name="call" />
                            </View>

                            <Text style={{ fontFamily: "Mulish-Bold", color: "#000000", fontSize: 18, marginLeft: 35 }}>Contact Us</Text>
                        </View>

                        <View style={{ borderWidth: 0.5, backgroundColor: "#F7B2B5", width: "45%", padding: 20, borderTopRightRadius: 15, borderBottomRightRadius: 15, flexDirection: "row", justifyContent: "space-around", borderColor: "#F7B2B5" }}>
                            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#ffff", paddingHorizontal: 10, paddingVertical: 10, marginVertical: -5 }}>
                                <Image style={{}} source={require("../assets/images/icon.png")} />
                            </View>

                            <Text style={{ fontFamily: "Mulish-Bold", color: "#000000", fontSize: 16, marginRight: 20, fontSize: 18 }}>FAQ</Text>
                        </View>
                    </View>

                    <TouchableOpacity  activeOpacity={0.6} style={{ borderWidth: 0.5, marginTop: 50, width: "90%", backgroundColor: "#DFE3F8", borderColor: "#B8C1F1", borderRadius: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            <View style={{ backgroundColor: "#455CD5", width: 35, height: 35, borderRadius: 35 / 2, marginTop: 10 }}>
                                <MaterialCommunityIcons style={{ textAlign: "center", paddingVertical: 6 }} color="white" name="information-variant" size={23} />
                            </View>

                            <Text style={{ color: "#000000", fontFamily: "Mulish-Regular", fontWeight: "900", padding: 15, fontSize: 15, marginRight: 12 }}>Your Profile is Under Verification</Text>
                        </View>

                    </TouchableOpacity>
                </ImageBackground>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        height: "100%"

    },

})


