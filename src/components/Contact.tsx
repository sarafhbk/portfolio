"use client";

import { useActionState } from "react";
import { sendContact } from "@/app/actions";
import { profile } from "@/lib/data";
import AnimateIn from "./AnimateIn";

const initialState = { success: false, error: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  return (
    <section
      id="contact"
      className="relative"
      style={{
        padding: "clamp(5rem, 10vw, 10rem) var(--section-px)",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Section header */}
      <div className="flex items-start gap-8 mb-20">
        <AnimateIn>
          <span className="section-number select-none leading-none">04</span>
        </AnimateIn>
        <div className="flex flex-col justify-end pt-12">
          <AnimateIn delay={100}>
            <span className="section-label mb-3 block">Contact</span>
          </AnimateIn>
          <AnimateIn delay={200}>
            <h2 className="section-title">
              Let&apos;s build something{" "}
              <em
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                }}
              >
                great
              </em>
            </h2>
          </AnimateIn>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: info */}
        <div className="space-y-12">
          <AnimateIn delay={100}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Whether you have a project in mind, a role to discuss, or just
              want to connect — I&apos;m always open to meaningful conversations
              about great products.
            </p>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="space-y-0">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-5"
                data-cursor="hover"
                style={{
                  padding: "1.1rem 0",
                  borderBottom: "1px solid var(--border)",
                  transition: "border-color 0.25s ease",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--border-bright)",
                    background: "var(--elevated)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ color: "var(--text-secondary)" }}
                    className="group-hover:text-accent transition-colors"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Email
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                    }}
                    className="group-hover:text-accent transition-colors"
                  >
                    {profile.email}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
                data-cursor="hover"
                style={{
                  padding: "1.1rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--border-bright)",
                    background: "var(--elevated)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "var(--text-secondary)" }}
                    className="group-hover:text-accent transition-colors"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    LinkedIn
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                    }}
                    className="group-hover:text-accent transition-colors"
                  >
                    /in/sarafhbk
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  →
                </span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
                data-cursor="hover"
                style={{
                  padding: "1.1rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-accent"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--border-bright)",
                    background: "var(--elevated)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "var(--text-secondary)" }}
                    className="group-hover:text-accent transition-colors"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    GitHub
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                    }}
                    className="group-hover:text-accent transition-colors"
                  >
                    /sarafhbk
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-tertiary)",
                  }}
                  className="group-hover:text-accent transition-colors"
                >
                  →
                </span>
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Right: form */}
        <AnimateIn delay={300}>
          {state.success ? (
            <div
              className="h-full flex flex-col items-center justify-center text-center p-12 relative"
              style={{
                background: "var(--elevated)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Accent corners */}
              <div
                className="absolute top-0 left-0"
                style={{ width: "16px", height: "16px", borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }}
              />
              <div
                className="absolute bottom-0 right-0"
                style={{ width: "16px", height: "16px", borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }}
              />
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "var(--accent-muted)",
                  border: "1px solid var(--accent)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: "var(--accent)" }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Message sent!
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
              >
                I&apos;ll get back to you as soon as possible. Looking forward to connecting.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid var(--border-bright)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      padding: "0.7rem 0",
                      outline: "none",
                      transition: "border-color 0.25s ease",
                      borderRadius: 0,
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--border-bright)";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid var(--border-bright)",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      padding: "0.7rem 0",
                      outline: "none",
                      transition: "border-color 0.25s ease",
                      borderRadius: 0,
                    }}
                    onFocus={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--border-bright)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border-bright)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    padding: "0.7rem 0",
                    outline: "none",
                    transition: "border-color 0.25s ease",
                    borderRadius: 0,
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderBottomColor = "var(--border-bright)";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    marginBottom: "0.6rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border-bright)",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    padding: "0.7rem 0",
                    outline: "none",
                    transition: "border-color 0.25s ease",
                    resize: "none",
                    borderRadius: 0,
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = "var(--accent)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = "var(--border-bright)";
                  }}
                />
              </div>

              {state.error && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#f87171",
                  }}
                >
                  {state.error}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="btn-primary w-full justify-center"
                style={{ width: "100%" }}
              >
                {pending ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg
                      className="animate-spin"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.25"
                      />
                      <path
                        d="M12 2a10 10 0 0110 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    Send Message
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </section>
  );
}
