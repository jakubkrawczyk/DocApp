import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "./Application/Screens/Home";
import Calculator from "./Application/Screens/Calculator";
import Emergencies from "./Application/Screens/Emergencies";
import Infections from "./Application/Screens/Infections";
import ChronicDiseases from "./Application/Screens/ChronicDiseases";
import Recipes from "./Application/Screens/Recipes";
import Dermatology from "./Application/Screens/Dermatology";
import Config from "./Config";
import Cardiology from "./Application/Screens/Emergencies/Cardiology";

const Stack = createStackNavigator();

const globalStyles = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalStyles}>
                <Stack.Screen options={{title: "DocApp"}} name="home" component={Home}/>
                <Stack.Screen options={{title: Config.NAVIGATION.infections.caption}}
                              name={Config.NAVIGATION.infections.route} component={Infections}/>
                <Stack.Screen options={{title: Config.NAVIGATION.emergencies.caption}}
                              name={Config.NAVIGATION.emergencies.route} component={Emergencies}/>
                <Stack.Screen options={{title: Config.NAVIGATION.chronic_diseases.caption}}
                              name={Config.NAVIGATION.chronic_diseases.route} component={ChronicDiseases}/>
                <Stack.Screen options={{title: Config.NAVIGATION.dose_calculator.caption}}
                              name={Config.NAVIGATION.dose_calculator.route} component={Calculator}/>
                <Stack.Screen options={{title: Config.NAVIGATION.recipes.caption}}
                              name={Config.NAVIGATION.recipes.route} component={Recipes}/>
                <Stack.Screen options={{title: Config.NAVIGATION.dermatology.caption}}
                              name={Config.NAVIGATION.dermatology.route} component={Dermatology}/>

                {/*Emergencies navigation*/}
                <Stack.Screen options={{title: Config.EMERGENCIES.cardiology.caption}}
                              name={Config.EMERGENCIES.cardiology.route} component={Cardiology}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}