import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions,
  Text,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

// interface PROPS {
//   ChangeInput: (text: string) => void;
//   search_value: string;
// }

const { width } = Dimensions.get("window");

const NoDataPage = () => {
  return (
    <>
      <Ionicons name="ios-location-sharp" size={200} color="#ff385c" />
      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        No Search Initiated
      </Text>
    </>
  );
};

const Search = () => {
  const [search_value, SetSearchValue] = useState<string>("");

  const ChangeSearchValue = (text: string) => SetSearchValue(text);
  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor="#4776E6" />
      <View style={{ position: "absolute", top: 3 }}>
        <TextInput
          style={Styles.SearchInput}
          placeholder="Search for properties"
          value={search_value}
          onChangeText={(text: string) => ChangeSearchValue(text)}
          // spellCheck={false}
        />
        <AntDesign style={Styles.Icon} name="search1" size={27} color="black" />
      </View>
      <NoDataPage/>
    </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  SearchInput: {
    width: width * (1.9 / 2),
    backgroundColor: "rgb(199, 199, 199)",
    paddingHorizontal: "5%",
    paddingVertical: 12,
    marginVertical: 10,
    borderRadius: 10,
  },

  Icon: {
    position: "absolute",
    top: 20,
    right: "4%"
  },
});

export default Search;
