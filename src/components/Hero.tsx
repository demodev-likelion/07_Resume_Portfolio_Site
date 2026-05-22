/* product-tile-light: canvas white, full-bleed, centered column */
export default function Hero() {
  return (
    <section
      id="about"
      style={{ background: "var(--color-canvas)", paddingTop: "44px" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-5"
    >
      <div style={{ maxWidth: "692px", width: "100%", padding: "80px 0" }}>
        {/* eyebrow */}
        <p
          style={{
            color: "var(--color-ink-muted-48)",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "-0.224px",
            lineHeight: 1.43,
            marginBottom: "20px",
          }}
        >
          AI Engineer · Agent Automation
        </p>

        {/* hero-display: 56px / 600 / -0.28px */}
        <h1
          style={{
            color: "var(--color-ink)",
            fontSize: "clamp(34px, 6vw, 56px)",
            fontWeight: 600,
            lineHeight: 1.07,
            letterSpacing: "-0.28px",
            marginBottom: "20px",
          }}
        >
          AI 에이전트로 기업을
          <br />
          자동화하는 엔지니어.
        </h1>

        {/* lead: 28px / 400 */}
        <p
          style={{
            color: "var(--color-ink)",
            fontSize: "clamp(19px, 3vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.14,
            letterSpacing: "0.196px",
            marginBottom: "12px",
          }}
        >
          Aiden Ahn (안승원)
        </p>

        <p
          style={{
            color: "var(--color-ink-muted-48)",
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.47,
            letterSpacing: "-0.374px",
            marginBottom: "32px",
          }}
        >
          빌더이자 에듀케이터 — 만들고, 가르칩니다.
        </p>

        {/* pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="apple-pill"
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "-0.374px",
              borderRadius: "9999px",
              padding: "11px 22px",
              lineHeight: 1.47,
              display: "inline-block",
            }}
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="apple-pill"
            style={{
              background: "transparent",
              color: "var(--color-primary)",
              fontSize: "17px",
              fontWeight: 400,
              letterSpacing: "-0.374px",
              borderRadius: "9999px",
              padding: "10px 22px",
              lineHeight: 1.47,
              border: "1px solid var(--color-primary)",
              display: "inline-block",
            }}
          >
            연락하기
          </a>
        </div>

        {/* stats */}
        <div
          className="flex items-start justify-center gap-12 sm:gap-16"
          style={{ marginTop: "64px" }}
        >
          {[
            { value: "4+", label: "대기업 교육" },
            { value: "100+", label: "교육 인원" },
            { value: "#1", label: "패스트캠퍼스\n6개월 연속" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                style={{
                  color: "var(--color-ink)",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: 0,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  color: "var(--color-ink-muted-48)",
                  fontSize: "14px",
                  fontWeight: 400,
                  letterSpacing: "-0.224px",
                  lineHeight: 1.43,
                  marginTop: "8px",
                  whiteSpace: "pre-line",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
