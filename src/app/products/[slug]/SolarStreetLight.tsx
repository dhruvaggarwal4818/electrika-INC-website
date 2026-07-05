"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function SolarStreetLightPage() {
  const features = [
    {
      icon: "☀️",
      title: "All-in-One Integration",
      desc: "Panel, lithium battery, LED engine, motion sensor, and controller are housed in a single compact unit — the fastest and simplest installation in the range, ideal for budget and rapid-deployment projects.",
    },
    {
      icon: "🔌",
      title: "Standalone Flexibility",
      desc: "Separate solar panel and luminaire connected by cable allow the panel to be optimally angled toward the sun independent of the luminaire's mounting position — better performance on poorly oriented poles.",
    },
    {
      icon: "⚖️",
      title: "Semi-Integrated Balance",
      desc: "Panel mounted close to the luminaire on a short arm gives a tidier profile than standalone while retaining a larger, more efficient panel than all-in-one units — a practical mid-ground choice.",
    },
    {
      icon: "🏗️",
      title: "Mini High Mast Output",
      desc: "Multi-panel arrays (dual or radial) atop taller masts deliver significantly higher lumen output for parking lots, highway service areas, and large open yards beyond the reach of standard solar poles.",
    },
    {
      icon: "🎯",
      title: "Motion Sensor & Dimming",
      desc: "Select models include PIR motion sensors that bring the light to full brightness on detecting movement and dim during idle periods, extending battery autonomy on cloudy days.",
    },
    {
      icon: "🌧️",
      title: "IP65 Weatherproof Build",
      desc: "All variants are rated IP65 or better, suitable for outdoor exposure across India's range of climates — from coastal humidity to North Indian winters.",
    },
  ];

  const compareRows = [
    { label: "Power Range", aio: "7W – 30W", standalone: "12W – 60W", semi: "20W – 60W", mhm: "60W – 175W" },
    { label: "Panel Type", aio: "Built-in compact panel", standalone: "Separate larger panel", semi: "Adjacent compact panel", mhm: "Dual / radial multi-panel array" },
    { label: "Typical Pole Height", aio: "3 m – 6 m", standalone: "4 m – 8 m", semi: "4 m – 8 m", mhm: "8 m – 12 m" },
    { label: "Installation Complexity", aio: "Lowest — single fixture", standalone: "Moderate — two-point mounting", semi: "Moderate — short arm assembly", mhm: "Highest — structural mast + array" },
    { label: "Light Output", aio: "Low – Medium", standalone: "Medium", semi: "Medium – High", mhm: "High" },
    { label: "Best Use Case", aio: "Pathways, small lanes, quick rollout", standalone: "Roads needing optimal panel angle", semi: "Balanced roads / colony streets", mhm: "Parking lots, yards, highway service areas" },
    { label: "Relative Cost", aio: "₹ — Most economical", standalone: "₹₹ — Moderate", semi: "₹₹ — Moderate", mhm: "₹₹₹ — Premium" },
    { label: "Cloudy-Day Autonomy", aio: "2 days", standalone: "3 days", semi: "3–4 days", mhm: "3–4+ days" },
  ];

  const variants = [
    { src: "/figma_assets/solar_all_in_one.png", name: "All-in-One Solar Light", desc: "Panel, battery, LED, sensor — fully integrated in a single compact fixture." },
    { src: "/figma_assets/solar_semi_integrated.png", name: "Semi-Integrated Solar Light", desc: "Compact panel mounted directly above the luminaire on a short arm." },
    { src: "/figma_assets/solar_standalone.png", name: "Standalone Solar Light", desc: "Separate solar panel and pole-mounted LED luminaire connected by cable." },
    { src: "/figma_assets/solar_mini_high_mast.png", name: "Mini High Mast (Multi-Panel Radial)", desc: "Radial panel array atop a tall mast for large-area solar floodlighting." },
  ];

  const specRows = [
    { param: "Power Range (Overall)", val: "7W to 175W across the range", alt: false },
    { param: "Variant Types", val: "All-in-One, Standalone, Semi-Integrated, Mini High Mast", alt: true },
    { param: "Battery Type", val: "LiFePO4 (Lithium Iron Phosphate) — standard across range", alt: false },
    { param: "Solar Panel", val: "Monocrystalline, 18%–22% efficiency", alt: true },
    { param: "Light Source", val: "SMD / High-Power LED, 130–150 lm/W", alt: false },
    { param: "Control", val: "PIR motion sensor + dusk-to-dawn auto on/off (select models)", alt: true },
    { param: "Autonomy (Backup)", val: "2–4 cloudy days typical, model dependent", alt: false },
    { param: "IP Rating", val: "IP65 (luminaire); IP67 battery compartment (select models)", alt: true },
    { param: "Pole Compatibility", val: "Direct pole-top or arm-mount, 3 m–10 m poles", alt: false },
    { param: "Charge Controller", val: "Integrated MPPT / PWM controller", alt: true },
    { param: "Operating Temperature", val: "-10°C to +55°C", alt: false },
    { param: "Warranty", val: "2 Years standard; extended options available", alt: true },
    { param: "MNRE / BIS Status", val: "MNRE-approved models available; BIS listed on select SKUs", alt: false },
  ];

  const useCases = [
    { icon: "🛣️", title: "Rural Street Lighting", desc: "Off-grid village roads, panchayat lanes, rural highways" },
    { icon: "🏘️", title: "Residential Colonies", desc: "Township internal streets, gated community roads, society pathways" },
    { icon: "🏫", title: "Institutions & Parks", desc: "School and college campuses, public parks, government buildings" },
    { icon: "🏗️", title: "Government Infrastructure", desc: "Smart city projects, highway service areas, district-level tenders" },
    { icon: "🚗", title: "Parking Lots & Yards", desc: "Industrial yards, logistics hubs, large open parking areas" },
    { icon: "🌊", title: "Coastal / Remote Sites", desc: "Coastal areas, island projects, sites without grid connectivity" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO */}
        <section className={styles.heroSection} style={{ backgroundColor: "#101a2c" }}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "0.8px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
                  Solar Street Lighting
                </span>
                <h1 className={styles.heroTitle}>
                  Solar Street Lights —{" "}
                  <span className={styles.orangeText}>4 Variant Range</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#aab0c0" }}>
                  A complete solar street lighting range covering every site condition and budget — All-in-One, Standalone, Semi-Integrated, and Mini High Mast configurations. Power output spans 7W to 175W across the range.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>7–175 W</span>
                    <span className={styles.metaLabel}>Power Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>4 Types</span>
                    <span className={styles.metaLabel}>Variants</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Motion Sensor</span>
                    <span className={styles.metaLabel}>On Select Models</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>24hr</span>
                    <span className={styles.metaLabel}>Quote TAT</span>
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>Request Quotation →</a>
                  <a href="#specifications" className={styles.btnSecondary}>View Specifications</a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper} style={{ background: "rgba(255,255,255,0.04)", border: "0.8px solid rgba(255,255,255,0.08)", borderRadius: "16px", position: "relative" }}>
                  <Image
                    src="/figma_assets/solar_street_light_hero.png"
                    alt="Solar Street Light — 4 Variant Range"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-solar-street-light' }}
                    style={{ objectFit: "contain" }}
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

        {/* COMPARE VARIANTS TABLE */}
        <section style={{ padding: "80px 0", background: "#f0f2f8" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Compare Variants</span>
            <h2 className={styles.sectionTitle}>Which Solar Light Is Right for You?</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>A side-by-side comparison of all four configurations to help you choose the right fit for your site.</p>

            <div style={{ background: "#fff", border: "0.8px solid #e8eaf0", borderRadius: 12, overflow: "hidden", marginTop: 24 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#0d0d1a" }}>
                    <th style={{ padding: "16px 18px", textAlign: "left", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px", width: "20%" }}>Parameter</th>
                    <th style={{ padding: "14px 18px", textAlign: "left", borderLeft: "0.8px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px", margin: 0 }}>All-in-One</p>
                      <p style={{ color: "#f97316", fontSize: 10, margin: "4px 0 0" }}>Single unit</p>
                    </th>
                    <th style={{ padding: "14px 18px", textAlign: "left", borderLeft: "0.8px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px", margin: 0 }}>Standalone</p>
                      <p style={{ color: "#f97316", fontSize: 10, margin: "4px 0 0" }}>Panel + pole separate</p>
                    </th>
                    <th style={{ padding: "14px 18px", textAlign: "left", borderLeft: "0.8px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px", margin: 0 }}>Semi-Integrated</p>
                      <p style={{ color: "#f97316", fontSize: 10, margin: "4px 0 0" }}>Panel on short arm</p>
                    </th>
                    <th style={{ padding: "14px 18px", textAlign: "left", borderLeft: "0.8px solid rgba(255,255,255,0.08)" }}>
                      <p style={{ color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.5px", margin: 0 }}>Mini High Mast</p>
                      <p style={{ color: "#f97316", fontSize: 10, margin: "4px 0 0" }}>Multi-panel tall mast</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafbfd" }}>
                      <td style={{ padding: "13px 18px", fontWeight: 600, fontSize: 13, color: "#0d0d1a", borderBottom: "0.8px solid #f0f2f5", background: "#f8f9fb" }}>{row.label}</td>
                      <td style={{ padding: "13px 18px", fontSize: 13, color: "#333", borderBottom: "0.8px solid #f0f2f5", borderLeft: "0.8px solid #f0f2f5" }}>{row.aio}</td>
                      <td style={{ padding: "13px 18px", fontSize: 13, color: "#333", borderBottom: "0.8px solid #f0f2f5", borderLeft: "0.8px solid #f0f2f5" }}>{row.standalone}</td>
                      <td style={{ padding: "13px 18px", fontSize: 13, color: "#333", borderBottom: "0.8px solid #f0f2f5", borderLeft: "0.8px solid #f0f2f5" }}>{row.semi}</td>
                      <td style={{ padding: "13px 18px", fontSize: 13, color: "#333", borderBottom: "0.8px solid #f0f2f5", borderLeft: "0.8px solid #f0f2f5" }}>{row.mhm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VARIANT GALLERY */}
        <section style={{ padding: "80px 0", background: "#fff" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Product Range</span>
            <h2 className={styles.sectionTitle}>The Full Variant Lineup</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Visual reference for each of the four solar street light configurations.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 8 }}>
              {variants.map((v, i) => (
                <div key={i} className={styles.featureCard} style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ position: "relative", height: 180, background: "#fafbfd" }}>
                    <Image src={v.src} alt={v.name} fill sizes="280px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "16px 16px 20px", borderTop: "0.8px solid #f0f2f5" }}>
                    <p style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 13, color: "#0d0d1a", margin: "0 0 6px" }}>{v.name}</p>
                    <p style={{ fontFamily: "var(--font-poppins)", fontSize: 12, color: "#888", lineHeight: 1.5, margin: 0 }}>{v.desc}</p>
                  </div>
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
            <p className={styles.sectionIntro}>Full technical data. Manufacturer datasheets available on request after enquiry.</p>

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
              <span className={styles.mandatedEyebrow}>Applications</span>
              <h2 className={styles.mandatedTitle}>Where This Product Is Used</h2>
              <p className={styles.mandatedSubtitle}>Deployed across government, residential and commercial solar projects throughout India.</p>
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
