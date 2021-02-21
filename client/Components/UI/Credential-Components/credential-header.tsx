import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CredentialHeader: React.FC<{ Header: string }> = (props) => {
    return (
        <LinearGradient style={Styles.container} colors={["#4776E6", "#4776E6"]}>
            <Text style={Styles.MainText}>{props.Header}</Text>
            
        </LinearGradient>
    )
};

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    MainText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff'
    },

    SecondaryText: {
        fontWeight: '700',
        color: '#fefefe',
        marginTop: 4
    }
})

export default CredentialHeader;
