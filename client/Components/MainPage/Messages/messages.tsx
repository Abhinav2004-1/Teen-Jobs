import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActiveMessages from "./active-msg";
import ClosedMessages from "./closed-msg";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createMaterialTopTabNavigator();

const Messages = () => {
  return (
    <Tabs.Navigator
      lazy={true}
      tabBarOptions={{
        showIcon: true,
        activeTintColor: "#4776E6",
        inactiveTintColor: "#d8d8d8",
        iconStyle: { width: 25, height: 25 },
        labelStyle: { fontWeight: "bold" },
        tabStyle: {padding: 5},
        pressColor: '#9ebafc'
      }}
    >
      <Tabs.Screen
        name="Active"
        component={ActiveMessages}
        options={{
          title: "Active",
          tabBarIcon: (result) => {
            return (
              <MaterialCommunityIcons
                name="message-bulleted"
                size={25}
                color={result.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Closed"
        component={ClosedMessages}
        options={{
          title: "Closed",
          tabBarIcon: (result) => {
            return (
              <MaterialCommunityIcons
                name="message-bulleted-off"
                size={25}
                color={result.color}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Messages;
