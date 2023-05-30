import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const categories = [
    { id: '1', word: 'Cappuccino' },
    { id: '2', word: 'Machiato' },
    { id: '3', word: 'Café com leite' },
    { id: '4', word: 'Café com leite' },
    { id: '5', word: 'Café com leite' },
];

const products = [
    { id: 1, title: 'Cappucino', description: 'com Chocolate' },
    { id: 2, title: 'Cappucino', description: 'com Leite de Aveia' },
    { id: 3, title: 'Cappucino', description: 'com Chocolate' },
    { id: 4, title: 'Cappucino', description: 'com Chocolate' },
    { id: 5, title: 'Cappucino', description: 'com Chocolate' },
    { id: 6, title: 'Cappucino', description: 'com Chocolate' },
    { id: 7, title: 'Cappucino', description: 'com Chocolate' },
    { id: 8, title: 'Cappucino', description: 'com Chocolate' },
    { id: 9, title: 'Cappucino', description: 'com Chocolate' },
    { id: 10, title: 'Cappucino', description: 'com Chocolate' },
    { id: 11, title: 'Cappucino', description: 'com Chocolate' },
    { id: 12, title: 'Cappucino', description: 'com Chocolate' },
    { id: 13, title: 'Cappucino', description: 'com Chocolate' },
];

const WordItem = ({ word }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setIsSelected(!isSelected);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.box, isSelected && styles.selectedBox]}>
                <Text style={[styles.word, isSelected && styles.selectedBoxText]}>{word}</Text>
            </View>
        </TouchableOpacity>
    );
};

const HomeScreen = () => {
    const navigation = useNavigation();

    const detailProduct = ({ id }) => {
        navigation.navigate('Detail', { productId: id }); // Redireciona para a página "Detalhe"
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/backgrounds/home.jpg')}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <View style={[styles.paddingHorizontal, { marginTop: 60 }]}>
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
            </View>

            <View style={styles.paddingHorizontal}>
                <TouchableOpacity style={styles.searchBtn}>
                    <View style={styles.row}>
                        <Icon style={{ paddingHorizontal: 15 }} name="search-outline" size={30} color="#FFFFFF" />
                        <Text style={{ color: '#989898', fontSize: 20 }}>Pesquisar...</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.filterBtn}>
                            <Icon name="options-outline" size={30} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.paddingHorizontal}>
                <TouchableOpacity style={{ height: 140 }}>
                    <Image
                        source={require('../../assets/backgrounds/banner.jpg')}
                        style={[styles.backgroundImage, { borderRadius: 16 }]}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.paddingHorizontal}>
                <FlatList
                    style={styles.listCategories}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <WordItem word={item.word} />}
                />
            </View>

            <View style={styles.paddingHorizontal}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.containerScroll}
                >
                    <View style={[styles.column, { paddingRight: 10 }]}>
                        {products.map((card, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <TouchableOpacity onPress={() => detailProduct(card)}>
                                        <BoxProduct card={card} />
                                    </TouchableOpacity>
                                );
                            }
                        })}
                    </View>
                    <View style={[styles.column, { paddingLeft: 10 }]}>
                        {products.map((card, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <TouchableOpacity onPress={() => detailProduct(card)}>
                                        <BoxProduct card={card} />
                                    </TouchableOpacity>
                                );
                            }
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const BoxProduct = ({ card }) => {
    return (
        <View key={card.id} style={styles.card}>
            <Image
                source={require('../../assets/products/product_1.jpg')}
                style={styles.productImage}
                resizeMode='cover'
            />
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>

            <View style={styles.footerCard}>
                <Text style={styles.textAddButton}>R$ 14,53</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Icon name="add-outline" size={25} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    paddingHorizontal: {
        paddingHorizontal: 18,
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
        width: 44,
        height: 44,
        borderRadius: 14
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBtn: {
        backgroundColor: '#313131',
        padding: 5,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 25
    },
    filterBtn: {
        backgroundColor: '#C67C4E',
        padding: 10,
        borderRadius: 12
    },
    box: {
        height: 45,
        paddingHorizontal: 25,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    selectedBox: {
        backgroundColor: '#C67C4E',
    },
    selectedBoxText: {
        color: 'white'
    },
    word: {
        color: '#2F4B4E',
        fontSize: 20,
    },
    listCategories: {
        marginVertical: 20,
        height: 45,
    },
    containerScroll: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 5,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#2F2D2C',
        paddingHorizontal: 10,
    },
    description: {
        fontSize: 16,
        color: '#9B9B9B',
        paddingHorizontal: 10,
    },
    productImage: {
        width: '100%',
        height: 165,
        borderRadius: 16,
    },
    footerCard: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C67C4E',
        height: 40,
        width: 40,
        borderRadius: 10
    },
    textAddButton: {
        color: '#2F4B4E',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default HomeScreen;