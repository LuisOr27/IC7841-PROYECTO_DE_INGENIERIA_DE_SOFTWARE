import React from "react"
import { View, Text,Button} from "react-native"
import HomeStackScreem from "./stacks/HomeStackScreem";
import InvestigationStackScreem from "./stacks/InvestigationStackScreem";
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return(
    
    <NavigationContainer independent={true}>
        
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="INICIO" component={HomeStackScreem} />
            <Tab.Screen name="INVESTIGACIONES" component={InvestigationStackScreem} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs;