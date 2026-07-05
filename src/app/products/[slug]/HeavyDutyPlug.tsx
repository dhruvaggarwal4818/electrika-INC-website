"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function HeavyDutyPlugPage() {
  const features = [
    {
      icon: "⚡",
      title: "250A to 600A Rating",
      desc: "Covers the full heavy-industry current spectrum — from large motor starters and welding rectifiers to ship shore power and arc furnace tap connections.",
    },
    {
      icon: "🔒",
      title: "Interlocked Safety Latch",
      desc: "Mechanical interlock prevents live insertion and withdrawal. The latch must be disengaged before the plug can be removed, enforcing safe switching procedures.",
    },
    {
      icon: "🔌",
      title: "Copper Alloy Contact Pins",
      desc: "Heavy copper-alloy pins provide low contact resistance, high conductivity, and long service life even under repeated make-break cycles.",
    },
    {
      icon: "🏗️",
      title: "Heavy-Duty Handle",
      desc: "Integrated ergonomic carrying handle on the plug body — essential for safe one-person handling of these high-mass connectors.",
    },
    {
      icon: "💧",
      title: "IP44 / IP67 Protection",
      desc: "Weatherproof ratings ensure reliable operation in outdoor yards, wet process areas, and marine environments.",
    },
    {
      icon: "✅",
      title: "IEC 60309 Compliant",
      desc: "Colour-coded to international standard for easy phase identification and cross-site compatibility with matching sockets from any IEC-compliant supplier.",
    },
  ];

  const specRows = [
    { param: "Current Ratings", val: "250A, 315A, 400A, 500A, 600A", alt: false },
    { param: "Voltage Rating", val: "380V / 400V / 415V / 500V (3P+N+E)", alt: true },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: false },
    { param: "Number of Poles", val: "3P+E / 3P+N+E (5 poles)", alt: true },
    { param: "Contact Material", val: "Copper alloy (brass/bronze), silver-plated tips on selected models", alt: false },
    { param: "Body Material", val: "Heavy thermoplastic / die-cast aluminium alloy (model specific)", alt: true },
    { param: "IP Rating", val: "IP44 (standard) / IP67 (submersible version)", alt: false },
    { param: "Interlocking", val: "Mechanical safety interlock as standard", alt: true },
    { param: "Handle", val: "Integrated moulded carrying handle", alt: false },
    { param: "Cable Entry", val: "Gland plate for cable OD 35 mm – 80 mm", alt: true },
    { param: "Operating Temperature", val: "-25°C to +60°C", alt: false },
    { param: "Applicable Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Colour Code", val: "Red (3P, 400V–500V) / Black (special voltages) per IEC 60309", alt: false },
    { param: "Lead Time", val: "Subject to availability — confirm with enquiry", alt: true },
  ];

  const useCases = [
    { icon: "🏭", title: "Steel & Smelting Plants", desc: "EAF, induction furnace, and ladle tap connections" },
    { icon: "🚢", title: "Shipyards & Ports", desc: "Shore-to-ship power supply; dry-dock connections" },
    { icon: "🏗️", title: "Heavy Press Lines", desc: "Large stamping, forging, and extrusion machine feeds" },
    { icon: "⛏️", title: "Mining Equipment", desc: "Large ventilation fans, winders, and dragline connectors" },
    { icon: "🚆", title: "Railway Maintenance", desc: "Loco shed power, heavy maintenance pit supplies" },
    { icon: "⚡", title: "Transformer Testing", desc: "High-current test bench supply and load-bank connections" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO */}
        <section className={styles.heroSection} style={{ backgroundColor: "#101a28" }}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "0.8px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
                  HD Industrial Plugs
                </span>
                <h1 className={styles.heroTitle} style={{ color: "#fff" }}>
                  Heavy Duty Industrial <br />
                  <span className={styles.orangeText}>Plugs — 250A to 600A</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#aab0c0" }}>
                  Extra heavy-duty industrial plugs engineered for the most demanding high-current applications. Starting at 250A and scaling to 600A, these connectors are built for smelters, heavy press lines, ship-to-shore power, and large transformer connections.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>250–600A</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Current Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>High Current</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Applications</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>3P+N+E</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Configuration</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>24hr</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Quote TAT</span>
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>Request Quotation →</a>
                  <a href="#specifications" className={styles.btnSecondary} style={{ color: "#fff", border: "0.8px solid rgba(255,255,255,0.2)" }}>View Specifications</a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper} style={{ background: "rgba(255,255,255,0.04)", border: "0.8px solid rgba(255,255,255,0.08)", borderRadius: "16px", position: "relative" }}>
                  <Image
                    src="/figma_assets/heavy_duty_plug_hero.png"
                    alt="Heavy Duty Industrial Plugs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-heavy-duty-plug' }}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <span style={{ position: "absolute", top: 14, left: 14, background: "#f97316", color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 4, letterSpacing: "0.5px", zIndex: 2 }}>In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ELECTRIKA — 6 feature cards */}
        <section className={styles.featuresSection} style={{ background: "#fff" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose Electrika Inc.</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Quality-assured products backed by technical expertise and pan-India delivery.</p>

            <div style={{ background: "#fff7f0", borderLeft: "4px solid #f97316", padding: "20px", borderRadius: "8px", margin: "40px auto 40px", maxWidth: "1200px" }}>
              <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
                <strong style={{ color: "#f97316", marginRight: "8px" }}>Note on Materials:</strong>
                These plugs feature a heavy-duty thermoplastic or die-cast housing with aluminium body, copper/brass alloy contact pins, and a stainless-steel interlocking latch mechanism. If you need confirmed material certificates for a specific application, request a datasheet with your enquiry.
              </p>
            </div>

            <div className={styles.featuresGrid6}>
              {features.map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}><span>{f.icon}</span></div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS TABLE */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Full technical data. Manufacturer datasheets and test certificates available on request after enquiry.</p>

            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <h3>Technical Specification Sheet</h3>
              </div>
              <table className={styles.specsTable}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((row, i) => (
                    <tr key={i} className={row.alt ? styles.altRow : ""}>
                      <td className={styles.paramName}>{row.param}</td>
                      <td className={styles.paramVal}>{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHERE USED */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Use Cases</span>
              <h2 className={styles.mandatedTitle}>Where This Product Is Used</h2>
              <p className={styles.mandatedSubtitle}>Trusted across critical infrastructure and industrial projects throughout India.</p>
            </div>
            <div className={styles.appsGrid}>
              {useCases.map((u, i) => (
                <div key={i} className={styles.appCard}>
                  <div className={styles.appIconWrapper}><span className={styles.appIcon}>{u.icon}</span></div>
                  <h4 className={styles.appTitle}>{u.title}</h4>
                  <p className={styles.appDesc}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
