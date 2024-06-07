// import "./globals.css";

import { Providers } from "@/redux/provider";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
// import { useDispatch } from "react-redux";
// import { setCurrentRouteSlice } from "@/redux/features/currentRouteSlice";

export const metadata = {
  title: "Adani sportsline",
  description: "Adani Sportsline is the sports arm of Adani Group",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log("root layout --> ",path)

  return (
    <html lang="en">
      <body>
        <Providers> {children}</Providers>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6WS2TM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
