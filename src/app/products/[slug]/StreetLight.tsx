"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function StreetLightPage() {
  const features = [
    {
      icon: "💡",
      title: "High System Efficacy",
      desc: "Delivers up to 150 lumens per watt, ensuring bright, uniform illumination with lower energy consumption.",
    },
    {
      icon: "🛡️",
      title: "Rugged, Weatherproof Build",
      desc: "Epoxy powder-coated, pressure die-cast aluminium housing rated IP66 with impact protection for long outdoor service life.",
    },
    {
      icon: "🔍",
      title: "Precision Secondary Optics",
      desc: "Non-yellowing polycarbonate/toughened glass optics ensure optimal brightness, clarity, and uniformity on the road surface.",
    },
    {
      icon: "⚡",
      title: "Surge Protected Driver",
      desc: "Potted driver with built-in surge, over-voltage, and open/short circuit protection, plus provision for external SPD.",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      desc: "Tool-less access to the driver with hinged back cover and specially designed clamps for quick, easy servicing.",
    },
    {
      icon: "🛣️",
      title: "Versatile Applications",
      desc: "Suitable for highways, expressways, city roads, service roads and commercial spaces, with tilt-mount flexibility on site.",
    },
  ];

  const specRows = [
    { param: "Wattage Range", val: "20W – 350W (across variants)", alt: false },
    { param: "System Efficacy", val: "Up to 150 lumens per watt", alt: true },
    { param: "Input Voltage", val: "240V AC (270V AC on select variants)", alt: false },
    { param: "Colour Temperature (CCT)", val: "5700K", alt: true },
    { param: "Housing", val: "Epoxy powder coated, pressure die-cast aluminium", alt: false },
    { param: "Secondary Optics", val: "Non-yellowing polycarbonate / toughened glass", alt: true },
    { param: "Driver", val: "Potted, with inbuilt surge, voltage & open/short-circuit protection", alt: false },
    { param: "Ingress Protection", val: "IP66", alt: true },
    { param: "Impact Protection", val: "IK07 / IK08", alt: false },
    { param: "Internal Surge Protection", val: "4kV (10kV external SPD provision)", alt: true },
    { param: "Total Harmonic Distortion (THD)", val: "< 10%", alt: false },
    { param: "Power Factor (PF)", val: "> 0.90 – 0.95", alt: true },
    { param: "Mounting", val: "Pole-mount with tilt adjustment; NEMA/ZHAGA adapter provision on select variants", alt: false },
    { param: "Pole Diameter Compatibility", val: "38mm – 65mm (variant dependent)", alt: true },
    { param: "Smart Control Ready", val: "Compatible with IoT-based lighting management platforms", alt: false },
    { param: "Applications", val: "National/State Highways, Expressways, City & Service Roads, Commercial Spaces", alt: true },
  ];

  const useCases = [
    { icon: "🛣️", title: "Highways & Expressways", desc: "High wattage variants for National & State highways" },
    { icon: "🏙️", title: "City Roads", desc: "Uniform, glare-free lighting for urban streets" },
    { icon: "🛣️", title: "Service Roads", desc: "Reliable illumination for secondary access roads" },
    { icon: "🏢", title: "Commercial Spaces", desc: "Aesthetic, efficient lighting for business districts" },
    { icon: "🏫", title: "Townships & Campuses", desc: "Compact, low-wattage variants for internal roads" },
    { icon: "🌳", title: "Parks & Public Spaces", desc: "Ambient and safety lighting for open areas" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO */}
        <section className={styles.heroSection} style={{ backgroundImage: "url('/figma_assets/led_street_light_hero_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "0.8px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
                  Street Lighting
                </span>
                <h1 className={styles.heroTitle} style={{ color: "#fff" }}>
                  LED Street Light <br />
                  <span className={styles.orangeText}>Smart & Energy Efficient</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#6b7280" }}>
                  Robust, weatherproof LED street light engineered for city roads, highways, service roads and commercial spaces. High system efficacy, precision secondary optics, and a die-cast aluminium housing deliver reliable, low-maintenance illumination with a long service life.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>IP66</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Ingress Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>IK08</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Impact Rating</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>150 lm/W</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Up to</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>24hr</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Quote TAT</span>
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>Request Quotation →</a>
                  <a href="#specifications" className={styles.btnSecondary} style={{ color: "#f97316", border: "0.8px solid rgba(249,115,22,0.3)" }}>View Specifications</a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper} style={{ background: "rgba(255,255,255,0.04)", border: "0.8px solid rgba(255,255,255,0.08)", borderRadius: "16px", position: "relative" }}>
                  <Image
                    src="/figma_assets/led_street_light_hero.png"
                    alt="LED Street Light"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-led-street-light' }}
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
            <h2 className={styles.sectionTitle}>Why Choose This Street Light</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>Engineered for brightness, durability, and low cost of ownership across road and city lighting applications.</p>
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
            <p className={styles.sectionIntro}>Full technical data sheet. Download available on request after enquiry submission.</p>

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
              <h2 className={styles.mandatedTitle}>Where This Street Light Is Deployed</h2>
              <p className={styles.mandatedSubtitle}>Suited to a wide range of road and public infrastructure lighting needs.</p>
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
