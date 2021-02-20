import React, { useEffect, useState } from "react";
import {} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import MainPage from "./Containers/mainPage";
import LandingPage from "./Containers/landingPage";
import MainContext from "./Containers/main-context-api";

interface OBJECT {
  Username: string;
  hash: string;
  token: string;
}

const App = () => {
  const [auth_status, SetAuthStatus] = useState<boolean | null>(null);
  const [user_info, SetUserInfo] = useState<OBJECT | null>(null);

  useEffect(() => {
    const CheckAuthentication = async (): Promise<void> => {
      const TotalStorages = await AsyncStorage.getAllKeys();
      if (TotalStorages.length >= 3) {
        const token = await AsyncStorage.getItem("auth-token");
        const Username = await AsyncStorage.getItem("Username");
        const hash = await AsyncStorage.getItem("hash");
        if (token && Username && hash) {
          const context = { token, hash };
          const response = await axios.post("/check-auth", context);
          if (
            JSON.stringify({ auth_token_err: true }) !==
            JSON.stringify(response.data)
          ) {
            SetUserInfo({ Username, hash, token });
            SetAuthStatus(true);
          } else {
            SetAuthStatus(false);
          }
        }
      } else {
        SetAuthStatus(false);
      }

      // Calling the function;
      CheckAuthentication();
    };
  }, []);

  let AppJSX = LandingPage;
  if (auth_status !== null) {
    if (auth_status === true) {
      AppJSX = MainPage;
    } else {
      AppJSX = LandingPage;
    }
  }

  return (
    <PaperProvider>
      {auth_status !== null && user_info !== null ? (
        <MainContext.Provider
          value={{
            user_info: user_info,
          }}
        >
          <AppJSX />
        </MainContext.Provider>
      ) : (
        <AppJSX />
      )}
    </PaperProvider>
  );
};

export default App;
