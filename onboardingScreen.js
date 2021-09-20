import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, StatusBar} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button } from 'react-native-paper';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Discover. Explore. Join',
    text2:"Transform your business & ",
    txt3 :"Personal Style",
    image: require('../assets/images/group399.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Learn, Develop, Grow',
    text2:"Get trained by technical ",
    txt3 :"expert of Industry",
    image: require('../assets/images/group399.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'Make A Mark,Get involved',
    text2:"Pledge to Bethechange ",
    txt3 :"Customer Happiness #1",
    image: require('../assets/images/group399.png'),
    backgroundColor: '#22bcb5',
  }
];
export default class onboardingScreen extends Component {
  _renderItem = ({ item }) => {
    return (
      
        <ImageBackground source={require('../assets/images/group355.png')} resizeMode="cover" style={styles.slide}>
        
        <Image style={{ marginTop: 20,height:35,width:100}} source={require("../assets/images/Group363.png")} />

        <Image style={{ marginTop: 60 }} source={item.image} />
        <Text style={{ fontFamily: "Mulish-Bold", fontSize: 25, marginTop: 15 }}>{item.text}</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.txt1}>{item.text2}</Text>
          <Text style={{
            fontFamily: "Mulish-Bold",
            fontWeight: "900",
            fontSize: 22,
            color: "#5F6163",
            textAlign:"center"
          }}>{item.txt3}</Text>
        </View>
        </ImageBackground>
   


    );
  }


  render() {
    return (
<ImageBackground  source={require('../assets/images/group355.png')} style={{flex:1}}>
  
      <AppIntroSlider showNextButton={false} showDoneButton={false} activeDotStyle={{ backgroundColor: "#ED3237" }} renderItem={this._renderItem} data={slides} bottomButton={true} />
      <Button style={{marginBottom:80,backgroundColor:"#ED3237",width:"90%",alignSelf:"center",borderRadius:10,elevation:3}} labelStyle={{padding:5,fontFamily:"Mulish-Bold",fontSize:16}} mode="contained" onPress={() => this.props.navigation.navigate('Login')}>Get Started</Button>
  </ImageBackground>

    )


  }
}


const styles = StyleSheet.create({
  slide: {
    flex:1,
    alignItems: 'center',
   height:"100%"

  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },

  txt1: {
    fontFamily: "Mulish-Bold",
    fontWeight: "900",
    fontSize: 22,
    color: "#5F6163"
  }
})