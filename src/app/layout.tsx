import type { Metadata } from "next";
import { Nanum_Pen_Script } from "next/font/google";
import "./globals.css";

const handwriting = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Aiden Ahn — AI Engineer",
  description:
    "AI 에이전트 자동화 전문 엔지니어. 현대자동차·이랜드 등 대기업 AI 교육, 과학기술정보통신부 장관상 수상.",
  keywords: ["AI Engineer", "AI 에이전트", "LangChain", "Claude Code", "n8n", "안승원", "Aiden Ahn"],
  authors: [{ name: "Aiden Ahn", url: "https://seunan.dev" }],
  openGraph: {
    title: "Aiden Ahn — AI Engineer",
    description: "AI 에이전트 자동화 전문 엔지니어. 현대자동차·이랜드 등 대기업 AI 교육, 과학기술정보통신부 장관상 수상.",
    url: "https://seunan.dev",
    siteName: "Aiden Ahn Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={handwriting.variable}>
      <body>{children}</body>
    </html>
  );
}
