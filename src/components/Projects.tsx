/* product-tile-dark: #272729, full-bleed */
export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--color-surface-tile-1)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 20px" }}>
        <p
          style={{
            color: "var(--color-body-muted)",
            fontSize: "14px",
            letterSpacing: "-0.224px",
            textAlign: "center",
            marginBottom: "12px",
          }}
        >
          Projects
        </p>
        <h2
          style={{
            color: "var(--color-on-dark)",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          대표 프로젝트
        </h2>

        <div
          style={{
            background: "var(--color-surface-tile-2)",
            borderRadius: "18px",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--color-body-muted)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "-0.224px",
              marginBottom: "16px",
            }}
          >
            Live Service
          </p>

          <h3
            style={{
              color: "var(--color-on-dark)",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            ShortsGen
          </h3>

          <p
            style={{
              color: "var(--color-body-muted)",
              fontSize: "21px",
              fontWeight: 400,
              lineHeight: 1.19,
              letterSpacing: "0.231px",
              marginBottom: "24px",
            }}
          >
            AI 쇼츠 자동 생성 SaaS
          </p>

          <p
            style={{
              color: "var(--color-body-muted)",
              fontSize: "17px",
              lineHeight: 1.47,
              letterSpacing: "-0.374px",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            대본을 입력하면 AI가 영상·음성·자막을 자동으로 생성해
            유튜브·인스타그램·틱톡에 바로 업로드. Typecast 파트너십으로
            고품질 AI 음성 제공.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
            style={{ marginBottom: "40px" }}
          >
            {[
              { value: "95%", label: "편집 시간 절감" },
              { value: "540만", label: "조회수 달성 사례\n(20일)" },
              { value: "5분", label: "영상 1개 완성" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p style={{ color: "var(--color-on-dark)", fontSize: "40px", fontWeight: 600, lineHeight: 1.1 }}>
                  {s.value}
                </p>
                <p
                  style={{
                    color: "var(--color-body-muted)",
                    fontSize: "14px",
                    letterSpacing: "-0.224px",
                    marginTop: "8px",
                    whiteSpace: "pre-line",
                    lineHeight: 1.43,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "36px" }}>
            {["Next.js", "TypeScript", "Supabase", "Vercel", "AI API", "Typecast"].map((t) => (
              <span
                key={t}
                style={{
                  color: "var(--color-body-muted)",
                  fontSize: "14px",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  lineHeight: 1.29,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://shorts.demodev.io"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pill"
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: "17px",
              letterSpacing: "-0.374px",
              borderRadius: "9999px",
              padding: "11px 22px",
              display: "inline-block",
            }}
          >
            바로가기
          </a>
        </div>
      </div>
    </section>
  );
}
