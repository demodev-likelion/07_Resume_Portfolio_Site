import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "홍길동 — AI Engineer",
  description:
    "AI 에이전트 자동화 전문 엔지니어. 현대자동차·이랜드 등 대기업 AI 교육, 과학기술정보통신부 장관상 수상.",
  keywords: ["AI Engineer", "AI 에이전트", "LangChain", "Claude Code", "n8n", "홍길동"],
  authors: [{ name: "홍길동", url: "https://seunan.dev" }],
  openGraph: {
    title: "홍길동 — AI Engineer",
    description: "AI 에이전트 자동화 전문 엔지니어. 현대자동차·이랜드 등 대기업 AI 교육, 과학기술정보통신부 장관상 수상.",
    url: "https://seunan.dev",
    siteName: "홍길동 Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
