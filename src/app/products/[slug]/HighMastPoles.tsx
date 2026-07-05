import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";

export default function HighMastPolesPage() {
  const specParams = [
    { name: "Material", val: "IS 2062 Grade A Mild Steel", highlight: false },
    { name: "Surface Treatment", val: "Hot-Dip Galvanised (IS 4759), min 86 µm", highlight: true },
    { name: "Height Range", val: "9 m to 40 m (custom up to 50 m)", highlight: false },
    { name: "Shape", val: "Polygonal (8/12/16 sided) or Conical", highlight: false },
    { name: "Wall Thickness", val: "4 mm to 10 mm (height dependent)", highlight: false },
    { name: "Lamp Carriage Type", val: "Fixed / Motorised Lowering", highlight: false },
    { name: "No. of Lamp Positions", val: "4 / 6 / 8 / 10 / 12 / 16", highlight: false },
    { name: "Design Wind Speed", val: "Up to 180 km/h (IS 875 Part III)", highlight: true },
    { name: "Foundation Bolt Circle", val: "Custom per height and soil condition", highlight: false },
    { name: "Luminaire Compatibility", val: "LED Flood / HPS / MH (E40 / GU10)", highlight: false },
    { name: "Applicable Standards", val: "IS 2713, IS 4759, IS 875, IS 2062", highlight: false },
    { name: "Warranty", val: "2 Years (structural), coating as per IS 4759", highlight: false },
    { name: "Lead Time (standard)", val: "3–4 weeks from drawing approval", highlight: false }
  ];

  const features = [
    { title: "Hot-Dip Galvanised", desc: "Full zinc coating to IS 4759 standard, providing 25+ years of corrosion protection in harsh outdoor environments.", icon: "🛡️" },
    { title: "Motorised Lowering", desc: "Optional electric winch system lowers the lamp carriage to ground level for tool-free lamp replacement and maintenance.", icon: "⚙️" },
    { title: "Wind-Load Rated", desc: "Structural design certifies safe operation in wind zones up to 180 km/h, tested per IS 875 (Part III) standards.", icon: "💨" },
    { title: "IS 2713 Certified", desc: "All poles manufactured and tested to Bureau of Indian Standards specification for street and road lighting poles.", icon: "📜" },
    { title: "Custom Fabrication", desc: "Bespoke heights, arm configurations, and foundation bolt patterns manufactured to project-specific drawings.", icon: "✏️" },
    { title: "Pan-India Delivery", desc: "Logistics network covering government infrastructure projects, EPC contractors, and industrial clients across all states.", icon: "🚛" }
  ];

  const variants = [
    { height: "9", badge: "Standard", desc: "Entry Level", detail: "Suitable for small intersections, parking areas, residential colonies. 4–6 lamp positions." },
    { height: "12", badge: "Standard", desc: "Mid Range", detail: "Ideal for arterial roads, bus depots, industrial yards. 4–8 lamp positions." },
    { height: "16", badge: "Most Efficient", desc: "Standard High Mast", detail: "Highway interchanges, toll plazas, container yards. 8–12 lamp positions with motorised lowering." },
    { height: "20", badge: "Most Popular", desc: "Medium High Mast", detail: "Highway interchanges, toll plazas, container yards. 8–12 lamp positions with motorised lowering." },
    { height: "30", badge: "Heavy Duty", desc: "Tall Mast", detail: "Ports, airports, large stadiums. 12–16 lamp positions; reinforced foundation required." },
    { height: "40", badge: "Extreme", desc: "Ultra High Mast", detail: "Expressway interchanges, large airports. Custom engineering; project basis only." }
  ];

  const galleryItems = [
    { src: "/figma_assets/high_mast_gallery_1.png", alt: "Front view of high mast pole installation" },
    { src: "/figma_assets/high_mast_gallery_2.png", alt: "Close view of winch and lowering motor compartment" },
    { src: "/figma_assets/high_mast_gallery_3.png", alt: "Head frame pulley assembly and carriage detail" },
    { src: "/figma_assets/high_mast_gallery_4.png", alt: "Base plate and foundation bolt layout detail" }
  ];

  const useCases = [
    { title: "Highways & Expressways", desc: "NHAI, state highway projects, toll plazas, interchanges", icon: "🛣️" },
    { title: "Ports & Shipyards", desc: "Container yards, berth areas, industrial port zones", icon: "⚓" },
    { title: "Airports", desc: "Perimeter roads, cargo areas, aircraft parking aprons", icon: "✈️" },
    { title: "Industrial Estates", desc: "Manufacturing plants, SEZs, large logistics parks", icon: "🏭" },
    { title: "Sports Facilities", desc: "Cricket stadiums, athletics tracks, multi-purpose grounds", icon: "🏟️" },
    { title: "Railway Yards", desc: "Marshalling yards, maintenance depots, station forecourts", icon: "🚂" }
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
                <span className={styles.heroBadge}>High Mast Poles</span>
                <h1 className={styles.heroTitle}>
                  Industrial-Grade <br />
                  <span className={styles.orangeText}>High Mast Poles</span>
                </h1>
                <p className={styles.heroDesc}>
                  Engineered for highways, airports, ports, and large industrial areas. Our high mast poles deliver uniform illumination across wide areas with minimal maintenance over decades of use.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>9–40m</span>
                    <span className={styles.metaLabel}>Height Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IS 2713</span>
                    <span className={styles.metaLabel}>Certified</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>25+ yr</span>
                    <span className={styles.metaLabel}>Lifespan</span>
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
                    src="/figma_assets/high_mast_hero.png"
                    alt="Industrial-Grade High Mast Poles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-high-mast-poles' }}
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
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>Built for the Toughest Environments</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Manufactured with hot-dip galvanised mild steel and engineered to withstand wind speeds of up to 180 km/h and seismic zones IV.
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

        {/* 3. Available Models / Height Variants Section */}
        <section className={styles.variantsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Models</span>
            <h2 className={styles.sectionTitle}>Select the Right Height</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Standard heights available from stock. Non-standard heights and custom configurations on order with 3–4 week lead time.
            </p>

            <div className={styles.variantsGrid}>
              {variants.map((v, index) => (
                <div key={index} className={styles.variantCard}>
                  <div className={styles.variantHeader}>
                    <span className={styles.variantBadge}>{v.badge}</span>
                  </div>
                  <div className={styles.variantTitleBox}>
                    <span className={styles.variantHeight}>{v.height}</span>
                    <span className={styles.variantUnit}>m</span>
                  </div>
                  <h4 className={styles.variantDesc}>{v.desc}</h4>
                  <p className={styles.variantDetail}>{v.detail}</p>
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
              All technical data for our standard IS 2713-compliant high mast pole range. Custom specs available on request.
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

        {/* 5. Clean Image Gallery */}
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

        {/* 6. Use Cases Section */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Use Cases</span>
              <h2 className={styles.mandatedTitle}>Where Our Poles Are Deployed</h2>
              <p className={styles.mandatedSubtitle}>
                Trusted across critical infrastructure projects throughout India.
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
