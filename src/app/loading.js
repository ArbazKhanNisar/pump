"use client";
import { useEffect, useState } from "react";
import { logo } from "@/constants/config";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  // Example: fade out after 2.5s (simulate loading complete)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`d-flex flex-column justify-content-center align-items-center vh-100 bg-light fade-section${visible ? " fade-in" : " fade-out"}`}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <img
        src={logo}
        alt="Inventomatic Seals Logo"
        style={{
          width: "80px",
          marginBottom: "1rem",
          animation: "spin 2s linear infinite"
        }}
      />
      <h5 className="text-dark fw-semibold" style={{ animation: "fadeIn 1s ease-in" }}>
        Inventomatic Seals
      </h5>
      <p className="text-muted mt-2" style={{ animation: "fadeIn 1.5s ease-in" }}>
        Precision systems in motion…
      </p>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-section {
          opacity: 1;
          transition: opacity 0.8s ease;
        }
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
