"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function Pce125APlugPage() {
  const features = [
    {
      icon: "🇦🇹",
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine 125A plugs and sockets with manufacturer documentation and warranty.",
    },
    {
      icon: "⚡",
      title: "125A Heavy Duty Rating",
      desc: "Full 125A current capacity for three-phase industrial machinery, welding sets, distribution boards, and site power feeds.",
    },
    {
      icon: "🛡️",
      title: "IP44 & IP65 Variants",
      desc: "Choose IP44 for general indoor/covered use, or IP65 for dust-tight, water-jet-resistant outdoor and washdown environments.",
    },
    {
      icon: "👷",
      title: "Construction Site Ready",
      desc: "Reinforced thermoplastic housing rated for impact, UV, and chemical resistance — built to survive rough site handling.",
    },
    {
      icon: "🔧",
      title: "Secure Screw-Locking Sleeve",
      desc: "Threaded coupling sleeve ensures a vibration-proof, positive connection that won't loosen under load or movement.",
    },
    {
      icon: "🔌",
      title: "Complete Connector Set",
      desc: "Matching plug and panel/surface-mount socket available together, plus couplers and extension options in the same range.",
    },
  ];

  const specRows = [
    { param: "Brand / Origin", val: "PCE Elektro GmbH, Austria", alt: false },
    { param: "Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Rated Current", val: "125A", alt: false },
    { param: "Voltage Ratings", val: "400V / 500V (3P+N+E)", alt: true },
    { param: "Poles", val: "3P+E, 3P+N+E", alt: false },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: true },
    { param: "IP Rating", val: "IP44 (splash-proof) / IP65 (dust-tight, water-jet resistant)", alt: false },
    { param: "Housing Material", val: "Reinforced thermoplastic (PA66), impact & UV resistant", alt: true },
    { param: "Operating Temperature", val: "-25°C to +40°C", alt: false },
    { param: "Colour Coding", val: "Red (400V), IEC 60309 compliant", alt: true },
    { param: "Contact Material", val: "Brass, silver-plated", alt: false },
    { param: "Cable Entry", val: "Suitable for 35–50 mm² cable, screw terminals", alt: true },
    { param: "Certifications", val: "CE, VDE, ÖVE, SABS", alt: false },
  ];

  const useCases = [
    { icon: "🏗️", title: "Construction Sites", desc: "Main power feed to site distribution boards, tower cranes, concrete pumps" },
    { icon: "🏭", title: "Manufacturing Plants", desc: "High-load machine connections, industrial compressors, heavy motors" },
    { icon: "⚡", title: "Diesel Generator Hook-up", desc: "Temporary and standby generator to load-bank connections" },
    { icon: "🚢", title: "Marine & Offshore", desc: "Shore power connections for large vessels and rigs" },
    { icon: "⛏️", title: "Mining & Quarrying", desc: "Heavy-duty power connections for underground and surface machinery" },
    { icon: "💻", title: "Data Centres", desc: "High-current UPS and generator switching connections" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO */}
        <section className={styles.heroSection} style={{ backgroundColor: "#17293a", borderRadius: "20px", margin: "10px", width: "calc(100% - 20px)" }}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "0.8px solid rgba(249,115,22,0.3)", color: "#f97316" }}>
                  PCE Connectors
                </span>
                <h1 className={styles.heroTitle} style={{ color: "#fff" }}>
                  125A Plug & Socket <br />
                  <span className={styles.orangeText}>IP44 / IP65</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#aab0c0" }}>
                  Heavy-duty 125A industrial plug and socket set built to IEC 60309 / EN 60309 standards. Reinforced thermoplastic housing rated IP44 or IP65 for splash-proof and dust/water-jet-proof duty on construction sites, factory floors, and heavy machinery connections.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>125A</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Rated Current</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>IP44/65</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal} style={{ color: "#f97316" }}>400/500V</span>
                    <span className={styles.metaLabel} style={{ color: "#888" }}>Voltage</span>
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
                <div className={styles.heroImageWrapper} style={{ border: "5px solid #fff", borderRadius: "20px", position: "relative" }}>
                  <Image
                    src="/figma_assets/125a_plug_hero.png"
                    alt="125A industrial plug and socket, IP44/65 rated, held by a technician on a work site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-125a-plug' }}
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
                <h3>Technical Specification Sheet — 125A Plug & Socket IP44/65</h3>
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
              <h2 className={styles.mandatedTitle}>Where This Product Is Deployed</h2>
              <p className={styles.mandatedSubtitle}>Trusted across critical infrastructure and heavy industrial projects throughout India.</p>
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
