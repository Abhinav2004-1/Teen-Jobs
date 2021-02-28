import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Info = () => {
  return (
    <View style={{ flex: 2, marginRight: 15 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Collateral Loaded
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 25,
          marginTop: 10,
          textAlign: "center",
          color: '#4776E6'
        }}
      >
        Rs 0.0
      </Text>
    </View>
  );
};

const CollateralCard = () => {
  return (
    <View style={Styles.CardContainer}>
      <View style={Styles.Summary}>
        <FontAwesome
          name="dollar"
          size={90}
          color="#2fd38f"
          style={{ flex: 1 }}
        />
        <Info />
        <FontAwesome
          name="dollar"
          size={90}
          color="#2fd38f"
          style={{ flex: 1 }}
        />
      </View>
      <TouchableOpacity style={{ flex: 1, width: "60%" }}>
        <View
          style={{
            width: "100%",
            height: "100%",
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#4776E6",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>SUMMARY</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  CardContainer: {
    marginTop: 10,
    paddingVertical: 20,
    height: height * (1 / 3),
    paddingLeft: 20,
    width: width * (1.99 / 2),
    borderRadius: 10,
    backgroundColor: "rgb(228, 228, 228)",
    alignItems: "center",
  },

  Summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
  },
});

export default CollateralCard;
