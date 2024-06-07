import React, { useState } from 'react';
import { View, TextInput, Button, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation(); // Obter a função de navegação

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        if (nome === 'gu' && email === 'gu@123' && password === '123') {
            navigation.navigate('TelaDeSucessoCadastro', { email: email });
        } else if( email === 'admin@123' && password === '123'){
            Alert.alert('Você já tem cadastro no app');
        }
        else {
            // caso der erro
            Alert.alert('Credenciais incorretas', 'Por favor, verifique seu email e senha.');
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonback}>
                            <Ionicons name="arrow-back-circle-outline" size={44} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.message}>Bem vindo ao Cadastro</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Cadastro</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.buttonacesso} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#880000'
    },
    buttonback: {
        bottom: 20,
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontFamily: 'Oswald',
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontFamily: 'Oswald',
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    buttonacesso: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
    },
    buttonText: {
        fontFamily: 'Oswald',
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        width: '100%',
        marginTop: 14,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
