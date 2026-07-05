"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function PcePlugSocketPage() {
  const features = [
    {
      icon: "🇦🇹",
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine products with manufacturer documentation and warranty.",
    },
    {
      icon: "💧",
      title: "IP44 to IP67 Rating",
      desc: "Wide range of protection classes — from splash-proof industrial plugs to fully submersible underwater connectors.",
    },
    {
      icon: "⚡",
      title: "16A to 125A Range",
      desc: "Full current range covering light-duty portable tools through to heavy industrial three-phase machinery connections.",
    },
    {
      icon: "🚧",
      title: "Construction Site Ready",
      desc: "Robust thermoplastic housing rated for impact, UV, and chemical resistance. Designed to survive site conditions.",
    },
    {
      icon: "🔒",
      title: "Interlocked Versions",
      desc: "Interlock switch models prevent live insertion and withdrawal — mandatory in many safety-regulated environments.",
    },
    {
      icon: "🔌",
      title: "Panel-Mount & Surface",
      desc: "Complete ecosystem: plugs, sockets, couplers, extension reels, distribution boards, and panel-mount versions.",
    },
  ];

  const specRows = [
    { param: "Brand / Origin", val: "PCE Elektro GmbH, Austria", alt: false },
    { param: "Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Current Ratings", val: "16A, 32A, 63A, 125A", alt: false },
    { param: "Voltage Ratings", val: "110V, 230V, 400V, 500V", alt: true },
    { param: "Poles", val: "2P+E, 3P+E, 3P+N+E", alt: false },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: true },
    { param: "IP Ratings", val: "IP44, IP54, IP67 (model specific)", alt: false },
    { param: "Housing", val: "Reinforced thermoplastic (PA66)", alt: true },
    { param: "Operating Temp.", val: "-25°C to +40°C", alt: false },
    { param: "Colour Coding", val: "IEC 60309 compliant (blue/red/yellow/black)", alt: true },
    { param: "Interlocked Version", val: "Available (MAINS before switching)", alt: false },
    { param: "Certifications", val: "CE, VDE, ÖVE, SABS", alt: true },
  ];

  const useCases = [
    { icon: "🏗️", title: "Construction Sites", desc: "Temporary power distribution, site offices, tower cranes" },
    { icon: "🏭", title: "Manufacturing Plants", desc: "Machine tool connections, welding equipment, compressors" },
    { icon: "🎭", title: "Event & Stage", desc: "Temporary power for concerts, exhibitions, outdoor events" },
    { icon: "🚢", title: "Marine & Offshore", desc: "Shore power connections, vessel electrical systems" },
    { icon: "⛏️", title: "Mining & Quarrying", desc: "Heavy duty connections for underground and surface machinery" },
    { icon: "💻", title: "Data Centres", desc: "UPS output connections, redundant power switching" },
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
                  PCE Connectors
                </span>
                <h1 className={styles.heroTitle} style={{ color: "#fff" }}>
                  Industrial Plugs & <br />
                  <span className={styles.orangeText}>Connectors</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#aab0c0" }}>
                  Austrian-engineered PCE industrial connectors — CEE plugs, sockets, couplers, and distribution boxes for construction sites, factories, and marine environments. Authorised distributor.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>IP44–IP67</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>16A–125A</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Current Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>MULTIPLE</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Brand</span>
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
                <div className={styles.heroImageWrapper} style={{ border: "0.8px solid rgba(255,255,255,0.08)", borderRadius: "20px", position: "relative" }}>
                  <Image
                    src="/figma_assets/pce_plug_socket_hero.png"
                    alt="Industrial Plugs & Connectors"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-pce-plug-socket' }}
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
            <p className={styles.sectionIntro}>Quality-assured products backed by technical expertise and pan-India logistics.</p>
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
              <span className={styles.mandatedEyebrow}>Use Cases</span>
              <h2 className={styles.mandatedTitle}>Where Our Products Are Deployed</h2>
              <p className={styles.mandatedSubtitle}>Trusted across critical infrastructure and commercial projects throughout India.</p>
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
