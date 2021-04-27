import * as React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default function TouchableCard({image, caption, action}) {
    return (
        <TouchableWithoutFeedback onPress={action}>
            <View style={styles.card}>
                <Image source={image}/>
                <Text style={styles.caption}>{caption}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    caption: {
        marginTop: 15,
        fontWeight: 'bold'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

