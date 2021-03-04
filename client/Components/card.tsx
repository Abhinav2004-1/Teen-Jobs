import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { propertyinfo } from './MainPage/Home/CardList';

const { width, height } = Dimensions.get("window");

const LocationText: React.FC<{ Location: string }> = ({ Location }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 8,
        left: "2%",
        backgroundColor: "#ff385c",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 7,
        paddingHorizontal: "6%",
        flexDirection: "row",
      }}
    >
      <Ionicons
        name="ios-location-sharp"
        size={25}
        color="#fff"
        style={{ marginRight: 2 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 12,
          color: "#fff",
        }}
      >
        {Location}
      </Text>
    </View>
  );
};

const TitleText: React.FC<{ Title: string }> = ({ Title }) => {
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
      {Title}
    </Text>
  );
};

const DescriptionText: React.FC<{ Description: string }> = ({
  Description,
}) => {
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
      {Description}
    </Text>
  );
};

const Card: React.FC<{ navigation: any; propertyinfo?: propertyinfo | any }> = (
  props
) => {
  const { Picture, Title, Description, Location } = props.propertyinfo;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.navigation.navigate("Inner", props.propertyinfo);
      }}
    >
      <View style={Styles.CardContainer}>
        <Image
          source={{uri: Picture}}
          style={Styles.Image}
        />
        <LocationText Location={Location} />
        <TitleText Title={Title} />
        <DescriptionText Description={Description} />
      </View>
    </TouchableOpacity>
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
