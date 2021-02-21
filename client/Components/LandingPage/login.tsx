import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import CredentialCard from "../UI/Credential-Components/credential-card";
import CredentialHeader from "../UI/Credential-Components/credential-header";
import { StatusBar, View } from "react-native";
import CredentialSubmitBtn from "../UI/Credential-Components/credential-submit";
import CredentialInput from "../UI/Credential-Components/credential-input";

interface PROPS {
  ChangeUsername: (text: string) => void;
  ChangePassword: (text: string) => void;
  username: string;
  password: string;
}

const Login: React.FC<PROPS> = (props) => {
  return (
    <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar backgroundColor="#4776E6" />
      <CredentialCard>
        <CredentialHeader Header="Login" />
        <CredentialInput
          label="Username"
          onChangeText={(text: string) => props.ChangeUsername(text)}
          mode="outlined"
          value={props.username}
        />

        <CredentialInput
          label="Password"
          onChangeText={(text: string) => props.ChangePassword(text)}
          mode="outlined"
          value={props.password}
        />
        <CredentialSubmitBtn Type="Login" />
        <CredentialSubmitBtn Type="Forgot" />
      </CredentialCard>
    </View>
  );
};

export default Login;
