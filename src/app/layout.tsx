import type { ReactNode } from 'react';
import { pretendard } from '../libs/fonts';
import type { Metadata, Viewport } from 'next';
import CustomThemeProvider from '@/provider/CustomThemeProvider';

const metaTitle = 'wordpress | next';

export const metadata: Metadata = {
  title: {
    template: metaTitle + ' | %s',
    default: metaTitle,
  },
  description: '뭘 먹어도 맛있는 BBQ가 만든 BBQ몰!',
  icons: {
    icon: [{ url: '/favicon.ico', rel: 'shortcut icon' }],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'naver-site-verification': '3d3e995da88e72e6',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <CustomThemeProvider>
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
