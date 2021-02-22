import React from "react";
import { StatusBar } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const HomePage = () => {
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      colors={["#4776E6", "#8E54E9"]}
    >
        <StatusBar backgroundColor="#4776E6" />
    </LinearGradient>
  );
};

export default HomePage;
