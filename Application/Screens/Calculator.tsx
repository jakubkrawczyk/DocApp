import * as React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';

export default function Calculator() {
    const [dosage, setDosage] = React.useState("10");
    const [unit, setUnit] = React.useState("mg/kg");
    const [drugDosage, setDrugDosage] = React.useState("50");
    const [drugUnit, setDrugUnit] = React.useState("mg/ml");
    const [weight, setWeight] = React.useState("10");
    const [actualDosage, setActualDosage] = React.useState({relativeDosage: 0, totalDosage: 0});

    const calculate = (weight, drugDosage, dosage) => {
        const relativeDosage = dosage / drugDosage;

        return {
            relativeDosage: relativeDosage,
            totalDosage: weight * relativeDosage,
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Kalkulator</Text>
            <Text>Waga:</Text>
            <TextInput
                autoCorrect={false}
                style={styles.input}
                placeholder="Waga"
                placeholderColor="gray"
                clearButtonMode="always"
                textAlign="center"
                keyboardType="numeric"
                value={weight}
                onChangeText={text => setWeight(text)}/>
            <Text>Dawka do podania:</Text>
            <TextInput
                style={styles.input}
                autoCorrect={false}
                placeholder="Dawka"
                placeholderColor="gray"
                clearButtonMode="always"
                textAlign="center"
                keyboardType="numeric"
                value={dosage}
                onChangeText={text => setDosage(text)}/>
            <Picker
                selectedValue={unit}
                style={styles.input}
                onValueChange={(value, index) => setUnit(value)}>
                <Picker.Item label="mg/kg" value="mg/kg"/>
            </Picker>
            <Text>Stężenie w leku:</Text>
            <TextInput
                autoCorrect={false}
                placeholder="Stężenie w leku"
                placeholderColor="gray"
                clearButtonMode="always"
                textAlign="center"
                keyboardType="numeric"
                value={drugDosage}
                onChangeText={text => setDrugDosage(text)}/>
            <Picker
                selectedValue={drugUnit}
                style={styles.input}
                onValueChange={(value, index) => setDrugUnit(value)}>
                <Picker.Item label="mg/ml" value="mg/ml"/>
            </Picker>
            <Button onPress={() => {
                setActualDosage(calculate(weight, drugDosage, dosage));
            }} title="Oblicz"/>
            <Text style={styles.welcome}>Dawka całkowita to: {Number(actualDosage.totalDosage).toFixed(2)} ml
                ({Number(actualDosage.relativeDosage).toFixed(2)} ml/kg)</Text>
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
    },
    input: {
        backgroundColor: '#ffffff',
        width: 150,
        height: 35,
        padding: 0
    }
});

