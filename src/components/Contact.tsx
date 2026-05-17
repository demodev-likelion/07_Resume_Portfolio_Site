/* Contact: canvas white tile + parchment footer */
const links = [
  { label: "Email", value: "senugw0u@gmail.com", href: "mailto:senugw0u@gmail.com" },
  { label: "GitHub", value: "github.com/seungwonme", href: "https://github.com/seungwonme" },
  { label: "ShortsGen", value: "shorts.demodev.io", href: "https://shorts.demodev.io" },
];

const footerColumns = [
  {
    heading: "포트폴리오",
    links: ["About", "Skills", "Projects", "Experience"],
    hrefs: ["#about", "#skills", "#projects", "#experience"],
  },
  {
    heading: "활동",
    links: ["Teaching", "Awards", "Contact"],
    hrefs: ["#teaching", "#awards", "#contact"],
  },
  {
    heading: "외부 링크",
    links: ["GitHub", "ShortsGen", "Email"],
    hrefs: ["https://github.com/seungwonme", "https://shorts.demodev.io", "mailto:senugw0u@gmail.com"],
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{ background: "var(--color-canvas)", padding: "80px 0" }}
      >
        <div
          style={{ maxWidth: "692px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}
        >
          <h2
            style={{
              color: "var(--color-ink)",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            연락하기
          </h2>
          <p
            style={{
              color: "var(--color-ink-muted-48)",
              fontSize: "17px",
              lineHeight: 1.47,
              letterSpacing: "-0.374px",
              marginBottom: "40px",
            }}
          >
            AI 프로덕트 개발, 기업 교육, 협업 제안 등 어떤 이야기든 환영합니다.
          </p>

          <div style={{ marginBottom: "32px" }}>
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="apple-row-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "17px 20px",
                  borderTop: "1px solid var(--color-hairline)",
                  borderBottom: i === links.length - 1 ? "1px solid var(--color-hairline)" : undefined,
                  color: "var(--color-ink)",
                }}
              >
                <span style={{ color: "var(--color-ink-muted-48)", fontSize: "14px", width: "80px", textAlign: "left" }}>
                  {link.label}
                </span>
                <span style={{ color: "var(--color-primary)", fontSize: "17px", letterSpacing: "-0.374px", flex: 1, textAlign: "left" }}>
                  {link.value}
                </span>
                <span style={{ color: "var(--color-primary)", fontSize: "17px" }}>→</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:senugw0u@gmail.com"
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
            이메일 보내기
          </a>
        </div>
      </section>

      {/* Footer: canvas-parchment */}
      <footer style={{ background: "var(--color-canvas-parchment)", padding: "64px 20px 40px" }}>
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
          }}
        >
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  color: "var(--color-ink)",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "-0.224px",
                  lineHeight: 1.29,
                  marginBottom: "8px",
                }}
              >
                {col.heading}
              </p>
              {col.links.map((label, i) => (
                <a
                  key={label}
                  href={col.hrefs[i]}
                  target={col.hrefs[i].startsWith("http") ? "_blank" : undefined}
                  rel={col.hrefs[i].startsWith("http") ? "noopener noreferrer" : undefined}
                  className="apple-footer-link"
                  style={{
                    display: "block",
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: 2.41,
                    letterSpacing: 0,
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            borderTop: "1px solid var(--color-hairline)",
            paddingTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <p style={{ color: "var(--color-ink-muted-48)", fontSize: "12px", letterSpacing: "-0.12px" }}>
            Copyright © 2026 Aiden Ahn. All rights reserved.
          </p>
          <p style={{ color: "var(--color-ink-muted-48)", fontSize: "12px", letterSpacing: "-0.12px" }}>
            Built with Next.js · seunan.dev
          </p>
        </div>
      </footer>
    </>
  );
}
