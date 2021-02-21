import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CredentialSubmitBtn: React.FC<{ Type: string }> = ({ Type }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 15,
      }}
    >
      <View
        style={[
          Styles.Container,
          {
            backgroundColor: Type === "Forgot" ? "grey" : "#4776E6",
            marginTop: Type === "Forgot" ? -15 : 20,
          },
        ]}
      >
        <Text style={Styles.Text}>{Type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: "93%",
    paddingVertical: 17,
    paddingHorizontal: "2%",
    backgroundColor: "#ff385c",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },

  Text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});

export default CredentialSubmitBtn;
