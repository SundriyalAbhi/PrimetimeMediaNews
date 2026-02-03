"use client"
import React, { useState } from 'react';
import styles from './LifestyleSection.module.scss';

const categories = ['Food', 'Travel', 'Beauty', 'Photos', 'Web Stories', 'Video', 'Spirituality', 'Events'];

const lifestyleArticles = [
  {
    id: '1',
    category: 'Lifestyle',
    title: "Mahashivratri 2026 shubh yog: Doing puja at this time will bring divine blessings",
    image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?w=500&q=80',
  },
  {
    id: '2',
    category: 'Lifestyle',
    title: "Jaya Ekadashi 2026: Where to light diyas at home on the auspicious day",
    image: 'https://images.unsplash.com/photo-1605197509653-76ca2143004a?w=500&q=80',
  },
  {
    id: '3',
    category: 'Food',
    title: "Stop fearing carbs: These foods keep you full and support weight loss, says fitness coach",
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',
  },
  {
    id: '4',
    category: 'Beauty',
    title: "Why boring winter skincare routines actually work better, explains dermatologist",
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80',
  },
];

export const LifestyleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Food');

  return (
    <section className={styles.lifestyleSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Lifestyle</h2>
        
        <nav className={styles.categoryNav}>
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`${styles.navBtn} ${activeTab === cat ? styles.active : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className={styles.contentGrid}>
          {/* Article Grid */}
          <div className={styles.articleGrid}>
            {lifestyleArticles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.imageWrapper}>
                  <img src={article.image} alt={article.title} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.categoryLabel}>{article.category}</span>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* Ad Section */}
          <aside className={styles.adSidebar}>
            <span className={styles.adLabel}>ADVERTISEMENT</span>
            <div className={styles.adFrame}>
              {/* This represents the Raipur Sahitya Utsav ad in the image */}
              <img src="https://via.placeholder.com/300x250?text=Raipur+Sahitya+Utsav+2026" alt="Ad" />
            </div>
          </aside>
        </div>

        <div className={styles.footerAction}>
          <button className={styles.readMoreBtn}>Read More <span>→</span></button>
        </div>
      </div>
    </section>
  );
};