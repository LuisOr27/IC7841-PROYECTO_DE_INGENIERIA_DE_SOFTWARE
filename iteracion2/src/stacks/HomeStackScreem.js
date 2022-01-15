import React from "react";
import { View, Text} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
const HomeStack = createStackNavigator();
export default function HomeStackScreem(){
    return(
            
            <HomeStack.Navigator>
                <HomeStack.Screen name= "INICIO" component= {Home}/>
                
            </HomeStack.Navigator>

    )
}