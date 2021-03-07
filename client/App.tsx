import React, { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import MainPage from "./Containers/mainPage";
import LandingPage from "./Containers/landingPage";
import MainContext from "./Containers/main-context-api";
import LoadingPage from "./Components/UI/Loader/loadingPage";

interface OBJECT {
  Username: string;
  hash: string;
  Phone: string;
};

const App = () => {
  const [auth_status, SetAuthStatus] = useState<boolean | null>(null);
  const [user_info, SetUserInfo] = useState<OBJECT | null>(null);

  useEffect(() => {
    const CheckAuthentication = async (): Promise<void> => {
      // await AsyncStorage.clear();
      const TotalStorages = await AsyncStorage.getAllKeys();
      if (TotalStorages.length >= 3) {
        const token: string | null = await AsyncStorage.getItem("auth-token");
        const Username: string | null = await AsyncStorage.getItem("Username");
        const UserInfo: string | null = await AsyncStorage.getItem("user-info");
        if (token && Username && UserInfo) {
          const context: object = { token };
          const response = await axios.post("http://192.168.0.106:8000/check-auth", context);
          if (
            JSON.stringify({ auth_token_err: true }) !==
            JSON.stringify(response.data)
          ) {
            SetUserInfo(JSON.parse(UserInfo));
            SetAuthStatus(true);
          } else {
            await AsyncStorage.clear();
            SetAuthStatus(false);
          }
        }
      } else {
        SetAuthStatus(false);
      }
    };
    // Calling the function;
    CheckAuthentication();
  }, []);

  const ChangeAuthentication = async (
    type: boolean,
    userInfo: any,
    token: string
  ) => {
    await AsyncStorage.setItem("auth-token", token);
    await AsyncStorage.setItem("user-info", JSON.stringify(userInfo));
    await AsyncStorage.setItem('Username', userInfo.Username);
    SetUserInfo(userInfo);
    SetAuthStatus(type);
  };

  let AppJSX = <LoadingPage />;
  if (auth_status !== null) {
    if (auth_status === true) {
      AppJSX = <MainPage />;
    } else {
      AppJSX = (
        <LandingPage
          ChangeAuthentication={(type: boolean, userInfo: any, token: string) =>
            ChangeAuthentication(type, userInfo, token)
          }
        />
      );
    }
  };

  return (
    <PaperProvider>
      <MainContext.Provider
        value={{
          // @ts-ignore
          user_info: user_info,
        }}
      >
        {AppJSX}
      </MainContext.Provider>
    </PaperProvider>
  );
};

export default App;
