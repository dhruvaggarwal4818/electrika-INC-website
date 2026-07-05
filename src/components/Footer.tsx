"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { PRODUCT_CATEGORIES } from "@/data/productsData";

export default function Footer() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    productRequired: "default",
    quantity: "",
    cityState: "",
    requirement: "",
    honeypot: "", // Bot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Populate dynamic dropdown list of products
  const allProducts = PRODUCT_CATEGORIES.flatMap(cat => cat.products);

  // Set default product if on a product page
  useEffect(() => {
    const isProductPage = pathname?.startsWith("/products/");
    const currentSlug = isProductPage ? pathname.split("/").pop() : null;
    
    if (currentSlug) {
      const match = allProducts.find(p => p.slug === currentSlug);
      if (match) {
        setFormData(prev => ({ ...prev, productRequired: match.name }));
      }
    }
  }, [pathname]);

  // Determine WhatsApp URL with prefilled text depending on the active product
  const getWhatsAppUrl = () => {
    const isProductPage = pathname?.startsWith("/products/");
    const currentSlug = isProductPage ? pathname.split("/").pop() : null;
    let currentProduct = "";

    if (currentSlug) {
      const match = allProducts.find(p => p.slug === currentSlug);
      if (match) {
        currentProduct = match.name;
      }
    }

    if (currentProduct) {
      const text = `Hello,\n\nI am interested in:\n${currentProduct}\n\nPlease send quotation.`;
      return `https://wa.me/919971499542?text=${encodeURIComponent(text)}`;
    }
    return "https://wa.me/919971499542";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // 1. Client-Side Validations
    if (!formData.fullName.trim()) {
      setErrorMsg("Full Name is required.");
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg("Company Name is required.");
      return;
    }
    if (formData.productRequired === "default") {
      setErrorMsg("Please select a product from the list.");
      return;
    }
    if (!formData.requirement.trim()) {
      setErrorMsg("Please describe your requirement.");
      return;
    }

    // Indian Phone Number check (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMsg("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Prevent duplicate submissions via local storage rate limiter
    const lastSubmission = localStorage.getItem("last_lead_submission");
    const now = Date.now();
    if (lastSubmission && now - parseInt(lastSubmission) < 15000) {
      setErrorMsg("You have recently submitted an enquiry. Please wait 15 seconds.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: window.location.href,
          websiteUrl: window.location.origin,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      // Success
      localStorage.setItem("last_lead_submission", now.toString());
      setSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        emailAddress: "",
        productRequired: "default",
        quantity: "",
        cityState: "",
        requirement: "",
        honeypot: "",
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Submission failed. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.footerWrapper}>
      {/* 1. CTA Banner Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaBgImageContainer}>
          <Image
            src="/figma_assets/e96368a1c2720a5f3db1157ebf32107daa298d88.png"
            alt="Supply Partner call-to-action background"
            fill
            className={styles.ctaBgImage}
          />
        </div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Your Supply Partner <span className={styles.lightText}>is</span>{" "}
              <span className={styles.gradientText}>One Call Away</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Formal quotation for your project within 24 hours — bulk orders welcome.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a
              href="#enquiry-form"
              className={styles.ctaBtnPrimary}
              style={{
                backgroundImage: "url('/figma_assets/f0788b8c49f1b93f939000c8259adc91ee92a9cb.png')",
              }}
            >
              Get a Quote Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnSecondary}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. Enquiry Form Section */}
      <section id="enquiry-form" className={styles.enquirySection} aria-labelledby="enquiry-heading">
        <div className={styles.enquiryHeader}>
          <p className={styles.enquiryEyebrow}>Quick Enquiry</p>
          <h2 id="enquiry-heading" className={styles.enquiryTitle}>
            Need Help Choosing the Right Product?
          </h2>
          <p className={styles.enquirySubtitle}>
            We respond with specs and pricing within 24 hours.
          </p>
        </div>

        <div className={styles.formContainer}>
          {submitted ? (
            <div className={styles.successMessage} role="alert">
              <span className={styles.successIcon}>✓</span>
              <h3>Thank You!</h3>
              <p>Your enquiry has been submitted successfully.</p>
              <p>Our technical team will contact you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className={styles.submitAgainBtn}>
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {errorMsg && (
                <div style={{ color: "#ef4444", fontSize: "13px", fontWeight: 600, padding: "8px", backgroundColor: "#fef2f2", borderRadius: "6px", border: "1px solid #fee2e2" }}>
                  ⚠️ {errorMsg}
                </div>
              )}
              
              {/* Honeypot Field (Spambots check) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name (Required)
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.inputField}
                    aria-required="true"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="companyName" className="sr-only">
                    Company Name (Required)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={styles.inputField}
                    aria-required="true"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number (Required)
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    placeholder="Phone Number (10 digits)"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={styles.inputField}
                    aria-required="true"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="emailAddress" className="sr-only">
                    Email Address (Required)
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    required
                    placeholder="Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className={styles.inputField}
                    aria-required="true"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup} style={{ flex: 2 }} ref={dropdownRef}>
                  <label htmlFor="productRequired" className="sr-only">
                    Product Required (Required)
                  </label>
                  <div className={styles.customSelectContainer}>
                    <div 
                      className={`${styles.customSelectHeader} ${isDropdownOpen ? styles.customSelectHeaderActive : ""}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>
                        {formData.productRequired === "default" 
                          ? "Select Product Required" 
                          : formData.productRequired}
                      </span>
                      <span className={`${styles.customSelectArrow} ${isDropdownOpen ? styles.customSelectArrowOpen : ""}`}>
                        ▼
                      </span>
                    </div>
                    
                    <div className={`${styles.customSelectOptions} ${isDropdownOpen ? styles.customSelectOptionsOpen : ""}`}>
                      <div 
                        className={`${styles.customSelectOption} ${formData.productRequired === "default" ? styles.customSelectOptionSelected : ""}`}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, productRequired: "default" }));
                          setIsDropdownOpen(false);
                        }}
                      >
                        Select Product Required
                      </div>
                      {allProducts.map((prod, idx) => (
                        <div 
                          key={idx}
                          className={`${styles.customSelectOption} ${formData.productRequired === prod.name ? styles.customSelectOptionSelected : ""}`}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, productRequired: prod.name }));
                            setIsDropdownOpen(false);
                          }}
                        >
                          {prod.name}
                        </div>
                      ))}
                      <div 
                        className={`${styles.customSelectOption} ${formData.productRequired === "Other / Not Listed" ? styles.customSelectOptionSelected : ""}`}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, productRequired: "Other / Not Listed" }));
                          setIsDropdownOpen(false);
                        }}
                      >
                        Other / Not Listed
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputGroup} style={{ flex: 1 }}>
                  <label htmlFor="quantity" className="sr-only">
                    Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="cityState" className="sr-only">
                  City / State
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  placeholder="City / State"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  className={styles.inputField}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="requirement" className="sr-only">
                  Describe your requirement (Required)
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  required
                  placeholder="Describe your requirement — details, custom sizes, delivery instructions..."
                  value={formData.requirement}
                  onChange={handleInputChange}
                  className={styles.textareaField}
                  rows={4}
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={styles.submitBtn}
                style={{
                  backgroundImage: "url('/figma_assets/be57c2526f2a879a1eb09e1d1b5770b7542185bb.png')",
                }}
              >
                {submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY →"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. Core Corporate Footer */}
      <footer className={styles.coreFooter} role="contentinfo">
        <div className={styles.footerGrid}>
          {/* Company Intro */}
          <div className={styles.footerIntro}>
            <Link href="/" className={styles.footerLogoLink}>
              <Image
                src="/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png"
                alt="Electrika INC Footer Logo"
                width={220}
                height={66}
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.footerDesc}>
              Industrial electrical supplier for contractors, government departments, and infrastructure projects across India since 2002.
            </p>
            <div className={styles.socialLinks} aria-label="Social media links">
              <a
                href="https://instagram.com/electrikainc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Follow us on Instagram"
              >
                📷
              </a>
              <a
                href="https://linkedin.com/company/electrika-inc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Connect with us on LinkedIn"
              >
                💼
              </a>
              <a
                href="https://wa.me/919971499542"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Chat with us on WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Navigate</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/#products" className={styles.columnLink}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#brands" className={styles.columnLink}>
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={styles.columnLink}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about-us" className={styles.columnLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#enquiry-form" className={styles.columnLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Products</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/products/high-mast-poles" className={styles.columnLink}>
                  High Mast Poles
                </Link>
              </li>
              <li>
                <Link href="/products/flp-led-highbay" className={styles.columnLink}>
                  LED Lighting
                </Link>
              </li>
              <li>
                <Link href="/products/solar-street-light" className={styles.columnLink}>
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/pce-plug-socket" className={styles.columnLink}>
                  PCE Connectors
                </Link>
              </li>
              <li>
                <Link href="/products/hensel-boxes" className={styles.columnLink}>
                  Hensel Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactDetails}>
              <li className={styles.contactInfoLine}>
                📞 +91 9971499542, 9818079762, 9871714055
              </li>
              <li className={styles.contactInfoLine}>
                ✉️ Electrikainc@gmail.com
              </li>
              <li className={styles.addressLine}>
                📍{" "}
                <a
                  href="https://www.google.com/maps/place/Electrika+Inc/@28.4582633,77.02649,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  L-01 Radha Palace, Gurudwara Road, Sadar bazaar Haryana, India - 122001
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Electrika INC. All rights reserved.
          </p>
          <div className={styles.badges}>
            <div className={styles.badgeGst}>GST REGISTERED</div>
            <div className={styles.badgeMakeInIndia}>MAKE IN INDIA</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
