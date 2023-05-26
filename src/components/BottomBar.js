import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const BottomBar = () => {
    const [selectedTab, setSelectedTab] = useState('home');

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
            <TouchableOpacity onPress={() => handleTabPress('home')} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
                <Image source={require('../../assets/icons/home.png')} style={{ width: 24, height: 24, tintColor: selectedTab === 'home' ? '#FF0000' : '#000000' }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('favorites')} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
                <Image source={require('../../assets/icons/favorites.png')} style={{ width: 24, height: 24, tintColor: selectedTab === 'favorites' ? '#FF0000' : '#000000' }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('cart')} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
                <Image source={require('../../assets/icons/cart.png')} style={{ width: 24, height: 24, tintColor: selectedTab === 'cart' ? '#FF0000' : '#000000' }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress('notifications')} style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
                <Image source={require('../../assets/icons/notifications.png')} style={{ width: 24, height: 24, tintColor: selectedTab === 'notifications' ? '#FF0000' : '#000000' }} />
            </TouchableOpacity>
        </View>
    );
};

export default BottomBar;