import { ImageResponse } from "next/og";

export const alt = "Muhammad Umair: web design, SEO and AI automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FBF9F6", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#18131D", letterSpacing: -1 }}>
          Muhammad Umair<span style={{ color: "#6700C8" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 800, lineHeight: 0.98, letterSpacing: -4, color: "#18131D" }}>
          <span>More customers.</span>
          <span style={{ color: "#6700C8" }}>Less busywork.</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#524A56" }}>Web design · SEO · Digital marketing · AI automation</div>
      </div>
    ),
    size,
  );
}
