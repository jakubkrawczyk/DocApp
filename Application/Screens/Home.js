import * as React from 'react';
import {Button, Picker, StyleSheet, Text, TextInput, View, Image, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import TouchableCard from "../Components/TouchableCard";
import Config from "../../Config";

export default function Home({navigation}) {
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('https://img.fnk.re/example.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : <Text>{data[0].question}</Text>}
            <View style={styles.row}>
                <TouchableCard
                    image={Config.NAVIGATION.infections.icon}
                    caption={Config.NAVIGATION.infections.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.infections.route)}/>
                <TouchableCard
                    image={Config.NAVIGATION.emergencies.icon}
                    caption={Config.NAVIGATION.emergencies.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.emergencies.route)}/>
            </View>
            <View style={styles.row}>
                <TouchableCard
                    image={Config.NAVIGATION.chronic_diseases.icon}
                    caption={Config.NAVIGATION.chronic_diseases.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.chronic_diseases.route)}/>
                <TouchableCard
                    image={Config.NAVIGATION.dose_calculator.icon}
                    caption={Config.NAVIGATION.dose_calculator.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.dose_calculator.route)}/>
            </View>
            <View style={styles.row}>
                <TouchableCard
                    image={Config.NAVIGATION.recipes.icon}
                    caption={Config.NAVIGATION.recipes.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.recipes.route)}/>
                <TouchableCard
                    image={Config.NAVIGATION.dermatology.icon}
                    caption={Config.NAVIGATION.dermatology.caption}
                    action={() => navigation.navigate(Config.NAVIGATION.dermatology.route)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
