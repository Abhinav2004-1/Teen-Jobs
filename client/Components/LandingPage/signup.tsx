import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar, View } from "react-native";
import CredentialCard from "../UI/Credential-Components/credential-card";
import CredentialHeader from "../UI/Credential-Components/credential-header";
import CredentialSubmitBtn from "../UI/Credential-Components/credential-submit";

interface PROPS {
  username: string;
  password: string;
  confirm: string;
  phone: string;
  ChangeUsername: VoidFunction;
  ChangePassword: VoidFunction;
  ChangeConfirm: VoidFunction;
  ChangePhone: VoidFunction;
}

const Signup = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar backgroundColor="#4776E6" />
      <CredentialCard>
        <CredentialHeader Header="Signup" />
        <CredentialSubmitBtn Type="Signup" />
      </CredentialCard>
    </View>
  );
};

export default Signup;
