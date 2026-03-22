import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: {
    default: "문화민족선진화위원회 | PNIXTA",
    template: "%s | 문화민족선진화위원회",
  },
  description:
    "문화의 힘으로 지구촌 3대 축제를 만드는 문화민족선진화위원회. 피닉타 페스타(PNIXTA WORLD CULPORTS FESTA)를 통해 전통문화와 놀이로 세계를 하나로 잇습니다.",
  keywords: ["문화민족선진화위원회", "PNIXTA", "피닉타", "전통놀이", "한국문화", "세계축제"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "문화민족선진화위원회 | PNIXTA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
