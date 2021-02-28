import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoAchievement = () => {
    return (
        <View style={{marginVertical: 70}}>
            <Ionicons name="ios-trophy" size={150} color="rgb(243, 243, 64)" />
            <Text style={{fontWeight: 'bold'}}>No Achievements Yet</Text>
        </View>
    )
}

export default NoAchievement;
