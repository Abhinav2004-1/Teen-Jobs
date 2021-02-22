import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar, View } from "react-native";
import CredentialCard from "../UI/Credential-Components/credential-card";
import CredentialHeader from "../UI/Credential-Components/credential-header";
import CredentialInput from "../UI/Credential-Components/credential-input";
import CredentialSubmitBtn from "../UI/Credential-Components/credential-submit";

interface PROPS {
  username: string;
  password: string;
  confirm: string;
  phone: string;
  ChangeUsername: (text: string) => void;
  ChangePassword: (text: string) => void;
  ChangeConfirm: (text: string) => void;
  ChangePhone: (text: string) => void;
  username_err: boolean;
  password_err: boolean;
  confirm_err: boolean;
  phone_err: boolean;
}

const Signup: React.FC<PROPS> = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar backgroundColor="#4776E6" />
      <CredentialCard>
        <CredentialHeader Header="Signup" />
        <CredentialInput
          label="Username"
          onChangeText={(text: string) => props.ChangeUsername(text)}
          mode="outlined"
          value={props.password}
        />
        <CredentialInput
          label="Password"
          onChangeText={(text: string) => props.ChangePassword(text)}
          mode="outlined"
          value={props.password}
          secureTextEntry = {true}
        />
        <CredentialInput
          label="Confirm"
          onChangeText={(text: string) => props.ChangeConfirm(text)}
          mode="outlined"
          value={props.password}
          secureTextEntry = {true}
        />
        <CredentialInput
          label="Phone"
          onChangeText={(text: string) => props.ChangePhone(text)}
          mode="outlined"
          value={props.password}
        />
        <CredentialSubmitBtn Type="Signup" />
      </CredentialCard>
    </View>
  );
};

export default Signup;
