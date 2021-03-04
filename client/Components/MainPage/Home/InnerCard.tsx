import React, { useEffect } from 'react';
import { View } from 'react-native';

const InnerCard: React.FC<{navigation: any, route: any}> = (props) => {

    const { Picture, Title, Price, Description, Location } = props.route;

    useEffect(() => {
        props.navigation.setOptions({title: Title});
          // gql apollo fetch;
    }, []);

    return (
        <View>
            
        </View>
    )
}

export default InnerCard;
