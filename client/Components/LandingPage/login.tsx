import React from "react";
import CredentialCard from "../UI/Credential-Components/credential-card";
import CredentialHeader from "../UI/Credential-Components/credential-header";
import { View } from "react-native";
import CredentialSubmitBtn from "../UI/Credential-Components/credential-submit";
import CredentialInput from "../UI/Credential-Components/credential-input";
import { HelperText } from "react-native-paper";

interface PROPS {
  ChangeUsername: (text: string) => void;
  ChangePassword: (text: string) => void;
  username: string;
  password: string;
  username_err: boolean;
  password_err: boolean;
}

const Login: React.FC<PROPS> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CredentialCard>
        <CredentialHeader Header="Login" />
        <CredentialInput
          label="Username"
          onChangeText={(text: string) => props.ChangeUsername(text)}
          mode="outlined"
          value={props.username}
        />

        {/* @ts-ignore */}
        <HelperText
          visible={props.username_err}
          type="error"
          style={props.username_err === false ? {display: 'none'} : {fontWeight: '800'}}
        >
          Username should be atleast 4 chars long
        </HelperText>

        <CredentialInput
          label="Password"
          onChangeText={(text: string) => props.ChangePassword(text)}
          mode="outlined"
          value={props.password}
          secureTextEntry = {true}
        />

        {/* @ts-ignore */}
        <HelperText
          visible={props.password_err}
          type="error"
          style={props.password_err === false ? {display: 'none'} : {fontWeight: '800'}}
        >
          Password should be 8 characters long
        </HelperText>
        <CredentialSubmitBtn Type="Login" />
        <CredentialSubmitBtn Type="Forgot" />
      </CredentialCard>
    </View>
  );
};

export default Login;
