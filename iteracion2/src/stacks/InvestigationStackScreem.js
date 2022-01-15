import React from "react"
import { View, Text} from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Investigation from "../screens/Investigation";
import Camera from "../screens/Camera";
const InvestigationStackScreem = () =>{
    const InvestigationStack = createNativeStackNavigator();
    return(
        <InvestigationStack.Navigator >
            <InvestigationStack.Screen name= "Sección de Investigaciones" component= {Investigation}/>
            <InvestigationStack.Screen name= "Sección de evidencias" component= {Camera}/>
        </InvestigationStack.Navigator>

    );
};

export default InvestigationStackScreem