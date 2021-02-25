import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const LocationText = () => {
  return (
    <View
      style={{
        width: "40%",
        position: "absolute",
        top: 8,
        left: '2%',
        backgroundColor: "#ff385c",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 7,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 12,
          color: "#fff",
        }}
      >
        Kathmandu, Nepal
      </Text>
    </View>
  );
};

const TitleText = () => {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 28,
        position: "absolute",
        bottom: 35,
        left: "5%",
        color: "#fff",
      }}
    >
      Land Area
    </Text>
  );
};

const DescriptionText = () => {
  return (
    <Text
      style={{
        fontWeight: "600",
        fontSize: 12,
        position: "absolute",
        bottom: 20,
        left: "5%",
        color: "#d8d8d8",
      }}
    >
      Buy now at a special offer
    </Text>
  );
};

const Card = () => {
  return (
    <View style={Styles.CardContainer}>
      <Image source={require("../assets/picture.jpeg")} style={Styles.Image} />
      <LocationText />
      <TitleText />
      <DescriptionText />
    </View>
  );
};

const Styles = StyleSheet.create({
  CardContainer: {
    width: width * (1.93 / 2),
    borderRadius: 10,
    backgroundColor: "#333",
    height: height * (1.22 / 2),
    marginTop: 8,
    position: "relative",
  },

  Image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Card;
