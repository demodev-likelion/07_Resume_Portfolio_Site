/* product-tile-parchment: #f5f5f7, full-bleed */
const skillGroups = [
  { category: "AI / Agents", skills: ["Claude Code", "LangChain", "LangGraph", "n8n", "AI API"] },
  { category: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend / DB", skills: ["Supabase", "Node.js", "REST API"] },
  { category: "Infra / Tools", skills: ["Vercel", "Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: "var(--color-canvas-parchment)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 20px" }}>
        {/* section head: display-md */}
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
          기술 스택
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p
                style={{
                  color: "var(--color-ink-muted-48)",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "-0.224px",
                  lineHeight: 1.29,
                  marginBottom: "16px",
                }}
              >
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  /* configurator-option-chip */
                  <span
                    key={skill}
                    style={{
                      background: "var(--color-canvas)",
                      color: "var(--color-ink)",
                      fontSize: "14px",
                      fontWeight: 400,
                      letterSpacing: "-0.224px",
                      borderRadius: "9999px",
                      padding: "8px 16px",
                      border: "1px solid var(--color-hairline)",
                      lineHeight: 1.29,
                      display: "inline-block",
                    }}
                  >
                    {skill}
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
