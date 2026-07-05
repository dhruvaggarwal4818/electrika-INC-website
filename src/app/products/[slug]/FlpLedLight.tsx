import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function FlpLedLightPage() {
  const specParams = [
    { name: "FLP / ATEX Zone Approx", val: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db (IECEx/ATEX/IS 2148)", highlight: true },
    { name: "IP Rating", val: "IP65 / IP66 — Dust tight, water-jet resistant", highlight: false },
    { name: "Wattage", val: "18W / 20W (variants for 2-ft and 4-ft LED lamp)", highlight: false },
    { name: "Lumen Flux", val: "1800–2200 lm typical (depending on variant)", highlight: false },
    { name: "Colour Temp", val: "4000K (neutral white) / 6500K (cool white) available", highlight: false },
    { name: "Ambient Tolerance", val: "-20°C to +40°C standard (extended range on request)", highlight: false },
    { name: "IK Rating", val: "IK08", highlight: false },
    { name: "Voltage Tolerance", val: "220–240V AC (50Hz); wide-input version on request", highlight: false },
    { name: "Enclosure Material", val: "Die-cast aluminium body, borosilicate glass tube, SS cage guard", highlight: false },
    { name: "Certifications", val: "IS 2148 / BIS certified; ATEX, IECEx on select models", highlight: true },
    { name: "Cable Entry", val: "M20 × 1.5 cable gland (included)", highlight: false },
    { name: "Key Use Restriction", val: "Do not use and mis-declared standard LED fittings in flammable gas zones", highlight: false },
    { name: "List Speed", val: "Typically in stock; ISI-marked variants, 1–2 weeks lead time", highlight: false }
  ];

  const constructionDetails = [
    "Die-cast LM6 aluminium alloy body — the same alloy used in heavy-duty Ex d enclosures — provides corrosion resistance and heat dissipation.",
    "Borosilicate glass tube protects the LED lamp from chemical attack and physical impact, rated to handle temperatures from -20°C to +80°C without deformation.",
    "Stainless steel wire cage guard protects the glass tube from accidental mechanical impact — a mandatory protective guard for glass-enclosed Ex fittings.",
    "Explosion-proof flameproof cap (gland cap) on both ends prevents any internal ignition from escaping the enclosure, meeting Ex d criteria.",
    "M20 × 1.5 threaded cable gland included for secure, zone-rated cable entry."
  ];

  const features = [
    { title: "Ex d IIC T6 / Zone 1 Rated", desc: "Certified for use in Zone 1 (IEC) and Div 1 (NEC) flammable gas atmospheres. Suitable for Group IIC (hydrogen) the highest-risk gas group.", icon: "🔥" },
    { title: "IP65 Weatherproof & Dustproof", desc: "Fully sealed enclosure keeps out dust and high-pressure water jets — built for process plant areas, outdoor canopies, and wet zones.", icon: "💧" },
    { title: "LM6 Aluminium Alloy Body", desc: "The enclosure is die-cast from LM6 aluminium alloy — the same corrosion-resistant alloy used in heavy Ex d junction boxes and motor terminal boxes.", icon: "🏭" },
    { title: "LED + Cage Guard Assembly", desc: "T8 LED tube + borosilicate glass sleeve + SS cage guard in a single integrated assembly for quick lamp change without disturbing the explosion-proof sealing.", icon: "⚡" },
    { title: "Wide Ambient Range", desc: "Operating range -20°C to +40°C standard; T6 temperature class ensures surface temperature stays below 85°C — safe in hydrogen / acetylene atmospheres.", icon: "🌡️" },
    { title: "BIS / IS 2148 Certified", desc: "Mandatory IS 2148 certification for Indian petrochemical, refinery and pharmaceutical plants. Also available with IECEx and ATEX marks for export projects.", icon: "✅" }
  ];

  const zones = [
    { zone: "Zone 1", desc: "Flammable gas present intermittently in normal operation", color: "#dc2626", bg: "rgba(220,38,38,0.06)", border: "rgba(220,38,38,0.2)", status: "✓ Suitable" },
    { zone: "Zone 2", desc: "Gas present only in abnormal or fault conditions", color: "#f97316", bg: "rgba(249,115,22,0.06)", border: "rgba(249,115,22,0.25)", status: "✓ Suitable" },
    { zone: "Zone 21", desc: "Combustible dust present intermittently in normal operation", color: "#eab308", bg: "rgba(234,179,8,0.06)", border: "rgba(234,179,8,0.25)", status: "✓ Suitable (tb)" },
    { zone: "Zone 0", desc: "Continuously flammable atmosphere — requires Ex ia (intrinsic safety)", color: "#22c55e", bg: "rgba(34,197,94,0.06)", border: "rgba(34,197,94,0.2)", status: "✗ Not recommended" }
  ];

  const useCases = [
    { title: "Oil & Gas Platforms", desc: "Offshore/onshore platforms, pump rooms, gas compression stations", icon: "🛢️" },
    { title: "Refineries & Petrochemical Plants", desc: "Process areas, tank farms, pump houses, loading bays", icon: "🏭" },
    { title: "Paint & Solvent Factories", desc: "Spray booths, solvent storage areas, paint mixing rooms", icon: "🎨" },
    { title: "Pharmaceutical Plants", desc: "Ethanol mixing, solvent recovery, distillation areas", icon: "💊" },
    { title: "Large-Format Grain Silos", desc: "Grain dust zones requiring IK08-rated dustproof lighting", icon: "🌾" },
    { title: "Mining & Explosives Zones", desc: "Underground tunnels, blasting areas, mine galleries", icon: "⛏️" }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* Warning Compliance Banner */}
        <div className={styles.warningStrip}>
          <div className={styles.warningInner}>
            <span className={styles.warningIcon}>⚠️</span>
            <p className={styles.warningText}>
              <span className={styles.warningHighlight}>SAFETY COMPLIANCE:</span>
              Zone 1 / Zone 2 / Zone 21 (Gas & Dust) · Ex d IIC T6 Gb Certified · IS 2148 BIS Mark · IP65 Sealed
            </p>
          </div>
        </div>

        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Flameproof Lighting</span>
                <h1 className={styles.heroTitle}>
                  Flameproof <br />
                  <span className={styles.orangeText}>LED Tube Light</span>
                </h1>
                <p className={styles.heroDesc}>
                  Hazardous-area LED tube fittings engineered for explosive atmospheres — oil and gas, petrochemical, paint and solvent, pharmaceutical, and mining environments. Certified Ex d IIC T6 Gb (flameproof) and IP65-rated, this fitting replaces conventional fluorescent FLP luminaires with a modern LED source.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Zone 1/2</span>
                    <span className={styles.metaLabel}>Rated</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP65</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IS 2148</span>
                    <span className={styles.metaLabel}>Certified</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>LED+</span>
                    <span className={styles.metaLabel}>Low Watts</span>
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
                <div className={styles.heroImageWrapper} style={{ borderRadius: '16px' }}>
                  <Image
                    src="/figma_assets/flp_tube_light_hero.png"
                    alt="Flameproof LED Tube Light"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-flp-led-light' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What Does Flameproof Mean? */}
        <section className={styles.advantagesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Context</span>
            <h2 className={styles.sectionTitle}>What Does "Flameproof" Actually Mean?</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Most people confuse "weatherproof" (IP65) with "flameproof" (Ex d). They are different protection classes serving different hazards. A flameproof enclosure contains any internal ignition and prevents flame from escaping into the surrounding atmosphere — even in Zone 1 hydrogen-rich environments.
            </p>

            <div className={styles.advantagesGrid}>
              <div>
                <div className={styles.advantageBlock}>
                  <div style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', border: '2px solid #222' }}>
                    <Image
                      src="/figma_assets/flp_tube_light_detail.png"
                      alt="FLP LED Tube Light — detailed product shot"
                      fill
                      sizes="600px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className={styles.advantageTitle}>Key Construction Details:</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {constructionDetails.map((detail, i) => (
                    <li key={i} style={{ fontFamily: 'var(--font-poppins)', fontSize: '13.5px', lineHeight: 1.65, color: '#444', display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#f97316', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Zone Classification */}
        <section className={styles.complianceSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Hazardous Area Classification</span>
            <h2 className={styles.sectionTitle}>Which Zone Is Your Site?</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Zone classification determines which protection method is needed. Match your site's zone to the correct protection class before ordering.
            </p>

            <div className={styles.zonesGrid}>
              {zones.map((z, idx) => (
                <div key={idx} className={styles.zoneCard} style={{ backgroundColor: z.bg, border: `0.8px solid ${z.border}` }}>
                  <div className={styles.zoneHeader}>
                    <span className={styles.zoneDot} style={{ backgroundColor: z.color }}></span>
                    <span className={styles.zoneName}>{z.zone}</span>
                  </div>
                  <span className={styles.zoneSub} style={{ color: z.color }}>{z.status}</span>
                  <p className={styles.zoneDesc}>{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Key Features Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Built for Where Ordinary Lights Cannot Go</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Engineered for process plants, refineries, glass facilities, and anywhere an ordinary LED fitting would be a safety violation.
            </p>

            <div className={styles.featuresGrid6}>
              {features.map((feat, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{feat.icon}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Technical Specifications Table */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer drawings and datasheets available on request after enquiry.
            </p>

            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <h3>Technical Specification Sheet — Flameproof 2ft Tube Light</h3>
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
                      <td className={param.highlight ? styles.paramValHighlight : styles.paramVal}>
                        {param.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. Use Cases / Mandated Section */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Where This Luminaire Is Mandated</span>
              <h2 className={styles.mandatedTitle}>Where This Product Is Used</h2>
              <p className={styles.mandatedSubtitle}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {useCases.map((use, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span className={styles.appIcon}>{use.icon}</span>
                  </div>
                  <h4 className={styles.appTitle}>{use.title}</h4>
                  <p className={styles.appDesc}>{use.desc}</p>
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
