import React from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";

interface PROPS {
  label: string;
  mode: "flat" | "outlined";
  onChangeText: (key: string) => void;
  value: string;
  error?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: 'phone-pad';
}

const CredentialInput: React.FC<PROPS> = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
      }}
    >
      {/* @ts-ignore */}
      <TextInput
        {...props}
        theme={{
          colors: {
            placeholder: "#333",
            primary: "#4776E6",
            text: "#333",
          },
        }}
        style={{
          padding: -15,
          width: "93.6776%",
          borderRadius: 10,
          backgroundColor: 'rgb(224, 224, 224)'
        }}
      />
    </View>
  );
};

export default CredentialInput;
