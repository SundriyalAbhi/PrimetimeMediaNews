"use client"
import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, Languages } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "T20 World Cup", href: "/Pages/t20-world-cup" },
    { label: "Videos", href: "/Pages/videos" },
    { label: "India", href: "/Pages/india" },
    { label: "World", href: "/Pages/world" },
    { label: "Sports", href: "/Pages/sports" },
    { label: "Entertainment", href: "/Pages/entertainment" },
    { label: "Tech", href: "/Pages/tech" },
    { label: "Photos", href: "/Pages/photos" },
    { label: "Lifestyle", href: "/Pages/lifestyle" },
    { label: "Health", href: "/Pages/health" },
    { label: "Business", href: "/Pages/business" },
  ];

  const trendingItems = [
    { label: "Budget 2026", href: "/news/budget-2026" },
    { label: "Ajit Pawar Plane Crash", href: "/news/ajit-pawar-plane-crash" },
    { label: "Plane Crash Visuals", href: "/news/plane-crash-visuals" },
    { label: "Odisha Bandh", href: "/news/odisha-bandh" }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.navbarWrapper}>
      {/* 1. Top Header Section */}
      <div className={styles.topHeader}>
        <div className={styles.leftTools}>
          <Menu 
            size={24} 
            className={styles.icon} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <Search size={24} className={styles.icon} />
          <Languages size={24} className={styles.icon} />
        </div>
        
        <Link href="/" className={styles.logoContainer}>
          <img src="/logo.png" alt="PrimeTime Logo" className={styles.logoImg} />
        </Link>

        <div className={styles.rightTools}>
          <Link href="/live-tv" className={styles.liveTv}>
            LIVE TV
          </Link>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className={styles.mainNav}>
        <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link 
                href={item.href}
                className={isActive(item.href) ? styles.active : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Trending News Bar */}
      <div className={styles.trendingBar}>
        <span className={styles.trendingLabel}>Trending</span>
        {trendingItems.map((item, idx) => (
          <React.Fragment key={item.href}>
            <Link href={item.href} className={styles.trendingLink}>
              {item.label}
            </Link>
            {idx < trendingItems.length - 1 && <span className={styles.separator}>|</span>}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
