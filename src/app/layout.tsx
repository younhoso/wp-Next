import type { ReactNode } from "react";
import { pretendard } from "../libs/fonts";
import type { Metadata, Viewport } from "next";
import CustomThemeProvider from "@/provider/CustomThemeProvider";
import SWRConfigProvider from "@/provider/SWRConfigProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const metaTitle = "wordpress | Next";

export const metadata: Metadata = {
  title: {
    template: metaTitle + " | %s",
    default: metaTitle,
  },
  description: "wordpress | Next TEST",
  icons: {
    icon: [{ url: "/favicon.ico", rel: "shortcut icon" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "naver-site-verification": "3d3e995da88e72e6",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <CustomThemeProvider>
          <Header />
          <SWRConfigProvider>{children}</SWRConfigProvider>
          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
