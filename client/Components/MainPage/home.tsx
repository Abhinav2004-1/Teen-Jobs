import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

const Home = () => {
    return (
        <View style={Styles.mainContainer}>
            <StatusBar backgroundColor='#4776E6'/>
            <Text style={{fontWeight: 'bold'}}>Home</Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home;
