import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingPage = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size='large' color= '#333'/>
        </View>
    )
}

export default LoadingPage;
