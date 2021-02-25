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
  token: string;
}

const App = () => {
  const [auth_status, SetAuthStatus] = useState<boolean | null>(null);
  const [user_info, SetUserInfo] = useState<OBJECT | null>(null);

  useEffect(() => {
    const CheckAuthentication = async (): Promise<void> => {
      const TotalStorages = await AsyncStorage.getAllKeys();
      SetAuthStatus(true);
      // if (TotalStorages.length >= 3) {
      //   const token = await AsyncStorage.getItem("auth-token");
      //   const Username = await AsyncStorage.getItem("Username");
      //   const hash = await AsyncStorage.getItem("hash");
      //   if (token && Username && hash) {
      //     const context = { token, hash };
      //     const response = await axios.post("/check-auth", context);
      //     if (
      //       JSON.stringify({ auth_token_err: true }) !==
      //       JSON.stringify(response.data)
      //     ) {
      //       SetUserInfo({ Username, hash, token });
      //       SetAuthStatus(true);
      //     } else {
      //       SetAuthStatus(false);
      //     }
      //   }
      // } else {
      //   SetAuthStatus(false);
      // }
    };
    // Calling the function;
    CheckAuthentication();
  }, []);

  const ChangeAuthentication = async (
    type: boolean,
    userInfo: any,
    token: string
  ) => {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user-info", JSON.stringify(userInfo));
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
  }

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
