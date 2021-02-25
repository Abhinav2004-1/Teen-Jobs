import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Components/MainPage/home';
import Search from '../Components/MainPage/search';
import Messages from '../Components/MainPage/Messages/messages';
import Profile from '../Components/MainPage/Profile/profile';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tabs = createMaterialTopTabNavigator();

const MainPage = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                tabBarPosition = 'bottom'
                lazy = {true}
                tabBarOptions = {{
                    indicatorStyle: {height: 2},
                    showIcon: true,
                    iconStyle: {
                        height: 27,
                        width: 27
                    },
                    activeTintColor: '#4776E6',
                    inactiveTintColor: 'grey',
                    labelStyle: {fontWeight: 'bold', textTransform: 'capitalize'},
                    tabStyle: { padding: 0 },
                    pressColor: '#d8d8d8'
                }}
            >
                <Tabs.Screen
                    name = 'Home'
                    component = {Home}
                    options = {{
                        tabBarIcon: (status) => {
                            return <AntDesign name="home" size={27} color={status.color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name = 'Search'
                    component = {Search}
                    options = {{
                        tabBarIcon: (status) => {
                            return <AntDesign name="search1" size={27} color={status.color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name = 'Messages'
                    component = {Messages}
                    options = {{
                        tabBarIcon: (status) => {
                            return <MaterialIcons name="message" size={27} color={status.color} />
                        }
                    }}
                />
                <Tabs.Screen
                    name = 'Profile'
                    component = {Profile}
                    options = {{
                        tabBarIcon: (status) => {
                            return <AntDesign size={27} color={status.color} name='profile'/>
                        }
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default MainPage;
