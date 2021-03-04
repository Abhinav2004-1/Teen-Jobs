import React, { useState } from "react";
import { StyleSheet, ScrollView, StatusBar, FlatList } from "react-native";
import Card from "../../card";

export interface propertyinfo {
  _id: string;  
  Picture: string;
  Title: string;
  Description: string;
  Location: string;
  Price: string;
  sellerID: string;
  Dimensions: string;
}

const OuterCard: React.FC<{
  navigation: any;
  propertyinfo: Array<propertyinfo> | null;
  refreshing: boolean;
  RefreshHandler: () => void
  EndReachedHandler: () => void
}> = (props) => {

  return props.propertyinfo !== null ? (
    <FlatList
        data = {props.propertyinfo}
        keyExtractor = {property => property._id}
        renderItem = {
            property => {
                return <Card navigation={props.navigation} propertyinfo={property}/>
            }
        }
        refreshing = {props.refreshing}
        onRefresh = {props.RefreshHandler}
        style={Styles.mainContainer}
        onEndReached={props.EndReachedHandler}
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
    />
  ) : (
    <StatusBar backgroundColor="#4776E6" />
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default OuterCard;
