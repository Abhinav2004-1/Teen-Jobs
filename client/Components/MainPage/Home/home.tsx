import React, { useCallback, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OuterCard from "./CardList";
import InnerCard from "./InnerCard";
import { propertyinfo } from "./CardList";

const Stack = createStackNavigator();

const Home = () => {
  const [property_info, SetPropertyInfo] = useState<null | Array<propertyinfo>>(
    null
  );
  const [call_limit_reached, SetCallLimit] = useState<boolean>(false);
  const [resfreshing, SetRefreshing] = useState<boolean>(false);

  const ProcessData = useCallback((data: Array<propertyinfo>): void => {
    if (data.length > 0) {
      if (data.length === 10) {
        SetPropertyInfo(data);
      } else {
        SetCallLimit(true);
      }
    } else {
      SetCallLimit(true);
    }
  }, []);

  const EndReachedHandler = (): void => {
    if (call_limit_reached === false) {
      // ProcessData();
    }
  };

  const RefreshHandler = (): void => {
    SetRefreshing(!resfreshing);
  };

  useEffect(() => {
    // data fetch from apolllo - client;
    // ProcessData();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Outer" options={{ headerShown: false }}>
        {(navigation) => (
          <OuterCard
            refreshing={resfreshing}
            RefreshHandler={RefreshHandler}
            navigation={navigation}
            propertyinfo={property_info}
            EndReachedHandler={EndReachedHandler}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Inner" component={InnerCard} />
    </Stack.Navigator>
  );
};

export default Home;
