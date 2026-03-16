import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sarafathulla S — Lead Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(200,149,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,149,42,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "20%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,149,42,0.12) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              style={{ color: "#EFEFEA", fontSize: "32px", fontWeight: 600 }}
            >
              S
            </span>
            <span
              style={{
                color: "#C8952A",
                fontSize: "14px",
                letterSpacing: "0.2em",
                fontFamily: "monospace",
              }}
            >
              .DEV
            </span>
          </div>
          <span
            style={{
              color: "#38352E",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "0.16em",
            }}
          >
            PORTFOLIO · 2025
          </span>
        </div>

        {/* Main content */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              color: "#C8952A",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "0.2em",
              marginBottom: "20px",
            }}
          >
            LEAD FRONTEND DEVELOPER
          </div>
          <div
            style={{
              color: "#EFEFEA",
              fontSize: "88px",
              fontWeight: 700,
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            SARAFATHULLA
          </div>
          <div
            style={{
              color: "#C8952A",
              fontSize: "88px",
              fontWeight: 700,
              lineHeight: 0.88,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              textAlign: "right",
            }}
          >
            S.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1E1D1B",
            paddingTop: "24px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            {["6+ Years", "React.js", "Next.js", "React Native"].map((item) => (
              <span
                key={item}
                style={{
                  color: "#7A7670",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  letterSpacing: "0.12em",
                }}
              >
                {item.toUpperCase()}
              </span>
            ))}
          </div>
          <span
            style={{
              color: "#38352E",
              fontSize: "12px",
              fontFamily: "monospace",
            }}
          >
            saraffath@gmail.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
