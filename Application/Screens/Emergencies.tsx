import * as React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import TouchableCard from "../Components/TouchableCard";
import Config from "../../Config";

export default function Emergencies({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableCard
                    image={Config.EMERGENCIES.cardiology.icon}
                    caption={Config.EMERGENCIES.cardiology.caption}
                    action={() => navigation.navigate(Config.EMERGENCIES.cardiology.route)}/>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/alergology.png')}/>
                        <Text style={styles.boldtext}>Alergologia</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/neurology.png')}/>
                        <Text style={styles.boldtext}>Neurologia</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/pulmonology.png')}/>
                        <Text style={styles.boldtext}>Pulmonologia</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/gastrology.png')}/>
                        <Text style={styles.boldtext}>Gastroenterologia</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/psychiatry.png')}/>
                        <Text style={styles.boldtext}>Psychiatria</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.row}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/ortopedia.png')}/>
                        <Text style={styles.boldtext}>Ortopedia</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Infections')}>
                    <View style={styles.card}>
                        <Image source={require('../../resources/images/emergencies/reumatology.png')}/>
                        <Text style={styles.boldtext}>Reumatologia</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boldtext: {
        marginTop: 15,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        // flexDirection: 'row',
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    sub: {
        marginBottom: 50
    }
});
