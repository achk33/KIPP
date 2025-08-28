'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 1000);
    }

    // Menu functionality
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn?.querySelector("i");

    if (menuBtn && navLinks && menuBtnIcon) {
      const handleMenuClick = () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
      };

      const handleNavLinksClick = () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
      };

      menuBtn.addEventListener("click", handleMenuClick);
      navLinks.addEventListener("click", handleNavLinksClick);

      return () => {
        menuBtn.removeEventListener("click", handleMenuClick);
        navLinks.removeEventListener("click", handleNavLinksClick);
      };
    }
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader" id="preloader">
        <div className="loader"></div>
      </div>

      <header>
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="/" title="KIPP Home">
                <img src="/assets/11.png" alt="KIPP Logo" className="nav__logo__img"/>
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#rent">Works</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#ride">Ride</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav__btns">
          </div>
        </nav>
        
        {/* Theme Toggle Button - Fixed Position Top Right */}
        <button className="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
          <i className="ri-sun-line" id="theme-icon"></i>
        </button>
        
        <div className="section__container header__container" id="home">
          <div className="header__image">
            <img src="/assets/header.png" alt="KIPP Robot Assistant" className="header__robot"/>
          </div>
          <div className="header__content">
            <h1>Meet KIPP: Your Intelligent Robot Assistant</h1>
            <p>
              Revolutionizing event experiences with cutting-edge AI technology. KIPP provides real-time navigation, personalized assistance, and seamless interactions to elevate every gathering into an extraordinary experience.
            </p>
            <div className="header__actions">
              <div className="header__buttons">
                <a href="#service" className="btn">Request Demo</a>
                <a href="#rent" className="btn btn__secondary">Learn More</a>
              </div>
              <div className="header__links">
                <a href="#">
                  <img src="/assets/store.png" alt="Download from App Store" />
                </a>
                <a href="#">
                  <img src="/assets/play.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section__container steps__container" id="rent">
        <p className="section__subheader">HOW IT WORKS</p>
        <h2 className="section__header">KIPP&apos;s following 3 working steps</h2>
        <div className="steps__grid">
          <div className="steps__card">
            <span><i className="ri-bookmark-3-fill"></i></span>
            <h4>AI-Powered Interaction</h4>
            <p>
              Kipp engages with attendees through intuitive voice commands or touch interfaces. Visitors can ask Kipp questions, seek
              directions, or request information about the event, exhibitors, or schedule.
            </p>
          </div>
          <div className="steps__card">
            <span><i className="ri-calendar-check-fill"></i></span>
            <h4>Real-Time Navigation</h4>
            <p>
            Using advanced navigation systems, Kipp can move around the event venue autonomously. It guides attendees to their
            desired locations, such as specific booths, conference rooms, or amenities, ensuring they never feel lost.
            </p>
          </div>
          <div className="steps__card">
            <span><i className="ri-map-pin-fill"></i></span>
            <h4>Personalized Assistance</h4>
            <p>
              Kipp&apos;s AI learns from interactions, allowing it to offer personalized suggestions based on attendees&apos; interests or past
              queries. This customization enhances the visitor experience, making each interaction more relevant and helpful.
            </p>
          </div>
        </div>
      </section>

      {/* KIPP Showcase Section */}
      <section className="section__container showcase__container">
        <p className="section__subheader">KIPP IN ACTION</p>
        <h2 className="section__header">See KIPP Transform Events</h2>
        <div className="showcase__grid">
          <div className="showcase__card">
            <div className="showcase__image">
              <img src="/1.jpg" alt="KIPP Robot Assistant in action at an event" />
            </div>
            <div className="showcase__content">
              <h3>Interactive Event Assistance</h3>
              <p>Watch KIPP seamlessly guide attendees and provide real-time information at live events.</p>
            </div>
          </div>
          <div className="showcase__card">
            <div className="showcase__image">
              <img src="/2.jpg" alt="KIPP Robot providing personalized assistance" />
            </div>
            <div className="showcase__content">
              <h3>Advanced AI Navigation</h3>
              <p>Experience how KIPP&apos;s intelligent navigation system helps visitors find exactly what they&apos;re looking for.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container service__container" id="service">
        <div className="service__image">
          <img src="/assets/service.png" alt="service" />
        </div>
        <div className="service__content">
          <p className="section__subheader">BEST SERVICES</p>
          <h2 className="section__header">
          Experience Seamless Events with Kipp&apos;s Smart Assistance
          </h2>
          <ul className="service__list">
            <li>
              <span><i className="ri-price-tag-3-fill"></i></span>
              <div>
                <h4>Tailored Solutions for Every Occasion</h4>
                <p>
                Whether it&apos;s a large conference or an intimate gathering, Kipp adapts to your event, ensuring seamless navigation and
                personalized interaction for every guest.
                </p>
              </div>
            </li>
            <li>
              <span><i className="ri-wallet-fill"></i></span>
              <div>
                <h4>Cutting-Edge Technology</h4>
                <p>
                  With Kipp, you&apos;re investing in the latest AI and navigation technology, ensuring your event is supported by the most
                  advanced tools available.
                </p>
              </div>
            </li>
            <li>
              <span><i className="ri-customer-service-fill"></i></span>
              <div>
                <h4>Reliable Support Anytime</h4>
                <p>
                Our team is available around the clock to assist with any setup or operational questions, guaranteeing that Kipp
                performs flawlessly throughout your event.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section__container experience__container" id="ride">
        <p className="section__subheader">CUSTOMER EXPERIENCE</p>
        <h2 className="section__header">
      Delivering exceptional events with Kipp&apos;s smart assistance
        </h2>
        <div className="experience__content">
          <div className="experience__card">
            <span><i className="ri-price-tag-3-fill"></i></span>
            <h4>Customizable Features</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-money-rupee-circle-fill"></i></span>
            <h4>Affordable Solutions</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-bank-card-fill"></i></span>
            <h4>Advanced Technology</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-award-fill"></i></span>
            <h4>Exceptional Event Support</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-customer-service-2-fill"></i></span>
            <h4>24/7 Technical Support</h4>
          </div>
          <div className="experience__card">
            <span><i className="ri-robot-line"></i></span>
            <h4>Seamless Integration</h4>
          </div>
          <img src="/assets/experience.png" alt="experience" />
        </div>
      </section>

      <section className="section__container download__container" id="contact">
        <div className="download__grid">
          <div className="download__content">
            <h2 className="section__header">CONTACT US</h2>
            <h2 className="section__header">Phone: +212 642-033050</h2>
            <p>
            Feel free to add additional contact details like email addresses or office hours if needed!
            </p>
            
          </div>
          <div className="download__image">
            <img src="/assets/download.png" alt="download" />
          </div>
        </div>
      </section>

      <footer>
        <div className="section__container footer__container">
          <div className="footer__col">
            <h4>Our Solutions</h4>
            <ul className="footer__links">
              <li><a href="#">Team</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Robots</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>About KIPP</h4>
            <ul className="footer__links">
              <li><a href="#">Why Kipp</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Partner With Us</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            <ul className="footer__links">
              <li><a href="#">Download</a></li>
              <li><a href="#">Support Centers</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Partner Network</a></li>
              <li><a href="#">Engineers</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Extras</h4>
            <ul className="footer__links">
              <li><a href="#">Service Options</a></li>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">Explore Solutions</a></li>
              <li><a href="#">Partner Opportunities</a></li>
              <li><a href="#">Latest Updates</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <h4>KIPP</h4>
          <p>Copyright © 2024. All rights reserved.</p>
          <ul className="footer__socials">
            <li>
              <a href="https://x.com/Achraf_chky" title="Follow us on X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/achk33" title="View our GitHub"><i className="ri-github-fill"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/achraf-chaouki/" title="Connect on LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Scripts */}
      <Script src="https://unpkg.com/scrollreveal" strategy="afterInteractive" />
      <Script id="main-script" strategy="afterInteractive">
        {`
          // Theme Toggle Functionality
          const themeToggle = document.getElementById("theme-toggle");
          const themeIcon = themeToggle?.querySelector("i");

          // Check for saved theme preference or default to dark mode
          const currentTheme = localStorage.getItem("theme") || "dark";
          document.documentElement.setAttribute("data-theme", currentTheme);

          // Update icon based on current theme
          if (currentTheme === "light") {
            themeIcon?.setAttribute("class", "ri-moon-line");
          } else {
            themeIcon?.setAttribute("class", "ri-sun-line");
          }

          themeToggle?.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            
            // Update icon
            if (newTheme === "light") {
              themeIcon?.setAttribute("class", "ri-moon-line");
            } else {
              themeIcon?.setAttribute("class", "ri-sun-line");
            }
          });

          const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
          };

          if (typeof ScrollReveal !== 'undefined') {
            ScrollReveal().reveal(".header__image img", {
              ...scrollRevealOption,
              origin: "right",
            });
            ScrollReveal().reveal(".header__content h1", {
              ...scrollRevealOption,
              delay: 500,
            });
            ScrollReveal().reveal(".header__content p", {
              ...scrollRevealOption,
              delay: 1000,
            });
            ScrollReveal().reveal(".header__buttons", {
              ...scrollRevealOption,
              delay: 1500,
            });
            ScrollReveal().reveal(".header__links", {
              ...scrollRevealOption,
              delay: 2000,
            });

            ScrollReveal().reveal(".steps__card", {
              ...scrollRevealOption,
              interval: 500,
            });

            ScrollReveal().reveal(".showcase__card", {
              ...scrollRevealOption,
              interval: 300,
            });

            ScrollReveal().reveal(".service__image img", {
              ...scrollRevealOption,
              origin: "left",
            });
            ScrollReveal().reveal(".service__content .section__subheader", {
              ...scrollRevealOption,
              delay: 500,
            });
            ScrollReveal().reveal(".service__content .section__header", {
              ...scrollRevealOption,
              delay: 1000,
            });
            ScrollReveal().reveal(".service__list li", {
              ...scrollRevealOption,
              delay: 1500,
              interval: 500,
            });

            ScrollReveal().reveal(".experience__card", {
              duration: 1000,
              interval: 500,
            });

            ScrollReveal().reveal(".download__image img", {
              ...scrollRevealOption,
              origin: "right",
            });
            ScrollReveal().reveal(".download__content .section__header", {
              ...scrollRevealOption,
              delay: 500,
            });
            ScrollReveal().reveal(".download__content p", {
              ...scrollRevealOption,
              delay: 1000,
            });
            ScrollReveal().reveal(".download__links", {
              ...scrollRevealOption,
              delay: 1500,
            });
          }
        `}
      </Script>

      {/* Firebase Configuration */}
      <Script id="firebase-config" type="module" strategy="afterInteractive">
        {`
          // Import the functions you need from the SDKs you need
          import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
          import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

          // Your web app's Firebase configuration
          const firebaseConfig = {
            apiKey: "AIzaSyBJ7H3HhVer2x0DL-UgjZNbtbONEM_ZVUE",
            authDomain: "kipp-315b3.firebaseapp.com",
            projectId: "kipp-315b3",
            storageBucket: "kipp-315b3.appspot.com",
            messagingSenderId: "8328085810",
            appId: "1:8328085810:web:ea97b06254f1c3197c972b",
            measurementId: "G-D16T51F2HB"
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
        `}
      </Script>
    </>
  )
}
