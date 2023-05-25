import React, { useEffect } from 'react';
import { StatusBar, View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleStartButton = () => {
        navigation.navigate('Home'); // Redireciona para a página "Home"
    };

    useEffect(() => {
        // Configurando a barra de status como transparente
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor('transparent');
        StatusBar.setBarStyle('light-content');

        return () => {
            // Restaurando as configurações da barra de status ao sair da tela
            StatusBar.setTranslucent(false);
            StatusBar.setBackgroundColor('#ffffff'); // Cor de fundo padrão
            StatusBar.setBarStyle('dark-content');
        };
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/backgrounds/onboarding.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Café tão bom que seu paladar vai adorar.</Text>
                <Text style={styles.subtitle}>O melhor grão, o melhor assado, o sabor poderoso.</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleStartButton()}>
                    <Text style={styles.buttonText}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        paddingHorizontal: 30,
        marginBottom: 16,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 38,
        paddingBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        color: '#A9A9A9',
        fontSize: 18,
        paddingBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#C67C4E',
        borderRadius: 16,
        height: 62,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    }
});

export default OnboardingScreen;