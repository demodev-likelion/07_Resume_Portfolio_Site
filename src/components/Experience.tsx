/* product-tile-light: canvas white, full-bleed */
const experiences = [
  {
    company: "조코딩 AX Partners",
    role: "AX Director",
    period: "2026.03 — 현재",
    description:
      "기업 AI 트랜스포메이션(AX) 전략 수립 및 실행 디렉팅. AI 도입 컨설팅부터 임직원 교육, 자동화 파이프라인 구축까지 전반을 리딩.",
    tags: ["AI Transformation", "컨설팅", "교육"],
  },
  {
    company: "대모산개발단",
    role: "공동창업자 · CCO",
    period: "2025.02 — 현재",
    description:
      "AI 프로덕트 스타트업 공동 창업. ShortsGen(AI 쇼츠 자동 생성 SaaS) 기획·개발·출시 전담. Typecast와 파트너십 체결, 서비스 운영 중.",
    tags: ["창업", "AI SaaS", "풀스택 개발"],
  },
  {
    company: "42 Seoul",
    role: "컴퓨터공학 멤버",
    period: "2023.03 — 2024.12",
    description:
      "피어러닝 기반 소프트웨어 엔지니어링 과정. 시스템 프로그래밍, 알고리즘, 협업 프로젝트를 통해 개발 기초 체계 확립.",
    tags: ["시스템 프로그래밍", "C", "협업"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: "var(--color-canvas)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "692px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            color: "var(--color-ink)",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: 0,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          경력
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                padding: "32px 0",
                borderTop: "1px solid var(--color-hairline)",
              }}
            >
              {/* header row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "8px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "-0.374px",
                    }}
                  >
                    {exp.company}
                  </span>
                  <span style={{ color: "var(--color-ink-muted-48)", margin: "0 8px" }}>·</span>
                  <span
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "17px",
                      fontWeight: 400,
                      letterSpacing: "-0.374px",
                    }}
                  >
                    {exp.role}
                  </span>
                </div>
                <span
                  style={{
                    color: "var(--color-ink-muted-48)",
                    fontSize: "14px",
                    letterSpacing: "-0.224px",
                    lineHeight: 1.47,
                    whiteSpace: "nowrap",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <p
                style={{
                  color: "var(--color-ink-muted-80)",
                  fontSize: "17px",
                  fontWeight: 400,
                  lineHeight: 1.47,
                  letterSpacing: "-0.374px",
                  marginBottom: "12px",
                }}
              >
                {exp.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "var(--color-canvas-parchment)",
                      color: "var(--color-ink-muted-80)",
                      fontSize: "12px",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      border: "1px solid var(--color-hairline)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
