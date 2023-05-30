import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const products = [
    {
        id: 1,
        image: '../../assets/products/product_1.jpg',
        name: 'Cappucino',
        additional: 'com Chocolate',
        description: 'Um cappuccino é uma bebida de aprox 150 ml, com 25 ml de café expresso e 85 ml de leite fresco',
        rating: {
            note: 4.8,
            quantity: 500
        },
        price: 453,
    },
    {
        id: 2,
        image: '../../assets/products/product_1.jpg',
        name: 'Cappucino',
        additional: 'com Chocolate',
        description: 'Um cappuccino é uma bebida de aprox 150 ml, com 25 ml de café expresso e 85 ml de leite fresco',
        rating: 3.8,
        price: 453
    },
    {
        id: 3,
        image: '../../assets/products/product_1.jpg',
        name: 'Cappucino',
        additional: 'com Chocolate',
        description: 'Um cappuccino é uma bebida de aprox 150 ml, com 25 ml de café expresso e 85 ml de leite fresco',
        rating: 5,
        price: 453
    },
];

const DetailScreen = ({ route }) => {

    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const navigation = useNavigation();

    const { productId } = route.params;

    // console.log('Product ID:', productId);
    const product = products.find((item) => item.id === productId);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum tempus ligula vitae convallis. Phasellus tincidunt est et ex bibendum feugiat. Morbi interdum justo in urna pellentesque aliquam.';

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const back = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <View style={styles.contentContainer}>
                <View style={[styles.row, { paddingBottom: 15 }]}>
                    <View>
                        <TouchableOpacity onPress={() => back()}>
                            <Icon name="chevron-back-outline" size={25} color="#2F2D2C" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.title}>Detalhe</Text>
                    </View>
                    <View>
                        <Icon name="heart-outline" size={25} color="#2F2D2C" />
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingBottom: 15 }} />

                    {product && (
                        <View>
                            <Image
                                source={require('../../assets/products/product_1.jpg')}
                                style={styles.productImage}
                                resizeMode='cover'
                            />

                            <View style={styles.contentProduct}>
                                <Text style={styles.nameProduct}>{product.name}</Text>
                                <Text style={styles.additionalProduct}>{product.additional}</Text>

                                <View style={styles.rating}>
                                    <Icon name="star" size={25} color="#FBBE21" />
                                    <Text style={{ fontSize: 20, color: '#2F2D2C', fontWeight: 'bold', marginHorizontal: 5 }}>{product.rating.note}</Text>
                                    <Text style={{ fontSize: 14, color: '#808080' }}>({product.rating.quantity})</Text>
                                </View>

                                <View style={styles.divider} />

                                <Text style={styles.titleSection}>Descrição</Text>

                                <View style={{ marginBottom: 15 }}>
                                    <Text numberOfLines={showFullDescription ? undefined : 2} style={{ color: '#9B9B9B', fontSize: 18 }}>
                                        {description}
                                    </Text>
                                    {!showFullDescription && (
                                        <Text onPress={toggleDescription} style={{ color: '#C67C4E', fontSize: 18, fontWeight: 'bold' }}>Ver Mais</Text>
                                    )}
                                </View>

                                <Text style={styles.titleSection}>Tamanho</Text>
                                <View style={styles.sizes}>
                                    <TouchableOpacity
                                        style={[
                                        styles.boxSize,
                                        selectedSize === 'P' && styles.selectedBoxSize,
                                        ]}
                                        onPress={() => handleSizeSelection('P')}
                                    >
                                        <Text
                                        style={[
                                            styles.sizeText,
                                            selectedSize === 'P' && styles.selectedSizeText,
                                        ]}
                                        >
                                        P
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                        styles.boxSize,
                                        selectedSize === 'M' && styles.selectedBoxSize,
                                        ]}
                                        onPress={() => handleSizeSelection('M')}
                                    >
                                        <Text
                                        style={[
                                            styles.sizeText,
                                            selectedSize === 'M' && styles.selectedSizeText,
                                        ]}
                                        >
                                        M
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                        styles.boxSize,
                                        selectedSize === 'G' && styles.selectedBoxSize,
                                        ]}
                                        onPress={() => handleSizeSelection('G')}
                                    >
                                        <Text
                                        style={[
                                            styles.sizeText,
                                            selectedSize === 'G' && styles.selectedSizeText,
                                        ]}
                                        >
                                        G
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}

                </ScrollView>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentContainer: {
        paddingVertical: 40,
        paddingHorizontal: 18,
    },
    productImage: {
        width: '100%',
        height: 165,
        borderRadius: 16,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        marginVertical: 15,
    },
    sizes: {
        flexDirection: 'row',
    },
    boxSize: {
        borderWidth: 1,
        borderColor: '#DEDEDE',
        borderRadius: 12,
        paddingVertical: 15,
        width: '30%',
        marginRight: '5%',
        alignItems: 'center',
    },
    contentProduct: {
        paddingVertical: 20,
    },
    nameProduct: {
        fontSize: 26,
        color: '#2F2D2C',
        fontWeight: 'bold',
    },
    additionalProduct: {
        paddingVertical: 5,
        marginBottom: 10,
        color: '#9B9B9B',
        fontSize: 16
    },
    titleSection: {
        fontSize: 22,
        color: '#2F2D2C',
        fontWeight: 'bold',
        paddingBottom: 15,
    },
    selectedBoxSize: {
        backgroundColor: '#FFF5EE',
        borderColor: '#C67C4E',
        borderWidth: 1,
    },
    sizeText: {
        color: '#2F2D2C',
        fontSize: 16,
    },
    selectedSizeText: {
        color: '#C67C4E',
    },
});

export default DetailScreen;