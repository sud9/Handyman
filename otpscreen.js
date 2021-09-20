import React from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Button } from 'react-native-paper';

export default function otpscreen() {


    return (
        <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
                <View style={{ backgroundColor: "#000000", flex: 1 }}>
                    <StatusBar barStyle="light-content" backgroundColor='#000000' />
                    <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }}>
                        <Ionicons style={{ position: "absolute", left: 5 }} color="white" size={32} name="chevron-back-outline" />
                        <Text style={{ color: "white", marginHorizontal: 60, fontSize: 18, fontFamily: "Mulish-Regular" }}>Enter Your Verification Code</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 50, flex: 1 }}>
                        <Image source={require("../assets/images/group395.png")} />
                        <Text style={{ color: "white", fontFamily: "Mulish-Bold", fontSize: 20, marginTop: 25 }}>OTP Verification</Text>
                        <Text style={{ color: "white", fontFamily: "Mulish-Bold", fontSize: 14, marginTop: 25 }}>We sent Verification Code </Text>
                        <Text style={{ color: "white", fontFamily: "Mulish-Bold", fontSize: 14, }}>on +91-89955966966</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                            <TextInput keyboardType="number-pad" maxLength={1} style={styles.otpinput} />
                            <TextInput keyboardType="number-pad" maxLength={1} style={styles.otpinput} />
                            <TextInput keyboardType="number-pad" maxLength={1} style={styles.otpinput} />
                            <TextInput keyboardType="number-pad" maxLength={1} style={styles.otpinput} />
                        </View>
                        <Text style={{ color: "white", marginTop: 50, fontSize: 18, fontFamily: "Mulish-Regular" }}>00:59</Text>
                        <View style={{ flexDirection: "row", marginTop: 30 }}>
                            <TouchableOpacity activeOpacity={0.6}>
                            <Text style={{ color: "white", textDecorationLine: "underline", fontSize: 15, fontFamily: "Mulish-Regular" }}>Didn't receive the code?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6}>
                            <Text style={{ color: "red", textDecorationLine: "underline", fontSize: 15, fontFamily: "Mulish-Regular", marginLeft: 2, fontWeight: "900" }}>Resend now</Text>
                            </TouchableOpacity>
                        </View>
                        <Button uppercase={false} style={{ marginTop: 50, backgroundColor: "#ED3237", width: "90%", alignSelf: "center", borderRadius: 10, elevation: 3 }} labelStyle={{ padding: 5, fontFamily: "Mulish-Bold", fontSize: 18, padding: 6 }} mode="contained" onPress={() => { }}>Confirm</Button>
                        <TouchableOpacity activeOpacity={0.6}>
                        <Text style={{ color: "white", textDecorationLine: "underline", fontSize: 15, fontFamily: "Mulish-Regular", marginTop: 40 }}>change Mobile Number?</Text>
                        </TouchableOpacity>
                   </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    otpinput: {
        borderWidth: 1,
        borderColor: "#2A2A2A",
        borderRadius: 12,
        width: 72,
        height: 60,
        fontSize: 20,
        marginHorizontal: 5,
        marginTop: 30, backgroundColor: "#2A2A2A",
        color: "white",
        fontSize: 20,
        fontFamily: "Mulish-Bold",
        textAlign: "center"
    }
})
