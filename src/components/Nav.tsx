"use client";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* global-nav: surface-black, 44px */}
      <nav
        style={{ background: "var(--color-surface-black)", height: "44px" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center"
      >
        <div className="max-w-[980px] mx-auto px-5 flex items-center justify-between w-full">
          <a
            href="#"
            style={{ color: "var(--color-on-dark)", fontSize: "18px", lineHeight: 1 }}
            aria-label="홈으로"
          >
            ⌘
          </a>

          <div className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="apple-nav-link"
                style={{
                  color: "var(--color-on-dark)",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "-0.12px",
                  lineHeight: 1,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:senugw0u@gmail.com"
            className="hidden md:inline-flex items-center apple-pill"
            style={{
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "-0.12px",
              borderRadius: "9999px",
              padding: "6px 14px",
              lineHeight: 1,
            }}
          >
            Contact
          </a>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span style={{ display: "block", width: "17px", height: "1px", background: "#fff" }} />
            <span style={{ display: "block", width: "17px", height: "1px", background: "#fff" }} />
            <span style={{ display: "block", width: "17px", height: "1px", background: "#fff" }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ background: "rgba(0,0,0,0.95)", paddingTop: "44px" }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#fff",
                  fontSize: "28px",
                  fontWeight: 600,
                  letterSpacing: "-0.28px",
                  lineHeight: 1.1,
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:senugw0u@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="apple-pill"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                fontSize: "17px",
                borderRadius: "9999px",
                padding: "11px 22px",
                marginTop: "8px",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
