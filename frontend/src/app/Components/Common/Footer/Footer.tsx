import React from 'react';
import styles from './Footer.module.scss';
import { 
  FaFacebookF, 
  FaTwitter,
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaWhatsapp,
  FaChevronRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTelegram,
  FaRss
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Advertise', href: '/advertise' },
      { name: 'Careers', href: '/careers' }
    ],
    categories: [
      { name: 'India', href: '/india' },
      { name: 'World', href: '/world' },
      { name: 'Business', href: '/business' },
      { name: 'Technology', href: '/technology' },
      { name: 'Sports', href: '/sports' },
      { name: 'Entertainment', href: '/entertainment' }
    ],
    resources: [
      { name: 'Press Releases', href: '/press' },
      { name: 'Editorial Policy', href: '/editorial' },
      { name: 'Fact Check', href: '/fact-check' },
      { name: 'Archives', href: '/archives' },
      { name: 'RSS Feed', href: '/rss' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: FaTelegram, href: 'https://telegram.me', label: 'Telegram' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.section}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <div className={styles.logoCircle}>
                  <span className={styles.logoText}>PRIME<br/>TIME</span>
                </div>
              </div>
              <h3 className={styles.brandName}>Prime Time News</h3>
              <p className={styles.tagline}>Truth in Every Story</p>
            </div>
            
            <p className={styles.description}>
              Your trusted source for breaking news, analysis, and in-depth coverage 
              of events shaping India and the world. Stay informed, stay ahead.
            </p>
            
            <div className={styles.contact}>
              <a href="mailto:contact@primetime.news" className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>contact@primetime.news</span>
              </a>
              <a href="tel:+911234567890" className={styles.contactItem}>
                <FaPhone className={styles.contactIcon} />
                <span>+91 123 456 7890</span>
              </a>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <FaChevronRight className={styles.chevron} />
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Categories</h3>
            <ul className={styles.linkList}>
              {footerLinks.categories.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <FaChevronRight className={styles.chevron} />
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Resources</h3>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <FaChevronRight className={styles.chevron} />
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social Section */}
        <div className={styles.newsletterSection}>
          <div className={styles.newsletterWrapper}>
            <div className={styles.newsletterContent}>
              <h3 className={styles.newsletterTitle}>Stay Updated</h3>
              <p className={styles.newsletterText}>
                Subscribe to our newsletter for the latest news and exclusive insights.
              </p>
            </div>
            <form className={styles.newsletterForm}>
              <div className={styles.inputWrapper}>
                <FaEnvelope className={styles.inputIcon} />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className={styles.newsletterInput}
                  required
                />
              </div>
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Prime Time News. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <span className={styles.separator}>•</span>
              <a href="/terms" className={styles.legalLink}>Terms of Service</a>
              <span className={styles.separator}>•</span>
              <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
              <span className={styles.separator}>•</span>
              <a href="/disclaimer" className={styles.legalLink}>Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
