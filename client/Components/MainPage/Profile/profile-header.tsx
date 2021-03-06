import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import MainContext from "../../../Containers/main-context-api";

const { width, height } = Dimensions.get("window");

const ProfilePicture: React.FC<{Username: string}> = ({ Username }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Image
        source={require("../../../assets/picture.jpeg")}
        style={Styles.ProfilePicture}
      />
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 10,
          fontSize: 20,
          color: "#fff",
        }}
      >
        { Username }
      </Text>
    </View>
  );
};

const Info: React.FC<{ Title: string; info: string }> = (props) => {
  return (
    <View style={{ marginBottom: 35 }}>
      <Text
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: 15,
          color: "#fff",
        }}
      >
        {props.Title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          color: "#fff",
        }}
      >
        {props.info}
      </Text>
    </View>
  );
};

const ProfileInformation = () => {
  return (
    <View
      style={{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: 10,
      }}
    >
      <Info Title="Deals" info="10" />
      <Info Title="Ratings" info="0" />
    </View>
  );
};


const ProfileHeader = () => {
  const context: {user_info: any} = useContext(MainContext);
  return (
    <View style={Styles.HeaderContainer}>
      <ProfilePicture Username={context.user_info === null ? '' : context.user_info.Username}/>
      <ProfileInformation />
      <View style={{position: 'absolute', bottom: 16, right: '5%'}}>
        <AirbnbRating
          defaultRating={2}
          size={30}
          unSelectedColor = '#fff'
          selectedColor = 'yellow'
          isDisabled={true}
          showRating = {false}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: "#4776E6",
    marginTop: 1,
    paddingVertical: 20,
    height: height * (1 / 3),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    width: width * (1.99 / 2),
    borderRadius: 5,
    position: "relative",
  },

  ProfilePicture: {
    height: 130,
    width: 130,
    borderRadius: 65,
    borderColor: "#fff",
    borderWidth: 2,
  },
});

export default ProfileHeader;
