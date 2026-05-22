# 07_Resume_Portfolio_Site

Claude Code 강의 Chapter 7 결과물입니다. PRD와 자연어 프롬프트를 바탕으로 만든 개인 이력서/포트폴리오 웹사이트입니다.

## 배포

- 라이브: https://demodev-likelion-portfolio.vercel.app/
- 저장소: https://github.com/demodev-likelion/07_Resume_Portfolio_Site
- 원본 레포: https://github.com/swan-crypto/landing

## 프로젝트 개요

- 목적: 본인 소개, 기술 스택, 프로젝트, 경력, 교육(강의 + 학력), 수상 이력을 한 페이지에 정리한 포트폴리오 사이트
- 학습 포인트: PRD 작성, Claude Code 계획 수립, 구현, 디자인 시스템 커스터마이징, GitHub/Vercel 배포

## 디자인 시스템

`DESIGN.md`에 정리한 Apple 스타일 시스템을 그대로 따릅니다.

- 컬러: Action Blue(`#0066cc`) 단일 액센트, ink(`#1d1d1f`)/parchment(`#f5f5f7`) 기반 흑백
- 타이포: SF Pro Display/Text를 1순위로 두고, 비-Apple 환경에서는 Inter로 fallback. 한글은 system-ui 스택에서 Apple SD Gothic Neo → Pretendard 순으로 해석
- 컴포넌트: `product-tile-light` / `product-tile-parchment` / `store-utility-card` 등 DESIGN.md 토큰을 컴포넌트별 inline 스타일로 매핑
- 인터랙션: 버튼 active state는 `transform: scale(0.95)` 단일 패턴

## 페이지 구성

`src/app/page.tsx`에서 다음 섹션을 순서대로 렌더링합니다.

- `Nav` — 글로벌 내비게이션
- `Hero` — 인트로 + 핵심 지표
- `Skills` — 기술 스택
- `Projects` — 대표 프로젝트
- `Experience` — 경력 (조코딩 AX Partners, 대모산개발단)
- `Teaching` — 교육 (기업 교육 · 강의 · 학력)
- `Awards` — 수상 이력
- `Contact` — 연락처

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4
- ESLint 9 + `eslint-config-next`

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

## 주요 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run start    # 빌드 결과 실행
npm run lint     # ESLint 실행
```

## 작업 지침 파일

- `docs/PRD.md` — 제품 요구사항 정의
- `DESIGN.md` — 디자인 시스템 명세
- `CLAUDE.md` / `AGENTS.md` — Claude Code 작업 지침

## 배포

Vercel에 연결되어 있어 `master` 브랜치에 push하면 자동 배포됩니다.

## 강의 활용 포인트

이 프로젝트는 Claude Code로 PRD 작성 → 계획 수립 → 구현 → 디자인 커스터마이징 → 배포까지 이어지는 기본 흐름을 보여주는 Chapter 7 참고 결과물입니다.
