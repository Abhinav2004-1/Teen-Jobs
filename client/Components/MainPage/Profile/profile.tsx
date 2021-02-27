import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import ProfileHeader from './profile-header';

const Profile = () => {
    return (
        <View style={Styles.mainContainer}>
            <StatusBar backgroundColor='#4776E6'/>
            <ProfileHeader/>
        </View>
    )
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Profile;
