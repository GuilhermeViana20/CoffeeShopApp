import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const SearchInput = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default SearchInput;