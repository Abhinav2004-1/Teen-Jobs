import React, { useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import Signup from "../Components/LandingPage/signup";
import Login from "../Components/LandingPage/login";
import HomePage from "./HomePage";

const Tabs = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get("window");
const { currentHeight } = StatusBar;

interface PROPS {
  Username: string;
}

const LandingPage = () => {
  const [username_login, SetUsernameLogin] = useState<string>("");
  const [password_login, SetPasswordLogin] = useState<string>("");

  const ChangeUsernameLogin = (value: string): void => {
    SetUsernameLogin(value);
  };

  const ChangePasswordLogin = (value: string): void => {
    SetPasswordLogin(value);
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        tabBarPosition="bottom"
        lazy={true}
        tabBarOptions={{
          showIcon: true,
          indicatorStyle: { height: 0 },
          activeTintColor: "#4776E6",
          labelStyle: { fontWeight: "bold", textTransform: "capitalize" },
          inactiveTintColor: "grey",
          tabStyle: { padding: 0, backgroundColor: "#d8d8d8" },
          iconStyle: {
            height: 25,
            width: 25,
          },
          pressColor: "grey",
        }}
      >
        <Tabs.Screen
          name="Login"
          options={{
            title: "Login",
            tabBarIcon: (status) => (
              <Ionicons name="ios-star" color={status.color} size={25} />
            ),
          }}
        >
          {() => (
            <Login
              ChangeUsername = {(text: string) => ChangeUsernameLogin(text)}
              ChangePassword = {(text: string) => ChangePasswordLogin(text)}
              password = {password_login}
              username = {username_login}
            />
          )}
        </Tabs.Screen>

        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: (status) => (
              <Ionicons name="md-home" color={status.color} size={25} />
            ),
          }}
        >
          {() => (
            <HomePage/>
          )}
        </Tabs.Screen>

        <Tabs.Screen
          name="Signup"
          options={{
            title: "Signup",
            tabBarIcon: (status) => (
              <Feather name="user-plus" size={25} color={status.color} />
            ),
          }}
        >
          {() => <Signup />}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;
