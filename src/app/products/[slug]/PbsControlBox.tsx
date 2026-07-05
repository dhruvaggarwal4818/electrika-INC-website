import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pbs-control-box.module.css";

export default function PbsControlBoxPage() {
  const specParams = [
    { name: "Configuration", val: "Fully customizable per project SLD / requirement" },
    { name: "Enclosure Type", val: "Wall-mounted, multi-compartment" },
    { name: "Material", val: "Polycarbonate / mild steel powder-coated (site dependent)" },
    { name: "IP Rating", val: "IP54 / IP65 (configurable)" },
    { name: "Metering", val: "Single or multi-feeder energy meter chambers" },
    { name: "Control Devices", val: "Push buttons, selector switches, emergency stop" },
    { name: "Indication", val: "LED pilot lamps — red, yellow, blue, green" },
    { name: "Protection Devices", val: "MCB / MCCB / RCCB as per load schedule" },
    { name: "Busbar", val: "Copper/aluminium busbar sized to project load" },
    { name: "Cable Entry", val: "Bottom/top gland plate, configurable" },
    { name: "Door", val: "Hinged with viewing window and lock provision" },
    { name: "Operating Temperature", val: "-10°C to +55°C" },
    { name: "Testing", val: "100% factory tested before dispatch" },
    { name: "Lead Time", val: "2–4 weeks depending on configuration complexity" },
  ];

  const features = [
    {
      iconFallback: "⚙️",
      title: "Fully Customizable Layout",
      desc: "Internal compartmentalisation, meter count, control devices, and busbar configuration are built to your exact single-line diagram and site requirement — no fixed catalogue limitation.",
    },
    {
      iconFallback: "⚡",
      title: "Integrated Metering",
      desc: "Multi-tenant or multi-feeder energy metering compartments with individual meter windows, isolators, and CT chambers — common on shared infrastructure and government installations.",
    },
    {
      iconFallback: "🔴",
      title: "Push-Button & Indicator Controls",
      desc: "Front-panel mounted start/stop push buttons, emergency stop, and multi-colour pilot lamps (red/yellow/blue/green) for clear operational status at a glance.",
    },
    {
      iconFallback: "🔍",
      title: "Transparent Inspection Windows",
      desc: "Polycarbonate viewing windows allow visual inspection of meters and indicators without opening the enclosure — supports tamper-evident, audit-friendly installations.",
    },
    {
      iconFallback: "🌧️",
      title: "Weatherproof Construction",
      desc: "Outdoor-rated enclosure construction suitable for wall-mounted installation in factories, utility yards, and exposed site locations.",
    },
    {
      iconFallback: "✅",
      title: "Factory Tested Before Dispatch",
      desc: "Each panel is wired, functionally tested, and inspected at our facility before dispatch — minimising on-site commissioning time and rework.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>Customizable Control Panel</div>
                <h1 className={styles.heroTitle}>
                  PBS Power &amp; Control <br />
                  <span className={styles.orangeText}>Panel Box — Customizable</span>
                </h1>
                <p className={styles.heroDesc}>
                  Fully customizable PBS-series control and metering panel boxes built for site-specific requirements. Configure metering, push-button controls, indicator lamps, and protection devices exactly as your project demands — supplied factory-wired and ready to commission.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Custom Built</span>
                    <span className={styles.metaLabel}>Configuration</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP-Rated</span>
                    <span className={styles.metaLabel}>Enclosure</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Site Tested</span>
                    <span className={styles.metaLabel}>Pre-Commissioned</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>24hr</span>
                    <span className={styles.metaLabel}>Quote TAT</span>
                  </div>
                </div>

                <div className={styles.heroActions}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>
                    Request Quotation →
                  </a>
                  <a href="#specifications" className={styles.btnSecondary}>
                    View Specifications
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets_120/0974c8596a588eb83994a8b16a3c0cc5d8f42ffa.png"
                    alt="PBS Control Panel Box"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-pbs-control-box' }}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose Electrika Inc.</h2>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip}>
              <strong>Built Around Your Requirement:</strong>
              <p>Every PBS panel is configured to the specific metering, control, and protection scope of your project — number of meters, MCB/MCCB ratings, indicator and push-button layout, and busbar arrangement are all customizable. Share your single-line diagram (SLD) or requirement and we will configure and quote accordingly.</p>
            </div>

            <div className={styles.featuresGrid}>
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{f.iconFallback}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.featuresGridBottom}>
              {features.slice(4, 6).map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{f.iconFallback}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Specifications */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer drawings and datasheets available on request after enquiry.
            </p>

            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <span>📋</span>
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
                  {specParams.map((param, index) => (
                    <tr key={index} className={index % 2 === 1 ? styles.altRow : ""}>
                      <td className={styles.paramName}>{param.name}</td>
                      <td className={styles.paramVal}>{param.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. Quick Enquiry */}
        <section id="enquiry-form" style={{ backgroundColor: "#ffffff", borderTop: "0.8px solid #e8ecf0", padding: "80px 0" }}>
          <div className={styles.container} style={{ maxWidth: "700px", textAlign: "center" }}>
            <span className={styles.sectionEyebrow}>Quick Enquiry</span>
            <h2 className={styles.sectionTitle} style={{ color: "#0d0d1a" }}>Need Help Choosing the Right Product?</h2>
            <p className={styles.sectionIntro} style={{ marginBottom: "40px" }}>
              We respond with specs and pricing within 24 hours.
            </p>
            <div style={{ backgroundColor: "#f7f8fa", border: "0.8px solid #e8ecf0", borderRadius: "14px", padding: "36px", boxShadow: "0 8px 12px rgba(0,0,0,0.11)", textAlign: "left" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                <input type="text" placeholder="Full Name" style={{ height: "44px", padding: "0 16px", border: "0.8px solid #e8ecf0", borderRadius: "8px", outline: "none", width: "100%" }} />
                <input type="tel" placeholder="Phone Number" style={{ height: "44px", padding: "0 16px", border: "0.8px solid #e8ecf0", borderRadius: "8px", outline: "none", width: "100%" }} />
              </div>
              <input type="email" placeholder="Email Address" style={{ height: "44px", padding: "0 16px", border: "0.8px solid #e8ecf0", borderRadius: "8px", outline: "none", width: "100%", marginBottom: "12px" }} />
              <textarea placeholder="Describe your requirement..." rows={3} style={{ width: "100%", padding: "12px 16px", border: "0.8px solid #e8ecf0", borderRadius: "8px", outline: "none", marginBottom: "12px", resize: "vertical" }}></textarea>
              <button style={{ width: "100%", height: "49px", background: "linear-gradient(168.5deg, #1a9fd8 14.6%, #e8933a 85.4%)", color: "#ffffff", fontWeight: 700, borderRadius: "9px", border: "none", cursor: "pointer" }}>
                SUBMIT ENQUIRY →
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
