"use client"
import React, { useState } from 'react';
import styles from './VideosSection.module.scss';
import { Play } from 'lucide-react'; 

const categories = [
  'Aap Ki Adalat', 'Aaj Ki Baat', 'News', 'Astrology', 'Originals', 
  'Yoga', 'Kurukshetra', 'Haqiqat Kya Hai', 'Muqabla', 'Entertainment', 'Sports', 'Lifestyle'
];

const videoData = [
  {
    id: '1',
    category: 'Originals',
    title: "UGC 2026 Equity Rules Explained: How India's Universities Will Handle Discrimination",
    image: 'https://images.unsplash.com/photo-1523050353063-95c55a576307?w=400&q=80',
    tag: 'UGC VS CASTE BIAS'
  },
  {
    id: '2',
    category: 'Yoga',
    title: "Yoga With Swami Ramdev: How will 89% of people get a guarantee of longevity?",
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    tag: 'BIG NEWS'
  },
  {
    id: '3',
    category: 'Astrology',
    title: "Aaj Ka Rashifal, 28 Jan 2026: Find out what your stars have in store for you today.",
    image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4c5?w=400&q=80',
    tag: 'आज का राशिफल'
  },
  {
    id: '4',
    category: 'Aaj Ki Baat',
    title: "Aaj Ki Baat: What agreement was reached with the EU?",
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&q=80',
    tag: 'WHAT AGREEMENT?'
  }
];

export const VideosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Aap Ki Adalat');

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Videos</h2>
        
        {/* Category Navigation */}
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

        {/* Grid Layout */}
        <div className={styles.contentGrid}>
          {/* Video Cards */}
          <div className={styles.videoGrid}>
            {videoData.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.thumbnailContainer}>
                  <img src={video.image} alt={video.title} className={styles.thumbnail} />
                  <div className={styles.overlay}>
                    <div className={styles.playIcon}><Play fill="white" size={20} /></div>
                    <span className={styles.tag}>{video.tag}</span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.categoryLabel}>{video.category}</span>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Advertisement Block */}
          {/* <div className={styles.adBlock}>
            <span className={styles.adLabel}>ADVERTISEMENT</span>
            <div className={styles.adImageWrapper}>
              <img src="/swadeshi-ad.jpg" alt="Swadeshi Way Ad" />
            </div>
          </div> */}
        </div>

        <div className={styles.footerAction}>
          <button className={styles.viewAllBtn}>View All <span>→</span></button>
        </div>
      </div>
    </section>
  );
};