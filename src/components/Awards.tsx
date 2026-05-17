/* product-tile-dark-2: #2a2a2c, full-bleed */
const awards = [
  { title: "과학기술정보통신부 장관상", org: "대한민국 과학기술정보통신부", date: "2025.03", category: "AI" },
  { title: "LG Aimers 6기 수료", org: "LG AI Research", date: "2025.01 — 02", category: "AI/ML" },
  { title: "Codyssey X SeSAC AI/데이터 분석", org: "서울특별시 · SeSAC", date: "2024.12 — 2025.03", category: "수료" },
];

export default function Awards() {
  return (
    <section
      id="awards"
      style={{ background: "var(--color-surface-tile-2)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 20px" }}>
        <h2
          style={{
            color: "var(--color-on-dark)",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: 0,
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          수상 · 교육
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {awards.map((award, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-surface-tile-1)",
                borderRadius: "18px",
                padding: "24px",
              }}
            >
              <span
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontSize: "12px",
                  borderRadius: "9999px",
                  padding: "4px 10px",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                {award.category}
              </span>
              <h3
                style={{
                  color: "var(--color-on-dark)",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: 1.24,
                  letterSpacing: "-0.374px",
                  marginBottom: "8px",
                }}
              >
                {award.title}
              </h3>
              <p
                style={{
                  color: "var(--color-body-muted)",
                  fontSize: "14px",
                  letterSpacing: "-0.224px",
                  lineHeight: 1.43,
                  marginBottom: "12px",
                }}
              >
                {award.org}
              </p>
              <p
                style={{
                  color: "var(--color-ink-muted-48)",
                  fontSize: "12px",
                  letterSpacing: "-0.12px",
                }}
              >
                {award.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
