import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Components/MainPage/Home/home";
import Search from "../Components/MainPage/search";
import Messages from "../Components/MainPage/Messages/messages";
import Profile from "../Components/MainPage/Profile/profile";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AddPropertyPage from "../Components/MainPage/add-property-page";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const Tabs = createMaterialTopTabNavigator();

// apollo-client instance;
const client = new ApolloClient({
  uri: 'http://192.168.0.106:8000/graphql',
  cache: new InMemoryCache()
});

const MainPage = () => {

  const RouterInstance = (
    <NavigationContainer>
    <Tabs.Navigator
      tabBarPosition="bottom"
      lazy={true}
      tabBarOptions={{
        indicatorStyle: { height: 2 },
        showIcon: true,
        iconStyle: {
          height: 27,
          width: 27,
        },
        activeTintColor: "#4776E6",
        inactiveTintColor: "grey",
        labelStyle: { fontWeight: "bold", textTransform: "capitalize" },
        tabStyle: { padding: 0 },
        pressColor: "#d8d8d8",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: (status) => {
            return <AntDesign name="home" size={27} color={status.color} />;
          },
        }}
      >
        {() => <Home/>}
      </Tabs.Screen>

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: (status) => {
            return (
              <AntDesign name="search1" size={27} color={status.color} />
            );
          },
        }}
      >
        {() => (
          <Search/>
        )}
      </Tabs.Screen>

      <Tabs.Screen
        name="Add"
        options={{
          tabBarIcon: (status) => {
            return (
              <AntDesign name="pluscircle" size={27} color={status.color} />
            );
          },
        }}
      >
        {() => {
          return <AddPropertyPage />;
        }}
      </Tabs.Screen>

      <Tabs.Screen
        name="Messages"
        options={{
          tabBarIcon: (status) => {
            return (
              <MaterialIcons name="message" size={27} color={status.color} />
            );
          },
        }}
      >
        {() => <Messages />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: (status) => {
            return (
              <AntDesign size={27} color={status.color} name="profile" />
            );
          },
        }}
      >
        {() => <Profile />}
      </Tabs.Screen>
    </Tabs.Navigator>
  </NavigationContainer>
  );

  const Navigator = () => RouterInstance;

  return (
    <>
      <ApolloProvider client={client}>
        <Navigator/>
      </ApolloProvider>
    </>
  );
};

export default MainPage;
