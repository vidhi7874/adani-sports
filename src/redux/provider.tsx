"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { store } from "./store";
import { Provider } from "react-redux";
import WithSubnavigation from "@/components/Navbar";
import SmallWithSocial from "@/components/Footer";
import theme from "@/theme/theme";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { localStorageService } from "@/services/localStorge.service";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { i18n } from "next-i18next";

const theme_setup = extendTheme({
  ...theme,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const checkUserLoggedinStatus = () => {
    let token = localStorageService.get("ADANI_SPORTS_LINE");
    let path_name = window?.location?.pathname;
    if (token) {
      // router.push("/");
    } else {
      //  router.push("/signin");
    }
  };

  useEffect(() => {
    checkUserLoggedinStatus();
  }, []);

  return (
    <ChakraProvider theme={theme_setup}>
      <Provider store={store}>
        <Toaster />
        <WithSubnavigation />
        {children}
        <SmallWithSocial />
      </Provider>
    </ChakraProvider>
  );
}
