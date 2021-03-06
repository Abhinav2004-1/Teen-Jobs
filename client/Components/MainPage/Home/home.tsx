import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OuterCard from "./CardList";
import InnerCard from "./InnerCard";
import { propertyinfo } from "./CardList";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

const Stack = createStackNavigator();

const FetchProperties = gql`
  {
    Properties(request_count: ${0}) {
      _id,
      Location,
      Title,
      Description,
      Price,
      Picture,
      Dimensions,
      sellerID
    }
  }
`;

const Home = () => {
  const [property_info, SetPropertyInfo] = useState<null | Array<propertyinfo>>(null);
  const [call_limit_reached, SetCallLimit] = useState<boolean>(false);
  const [request_count, SetRequestCount] = useState<number>(0);
  const [resfreshing, SetRefreshing] = useState<boolean>(false);
  const { loading, error, data, refetch, networkStatus, previousData } = useQuery(FetchProperties);
  
  // const ProcessData = useCallback((data: Array<propertyinfo>): void => {
  //   if (data.length > 0) {
  //     if (data.length === 10) {
  //       SetPropertyInfo(data);
  //     } else {
  //       SetCallLimit(true);
  //     }
  //   } else {
  //     SetCallLimit(true);
  //   }
  // }, []);

  const EndReachedHandler = (): void => {
    if (call_limit_reached === false) {
      // ProcessData();
    }
  };

  const RefreshHandler = (): void => {
    SetRefreshing(!resfreshing);
  };

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