import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/backgrounds/home.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.addressTitle}>Localização</Text>
                        <Text style={styles.address}>Rua Morumbi, 248</Text>
                    </View>

                    <View>
                        <Image
                            source={require('../../assets/profile/profile.jpg')}
                            style={styles.profile}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <Text style={styles.title}>Café tão bom que seu paladar vai adorar.</Text>
                <Text style={styles.subtitle}>O melhor grão, o melhor assado, o sabor poderoso.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        paddingHorizontal: 18,
        paddingVertical: 60
    },
    addressTitle: {
        color: '#B7B7B7',
        fontSize: 16
    },
    address: {
        color: '#DDDDDD',
        fontSize: 18
    },
    profile: {
        height: 44,
        width: 44,
        borderRadius: 14
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default HomeScreen;
