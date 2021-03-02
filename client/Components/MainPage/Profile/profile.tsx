import React, {useEffect} from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import CollateralCard from './collateral-card';
import NoAchievement from './no-achievement-page';
import ProfileHeader from './profile-header';

const Profile = () => {

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={Styles.mainContainer}>
            <StatusBar backgroundColor='#4776E6'/>
            <ProfileHeader/>
            <NoAchievement/>
            <CollateralCard/>
        </ScrollView>
    )
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})

export default Profile;
