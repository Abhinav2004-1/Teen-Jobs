import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ClosedMessages = () => {
    return (
        <View style={Styles.mainContainer}>
            <Text style={{fontWeight: 'bold'}}>Closed Chats</Text>
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


export default ClosedMessages;
