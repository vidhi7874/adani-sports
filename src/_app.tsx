import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
