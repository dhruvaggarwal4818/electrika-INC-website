import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function FloodLightPage() {
  const specParams = [
    { name: "Power Range", val: "10W to 500W", highlight: false },
    { name: "Luminous Efficacy", val: "130–160 lm/W", highlight: true },
    { name: "Colour Temperature", val: "3000K / 4000K / 5000K / 6500K", highlight: false },
    { name: "CRI", val: "≥ 80 Ra", highlight: false },
    { name: "Input Voltage", val: "85–265V AC, 50 Hz", highlight: false },
    { name: "Power Factor", val: "≥ 0.95", highlight: false },
    { name: "THD", val: "< 10%", highlight: false },
    { name: "IP Rating", val: "IP65 / IP66 (model specific)", highlight: true },
    { name: "IK Rating", val: "IK08 (impact resistant)", highlight: false },
    { name: "Operating Temperature", val: "-20°C to +55°C", highlight: false },
    { name: "Housing", val: "Die-cast aluminium, powder coated", highlight: false },
    { name: "Warranty", val: "5 Years (driver + module)", highlight: false },
    { name: "Certifications", val: "BIS, CE, RoHS", highlight: false }
  ];

  const features = [
    { title: "Energy Efficiency", desc: "Up to 160 lm/W efficacy. Reduce energy bills by 60–70% compared to traditional HPS or MH luminaires.", icon: "⚡" },
    { title: "Long Service Life", desc: "L70 rated at 50,000+ hours. Drastically reduces maintenance frequency and replacement costs.", icon: "⏳" },
    { title: "IP65 / IP66 Rated", desc: "Dust-tight and jet-water resistant enclosures suitable for harsh industrial and outdoor environments.", icon: "🛡️" },
    { title: "Wide Voltage Range", desc: "Compatible with 85–265V AC input. Suitable for fluctuating Indian grid conditions without additional stabilisers.", icon: "🔌" },
    { title: "5-Year Warranty", desc: "Full fixture warranty covering driver, LED module, and housing against manufacturing defects.", icon: "✅" },
    { title: "EESL / BEE Compliant", desc: "Products meet Bureau of Energy Efficiency norms for government tender eligibility and EESL procurement.", icon: "🏆" }
  ];

  const galleryItems = [
    { src: "/figma_assets/flood_light_gallery_front.png", alt: "Front view of industrial LED flood light" },
    { src: "/figma_assets/flood_light_gallery_housing.png", alt: "Close view of flood light housing" },
    { src: "/figma_assets/flood_light_gallery_lens.png", alt: "Lens and reflector detail of flood light" },
    { src: "/figma_assets/flood_light_gallery_bracket.png", alt: "Bracket detail of industrial flood light" }
  ];

  const useCases = [
    { title: "Warehouses & Factories", desc: "High bay and low bay fittings for industrial interiors", icon: "🏭" },
    { title: "Street & Road Lighting", desc: "IS 1944 compliant street light heads, 30W–200W", icon: "🛣️" },
    { title: "Floodlighting", desc: "Sports grounds, perimeter security, building facades", icon: "🏟️" },
    { title: "Canopy Lighting", desc: "Petrol stations, parking structures, underpasses", icon: "⛽" },
    { title: "Office & Commercial", desc: "Panel lights, downlights, troffer replacements", icon: "🏢" },
    { title: "Cold Storage", desc: "Specialist low-temperature LED fittings to -30°C", icon: "❄️" }
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
                <span className={styles.heroBadge}>LED Lighting</span>
                <h1 className={styles.heroTitle}>
                  Industrial & Commercial <br />
                  <span className={styles.orangeText}>LED Flood Lighting</span>
                </h1>
                <p className={styles.heroDesc}>
                  Energy-efficient LED luminaires engineered for warehouses, factories, roads, and outdoor spaces. Cut your power costs by up to 70% while achieving superior lux levels and 50,000+ hour lifespan.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>70%</span>
                    <span className={styles.metaLabel}>Energy Savings</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>50K hr</span>
                    <span className={styles.metaLabel}>Lifespan</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP65+</span>
                    <span className={styles.metaLabel}>Protection</span>
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
                    src="/figma_assets/flood_light_hero.png"
                    alt="Industrial & Commercial LED Flood Lighting Enclosure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-flood-light' }}
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
            <h2 className={styles.sectionTitle}>Built for safety, visibility, and long service life</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India logistics.
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

        {/* 3. Technical Specifications Table */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Full technical data sheet. Download available on request after enquiry submission.
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

        {/* 4. Professional Product Views Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#ff8b2c' }}>Image Gallery</span>
            <h2 className={styles.sectionTitle}>Professional product views</h2>
            <div className={styles.accentLine} style={{ backgroundColor: '#ff8b2c' }}></div>

            <div className={styles.galleryGrid}>
              {galleryItems.map((item, index) => (
                <div key={index} className={styles.galleryItemCard}>
                  <div className={styles.galleryImageWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 370px"
                      className={styles.galleryImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Use Cases Section */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Use Cases</span>
              <h2 className={styles.mandatedTitle}>Where Our Products Are Deployed</h2>
              <p className={styles.mandatedSubtitle}>
                Trusted across critical infrastructure and commercial projects throughout India.
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
