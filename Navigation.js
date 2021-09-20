import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from "./onboardingScreen"
import Splashscreen from './splashscreen';
import Bottompopup from './Bottompopup';
export default function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen name="splash" component={Splashscreen} options={{headerShown:false}}  />
        <Stack.Screen name="Home" component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name="Login"component={Bottompopup}options={{headerShown:false}} />
      </Stack.Navigator>
    )
}
