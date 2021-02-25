import React, { useState } from "react";
import { Dimensions, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import Signup from "../Components/LandingPage/signup";
import Login from "../Components/LandingPage/login";
import HomePage from "./HomePage";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tabs = createMaterialTopTabNavigator();
const { width, height } = Dimensions.get("window");
const { currentHeight } = StatusBar;

interface PROPS {
  ChangeAuthentication: (type: boolean, userInfo: object, token: string) => Promise<void>;
}

const LandingPage: React.FC<PROPS> = (props) => {
  const [username_login, SetUsernameLogin] = useState<string>("");
  const [password_login, SetPasswordLogin] = useState<string>("");
  const [username_signup, SetUsernameSignup] = useState<string>("");
  const [password_signup, SetPasswordSignup] = useState<string>("");
  const [confirm_signup, SetConfirmSignup] = useState<string>("");
  const [phone_signup, SetPhoneSignup] = useState<string>("");
  const [username_login_err, SetUsernameLoginErr] = useState<boolean>(false);
  const [password_login_err, SetPasswordLoginErr] = useState<boolean>(false);
  const [username_signup_err, SetUsernameSignupErr] = useState<boolean>(false);
  const [password_signup_err, SetPasswordSignupErr] = useState<boolean>(false);
  const [confirm_signup_err, SetConfirmSignupErr] = useState<boolean>(false);
  const [phone_signup_err, SetPhoneSignupErr] = useState<boolean>(false);

  const ChangeUsernameSignup = (value: string): void => {
    SetUsernameSignup(value);
  };
  const ChangePasswordSignup = (value: string): void => {
    SetPasswordSignup(value);
  };
  const ChangeCorfirmSignup = (value: string): void => {
    SetConfirmSignup(value);
  };
  const ChangePhoneSignup = (value: string): void => {
    SetPhoneSignup(value);
  };
  const ChangeUsernameLogin = (value: string): void => {
    SetUsernameLogin(value);
  };
  const ChangePasswordLogin = (value: string): void => {
    SetPasswordLogin(value);
  };

  const LoginHandler = async(): Promise<void> => {
    if (username_login.length > 3 && password_login.length > 7) {
      const number_regex = /[0-9]/;
      if (number_regex.exec(password_login) !== null) {
        // axios call backend
        const context = {
          Username: username_login,
          Password: password_login
        }
        const Error = {access_denied: true};
        const response = await axios.post('/login', context);
        if(JSON.stringify(response) !== JSON.stringify(Error)){
          props.ChangeAuthentication(true, response.data.UserInfo, response.data.token);
        }
      } 
    }
  };

  const SignupHandler = () => {
    if (
      username_signup.length > 3 &&
      confirm_signup === password_signup &&
      password_signup.length > 7 &&
      phone_signup.length >= 10
    ) {
      const number_regex = /[0-9]/;
      if (number_regex.exec(password_signup) !== null) {
      }
    }
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
              ChangeUsername={(text: string) => ChangeUsernameLogin(text)}
              ChangePassword={(text: string) => ChangePasswordLogin(text)}
              password={password_login}
              username={username_login}
              password_err = {password_login_err}
              username_err = {username_login_err}
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
          {() => <HomePage />}
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
          {() => (
            <Signup
              username={username_signup}
              password={password_signup}
              confirm={confirm_signup}
              phone={phone_signup}
              ChangeUsername={(text: string) => ChangeUsernameSignup(text)}
              ChangeConfirm={(text: string) => ChangeCorfirmSignup(text)}
              ChangePhone={(text: string) => ChangePhoneSignup(text)}
              ChangePassword={(text: string) => ChangePasswordSignup(text)}
              password_err = {password_signup_err}
              username_err = {username_signup_err}
              confirm_err = {confirm_signup_err}
              phone_err = {phone_signup_err}
            />
          )}
        </Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;
