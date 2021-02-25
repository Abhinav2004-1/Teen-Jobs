import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Card from '../card';

const Home = () => {
    return (
        <ScrollView style={Styles.mainContainer} contentContainerStyle={{alignItems: 'center'}}>
            <StatusBar backgroundColor='#4776E6'/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})

export default Home;
