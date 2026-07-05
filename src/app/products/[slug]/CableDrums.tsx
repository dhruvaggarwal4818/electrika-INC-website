"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function CableDrumsPage() {
  const sizes = [
    {
      dia: 235,
      capacity: "~20–30m",
      current: "16A",
      sockets: "2–4 Nos",
      weight: "~3.5 kg",
      use: "Light Duty"
    },
    {
      dia: 310,
      capacity: "~40–50m",
      current: "16–32A",
      sockets: "2–4 Nos",
      weight: "~5.5 kg",
      use: "Medium Duty"
    },
    {
      dia: 380,
      capacity: "~60–80m",
      current: "32A",
      sockets: "4–6 Nos",
      weight: "~8 kg",
      use: "Heavy Duty"
    },
    {
      dia: 450,
      capacity: "~100–120m",
      current: "32–63A",
      sockets: "4–8 Nos",
      weight: "~12 kg",
      use: "Industrial"
    }
  ];

  const customizations = [
    {
      cat: "🔌 Socket & Connector Options",
      opts: [
        { icon: "🟡", title: "Indian 5-Pin Sockets (230V)", desc: "Hensel-grade weatherproof sockets — 2, 4, or 6 nos as required. 6A / 16A rating." },
        { icon: "🔵", title: "PCE Blue Socket (230V Single Phase)", desc: "IEC 60309 industrial socket — 16A or 32A, 3-pin (2P+E). Blue color coding." },
        { icon: "🔴", title: "PCE Red Socket (415V Three Phase)", desc: "IEC 60309 industrial socket — 16A or 32A, 5-pin (3P+N+E). Red color coding." },
        { icon: "⚡", title: "Siemens MCB Protection", desc: "Built-in Siemens miniature circuit breaker — 16A or 32A, mounted inside protective cover on drum face." }
      ]
    },
    {
      cat: "📐 Cable & Body Options",
      opts: [
        { icon: "📏", title: "Cable Length", desc: "10m / 20m / 30m / 50m or custom. 3-core or 5-core as per requirement." },
        { icon: "⚡", title: "Cable Cross Section", desc: "1.5 sq.mm / 2.5 sq.mm / 4 sq.mm — matched to current rating and cable length." },
        { icon: "🏭", title: "Input Connector Type", desc: "PCE plug (blue/red), bare wire termination, or direct panel wiring as required." },
        { icon: "🔒", title: "Thermal Overload Protection", desc: "Thermal cut-out available on request for protection during coiled cable operation." }
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO */}
        <section className={styles.heroSection} style={{ backgroundColor: "#17293a", borderRadius: "20px", margin: "10px", width: "calc(100% - 20px)", overflow: "hidden", position: "relative", minHeight: "400px" }}>
          <Image
            src="/figma_assets/cable_drum_hero.png"
            alt="Synthetic cable drums background"
            fill
            className={styles.heroBgImg}
            style={{ objectFit: "cover", opacity: 0.3 }}
            priority
          />
          <div className={styles.container} style={{ position: "relative", zIndex: 2 }}>
            <div className={styles.heroContent} style={{ maxWidth: "800px", padding: "60px 0" }}>
              <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "0.8px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
                Industrial Grade
              </span>
              <h1 className={styles.heroTitle} style={{ color: "#fff" }}>
                Synthetic Rubber Cable Drum <br />
                <span className={styles.orangeText}>Customizable</span>
              </h1>
              <p className={styles.heroDesc} style={{ color: "#aab0c0" }}>
                Schill drum body with Hensel-grade weatherproof sockets, PCE industrial connectors (blue 230V / red 415V), and Siemens MCB protection — built for construction sites, events, and industrial installations.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT GALLERY / SHOWCASE */}
        <section className={styles.featuresSection} style={{ background: "#f5f7fa" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Product Gallery</span>
            <h2 className={styles.sectionTitle}>Schill Cable Drum — Hensel Fitted</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Actual product photos from our stock. Available in 4 diameter sizes with custom socket & connector configurations.</p>
            
            <div style={{ display: "flex", gap: "30px", marginTop: "40px", flexWrap: "wrap" }}>
              {/* Left Images */}
              <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", borderRadius: "14px", overflow: "hidden", border: "1px solid #000", boxShadow: "0px 8px 16px rgba(0,0,0,0.15)", height: "321px" }}>
                  <div style={{ flex: 1, position: "relative", borderRight: "1px solid #e2e8f0", backgroundColor: "#fff" }}>
                    <Image src="/figma_assets/cable_drum_main_rotated_90_right.png" alt="Cable Drum Front" fill style={{ objectFit: "cover", objectPosition: "left" }} />
                  </div>
                  <div style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
                    <Image src="/figma_assets/cable_drum_sockets_rotated_90_right.png" alt="Cable Drum Sockets" fill style={{ objectFit: "cover", objectPosition: "right" }} />
                  </div>
                </div>
                <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #000", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", height: "276px", position: "relative", backgroundColor: "#fff" }}>
                  <Image src="/figma_assets/cable_drum_rear.png" alt="Rear view" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              
              {/* Right Info Box */}
              <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "30px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
                  <span style={{ display: "inline-block", background: "rgba(0,180,216,0.1)", border: "1px solid rgba(0,180,216,0.25)", color: "#00b4d8", fontSize: "10px", fontWeight: "bold", padding: "4px 12px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "15px" }}>🇩🇪 Made in Germany</span>
                  <h3 style={{ fontSize: "22px", color: "#0d1b2a", marginBottom: "15px" }}>Synthetic Rubber Cable Drum<br/>(Customizable)</h3>
                  <p style={{ color: "#8fa3b1", fontSize: "13px", lineHeight: "1.7", marginBottom: "30px" }}>
                    Schill drum body with Hensel-grade weatherproof sockets, PCE industrial connectors (blue 230V / red 415V), and Siemens MCB protection — built for construction sites, events, and industrial installations.
                  </p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {["235 – 450mm Dia", "IP44 / IP65", "Hensel Sockets", "PCE Connectors", "Siemens MCB", "Synthetic Rubber"].map((tag, idx) => (
                      <span key={idx} style={{ background: "#f5f7fa", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: "600", color: "#0d1b2a", display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: idx % 2 === 0 ? "#00b4d8" : "#f4720b" }}></span> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#0d1b2a", borderRadius: "14px", padding: "30px", color: "#fff" }}>
                  <h4 style={{ fontSize: "15px", fontWeight: "bold", marginBottom: "10px" }}>Custom Configuration Available</h4>
                  <p style={{ color: "#8fa3b1", fontSize: "12px", marginBottom: "25px" }}>Choose your drum size, number of sockets (230V / 415V), PCE rating (16A / 32A), cable length, and MCB rating. We build to your spec.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <button style={{ background: "#f4720b", color: "#fff", border: "none", borderRadius: "8px", padding: "12px", fontWeight: "bold", fontSize: "13px", cursor: "pointer" }}>📋 Request Custom Quote</button>
                    <button style={{ background: "transparent", border: "1px solid rgba(0,180,216,0.4)", color: "#00b4d8", borderRadius: "8px", padding: "12px", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>💬 WhatsApp for Spec Sheet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIZES */}
        <section className={styles.specsSection} style={{ background: "#f5f7fa", paddingTop: 0 }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Sizes</span>
            <h2 className={styles.sectionTitle}>4 Diameter Options</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Select the drum size based on cable capacity and portability requirement.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "40px" }}>
              {sizes.map((s, i) => (
                <div key={i} className={styles.featureCard} style={{ borderRadius: "14px", overflow: "hidden", position: "relative", padding: 0 }}>
                  <div style={{ height: "3px", background: "#00b4d8", width: "100%", position: "absolute", top: 0, left: 0 }}></div>
                  <div style={{ padding: "30px 20px" }}>
                    <div style={{ textAlign: "center", marginBottom: "20px" }}>
                      <span style={{ fontSize: "26px", fontWeight: "bold", color: "#0d1b2a" }}>{s.dia}</span>
                      <span style={{ fontSize: "16px", fontWeight: "500", color: "#0d1b2a" }}> mm</span>
                      <div style={{ fontSize: "12px", color: "#8fa3b1" }}>Diameter</div>
                    </div>
                    
                    <div style={{ borderTop: "1px solid #f0f4f8" }}>
                      {[
                        { label: "Cable Capacity", val: s.capacity },
                        { label: "Max Current", val: s.current },
                        { label: "Sockets", val: s.sockets },
                        { label: "Weight", val: s.weight },
                        { label: "Use", val: s.use },
                      ].map((spec, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f4f8", fontSize: "11px" }}>
                          <span style={{ color: "#8fa3b1" }}>{spec.label}</span>
                          <span style={{ color: "#0d1b2a", fontWeight: "600" }}>{spec.val}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={styles.blueHoverCard} style={{ background: "#f5f7fa", border: "1.6px solid transparent", width: "100%", padding: "10px", borderRadius: "8px", marginTop: "20px", fontWeight: "bold", fontSize: "11px", color: "#0d1b2a", cursor: "pointer" }}>Get Quote →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION OPTIONS */}
        <section className={styles.featuresSection} style={{ background: "#f5f7fa", paddingTop: 0 }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Customization</span>
            <h2 className={styles.sectionTitle}>Build Your Configuration</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Every drum is assembled to order — pick your exact combination below.</p>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "40px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)", marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
              {customizations.map((cat, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#0d1b2a", marginBottom: "20px" }}>{cat.cat}</h3>
                  {cat.opts.map((opt, j) => (
                    <div key={j} style={{ display: "flex", gap: "15px", paddingBottom: "15px", marginBottom: "15px", borderBottom: j === cat.opts.length - 1 ? "none" : "1px solid #f0f4f8" }}>
                      <div style={{ background: "#f0f9ff", width: "36px", height: "36px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
                        {opt.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "13px", fontWeight: "bold", color: "#0d1b2a", marginBottom: "5px" }}>{opt.title}</h4>
                        <p style={{ fontSize: "12px", color: "#8fa3b1", lineHeight: "1.5" }}>{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK FEATURES STRIP */}
        <section style={{ background: "#f5f7fa", paddingBottom: "60px" }}>
          <div className={styles.container}>
            <div style={{ background: "#0d1b2a", borderRadius: "16px", padding: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>🇩🇪</div>
                <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>Schill Germany</h4>
                <p style={{ color: "#8fa3b1", fontSize: "12px" }}>Drum body made in Germany — robust synthetic rubber construction for industrial use.</p>
              </div>
              <div>
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>🛡️</div>
                <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>IP44 Rated</h4>
                <p style={{ color: "#8fa3b1", fontSize: "12px" }}>Splash-proof enclosure — safe for outdoor construction and events.</p>
              </div>
              <div>
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>⚡</div>
                <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>Siemens MCB</h4>
                <p style={{ color: "#8fa3b1", fontSize: "12px" }}>Built-in Siemens circuit breaker for overload and short circuit protection.</p>
              </div>
              <div>
                <div style={{ fontSize: "30px", marginBottom: "10px" }}>🔌</div>
                <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: "bold", marginBottom: "10px" }}>PCE + Hensel</h4>
                <p style={{ color: "#8fa3b1", fontSize: "12px" }}>Premium branded connectors and sockets — not generic Chinese fittings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ENQUIRY CTA */}
        <section style={{ background: "#f5f7fa", paddingBottom: "80px" }}>
          <div className={styles.container}>
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 50px" }}>
              <Image src="/figma_assets/cable_drum_enquiry_bg.png" alt="Enquiry Background" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "relative", zIndex: 2 }}>
                <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Need a Custom Cable Drum?</h2>
                <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "14px", marginBottom: "30px", maxWidth: "600px" }}>Tell us: drum size + socket config + cable length + current rating — we'll send a quotation within 24 hours.</p>
                <div style={{ display: "flex", gap: "15px" }}>
                  <button style={{ background: "#fff", color: "#f4720b", padding: "12px 24px", borderRadius: "8px", border: "none", fontWeight: "bold", fontSize: "13px", cursor: "pointer" }}>📧 Email Your Spec</button>
                  <button style={{ background: "transparent", color: "#fff", padding: "12px 24px", borderRadius: "8px", border: "1.6px solid rgba(255,255,255,0.6)", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}>💬 WhatsApp Us</button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
