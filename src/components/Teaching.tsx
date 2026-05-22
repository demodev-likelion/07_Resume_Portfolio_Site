/* product-tile-parchment: #f5f5f7, full-bleed */
const companies = ["현대자동차그룹", "슈피겐", "이랜드", "대웅제약"];

const courses = [
  { platform: "패스트캠퍼스", detail: "AI 에이전트 / 바이브코딩 강의 3개 런칭", badge: "6개월 연속 1위" },
  { platform: "오즈코딩스쿨", detail: "KDT AI 리더캠프 주강사 1기 · 2기", badge: null },
  { platform: "한국콘텐츠진흥원", detail: "NCA 장기과정 강의", badge: null },
];

const education = [
  {
    school: "42 Seoul",
    program: "컴퓨터공학 멤버",
    period: "2023.03 — 2024.12",
    detail: "피어러닝 기반 소프트웨어 엔지니어링 과정. 시스템 프로그래밍·알고리즘·협업 프로젝트로 개발 기초 체계 확립.",
  },
];

export default function Teaching() {
  return (
    <section
      id="teaching"
      style={{ background: "var(--color-canvas-parchment)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 20px" }}>
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
          교육
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* 기업 교육 card: store-utility-card */}
          <div
            style={{
              background: "var(--color-canvas)",
              borderRadius: "18px",
              padding: "24px",
              border: "1px solid var(--color-hairline)",
            }}
          >
            <p
              style={{
                color: "var(--color-ink-muted-48)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "-0.224px",
                marginBottom: "16px",
              }}
            >
              기업 교육
            </p>
            <p
              style={{
                color: "var(--color-ink)",
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: 1.1,
                marginBottom: "4px",
              }}
            >
              100+
            </p>
            <p
              style={{
                color: "var(--color-ink-muted-48)",
                fontSize: "17px",
                letterSpacing: "-0.374px",
                marginBottom: "20px",
              }}
            >
              명 교육 완료
            </p>
            <p
              style={{
                color: "var(--color-ink-muted-48)",
                fontSize: "14px",
                letterSpacing: "-0.224px",
                marginBottom: "16px",
              }}
            >
              AI 자동화 · 에이전트 엔지니어링 · 바이브코딩
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {companies.map((co) => (
                <span
                  key={co}
                  style={{
                    background: "var(--color-canvas-parchment)",
                    color: "var(--color-ink)",
                    fontSize: "14px",
                    borderRadius: "9999px",
                    padding: "6px 14px",
                    border: "1px solid var(--color-hairline)",
                  }}
                >
                  {co}
                </span>
              ))}
            </div>
          </div>

          {/* 강의 목록 + 학력 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {courses.map((course) => (
              <div
                key={course.platform}
                style={{
                  background: "var(--color-canvas)",
                  borderRadius: "18px",
                  padding: "20px 24px",
                  border: "1px solid var(--color-hairline)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "-0.374px",
                      marginBottom: "4px",
                    }}
                  >
                    {course.platform}
                  </p>
                  <p
                    style={{
                      color: "var(--color-ink-muted-48)",
                      fontSize: "14px",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    {course.detail}
                  </p>
                </div>
                {course.badge && (
                  <span
                    style={{
                      background: "var(--color-primary)",
                      color: "#fff",
                      fontSize: "12px",
                      borderRadius: "9999px",
                      padding: "4px 10px",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {course.badge}
                  </span>
                )}
              </div>
            ))}

            {education.map((edu) => (
              <div
                key={edu.school}
                style={{
                  background: "var(--color-canvas)",
                  borderRadius: "18px",
                  padding: "20px 24px",
                  border: "1px solid var(--color-hairline)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      color: "var(--color-ink-muted-48)",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "-0.12px",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    학력
                  </p>
                  <p
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "17px",
                      fontWeight: 600,
                      letterSpacing: "-0.374px",
                      marginBottom: "4px",
                    }}
                  >
                    {edu.school} · {edu.program}
                  </p>
                  <p
                    style={{
                      color: "var(--color-ink-muted-48)",
                      fontSize: "14px",
                      letterSpacing: "-0.224px",
                    }}
                  >
                    {edu.detail}
                  </p>
                </div>
                <span
                  style={{
                    color: "var(--color-ink-muted-48)",
                    fontSize: "12px",
                    letterSpacing: "-0.12px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
