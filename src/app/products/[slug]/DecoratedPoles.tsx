import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function DecoratedPolesPage() {
  const specParams = [
    { name: "Height Range", val: "3 m, 4 m, 5 m, 6 m, 8 m", highlight: false },
    { name: "Material", val: "Aluminium die-cast (pole shaft and ornamental components)", highlight: true },
    { name: "Design Options", val: "100+ catalogue designs — classical, oriental, contemporary, themed", highlight: false },
    { name: "Surface Finish", val: "Polyester powder coating, UV and weather-resistant", highlight: false },
    { name: "Accent Finish", val: "Brass / gold trim detailing (design dependent)", highlight: false },
    { name: "Luminaire Compatibility", val: "LED post-top lanterns, decorative glass/acrylic globes", highlight: true },
    { name: "Door Type", val: "Decorative cast-metal cover with anchor bolt access", highlight: false },
    { name: "Mounting", val: "Surface-mounted RCC foundation with anchor bolts", highlight: false },
    { name: "Bracket Style", val: "Integrated single/double arm or straight entry", highlight: false },
    { name: "Wind Load Rating", val: "Designed for 150 km/h wind load zones", highlight: false },
    { name: "Cable Entry", val: "Internal cable routing through pole shaft", highlight: false },
    { name: "Customization", val: "Custom colour, finish, and height variations available", highlight: false },
    { name: "Lead Time", val: "3-5 weeks depending on design and quantity", highlight: false }
  ];

  const features = [
    { title: "Aluminium Die-Cast Construction", desc: "Premium die-cast aluminium components deliver ornamental detailing that steel post-fabricated cannot. Superior corrosion-resistant.", icon: "🏛️" },
    { title: "100+ Heritage & Modern Designs", desc: "Choose from classic Roman, Florentine, or modern minimalist profiles. Custom design capabilities for heritage zones, gardens, and boulevards.", icon: "🎨" },
    { title: "Integrated Ornamental Bracket", desc: "Cast aluminium brackets connect the decorative head to the pole in a unified design language — not a plain steel pipe afterthought.", icon: "📐" },
    { title: "Corrosion-Resistant Finish", desc: "Polyester powder coating over die-cast aluminium resists weathering, UV fade, and salt-air exposure for longer lifespan.", icon: "🛡️" },
    { title: "Brass & Gold Trim Accents", desc: "Optional brass or gold finials and detailing add a touch of premium luxury.", icon: "✨" },
    { title: "3 m to 8 m Range", desc: "Covers pathway lighting (3m), park lighting (4-5m), and commercial avenue lighting (6-8m).", icon: "📏" }
  ];

  const sizes = [
    { height: "3", suffix: "m", tag: "Walkway", title: "Garden Pathway", desc: "Compact, ideal for garden walkways and private villas.", popular: false },
    { height: "4", suffix: "m", tag: "Township", title: "Residential Avenue", desc: "Township internal roads and residential street layouts.", popular: false },
    { height: "5", suffix: "m", tag: "Most Popular", title: "Town Square", desc: "Balanced scale for town square and plaza applications.", popular: false },
    { height: "6", suffix: "m", tag: "Avenue", title: "Commercial Boulevard", desc: "Wide, decorative street layouts with double-arm fittings.", popular: false },
    { height: "8", suffix: "m", tag: "Monumental", title: "Grand Plaza", desc: "High-end monumental/fountain placements.", popular: false }
  ];

  const useCases = [
    { title: "Heritage Zones", desc: "Historic restorations, themed streets, old-town quarters", icon: "🏛️" },
    { title: "Garden & Park Pathways", desc: "Pedestrian walkways, public parks, botanic gardens", icon: "🌳" },
    { title: "Premium Townships", desc: "Gated residential complexes, high-end private villas", icon: "🏡" },
    { title: "Hotel & Resort Driveways", desc: "Entrance roads, seaside resorts, hotel courtyards", icon: "🏨" },
    { title: "Government Plazas", desc: "Administrative centers, ceremonial squares, civic landmarks", icon: "🏛️" },
    { title: "Commercial Promenades", desc: "Shopping streets, open-air malls, pedestrian avenues", icon: "🛍️" }
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
                <span className={styles.heroBadge}>Customizable Styles</span>
                <h1 className={styles.heroTitle}>
                  Aluminium Die-Cast <br />
                  <span className={styles.orangeText}>Decorative Poles</span>
                </h1>
                <p className={styles.heroDesc}>
                  Heritage-style decorative lighting poles for landscaped roads, parks, plazas, and premium townships. Cast in aluminium for a refined, rust-free finish, available from 3 to 8 m, with over 100+ design options to match any architectural theme.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3–8 m</span>
                    <span className={styles.metaLabel}>Height Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>100+</span>
                    <span className={styles.metaLabel}>Designs</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Aluminium</span>
                    <span className={styles.metaLabel}>Material</span>
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
                <div className={styles.heroImageWrapper} style={{ borderRadius: '50px' }}>
                  <Image
                    src="/figma_assets/decorated_poles_hero.png"
                    alt="Aluminium Die-Cast Decorative Poles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-decorated-poles' }}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose These Designer Poles</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip} style={{
              backgroundColor: '#fff7f0',
              borderLeft: '4px solid #f97316',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '32px',
              fontFamily: 'var(--font-poppins)'
            }}>
              <h4 style={{ color: '#f97316', fontWeight: 700, margin: '0 0 8px 0', fontSize: '15px' }}>100+ Design Catalogue:</h4>
              <p style={{ color: '#555555', margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                From classic antique/roman look to modern contemporary profiles, our decorative pole range spans more than 100 distinct designs. Share your theme or reference image and our team will match options from our catalogue.
              </p>
            </div>

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

        {/* 3. Available Sizes Variants Section */}
        <section className={styles.sizesSection} style={{ backgroundColor: '#f0f2f8', padding: '64px 0' }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Sizes</span>
            <h2 className={styles.sectionTitle}>Select the Right Specification</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro} style={{ marginBottom: '32px' }}>
              Standard configurations shown below. Custom sizes available on request.
            </p>

            <div className={styles.variantsGrid} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px'
            }}>
              {sizes.map((sz, idx) => (
                <div
                  key={idx}
                  className={`${styles.variantCard} ${sz.popular ? styles.variantCardPopular : ""}`}
                >
                  <span className={`${styles.variantBadge} ${sz.popular ? styles.variantBadgePopular : ""}`} style={{ marginBottom: '16px', display: 'inline-block' }}>
                    {sz.tag}
                  </span>
                  <div style={{ margin: '8px 0 16px 0' }}>
                    <span style={{ fontSize: '32px', fontWeight: 700, color: '#0d0d1a' }}>{sz.height}</span>
                    <span style={{ fontSize: '15px', color: '#888888', fontWeight: 700, marginLeft: '2px' }}>{sz.suffix}</span>
                  </div>
                  <h4 style={{ color: '#555555', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0' }}>{sz.title}</h4>
                  <p style={{ color: '#999999', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>{sz.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technical Specifications Table */}
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

        {/* 5. Use Cases Section */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Use Cases</span>
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
