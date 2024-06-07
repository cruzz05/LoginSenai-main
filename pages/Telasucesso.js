import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaDeSucesso({ route }) {
    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login bem-sucedido!</Text>
            <Text style={styles.text}>Bem-vindo(a), {email}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    text: {
        fontFamily: 'Oswald',
        fontSize: 20,
    },
});
