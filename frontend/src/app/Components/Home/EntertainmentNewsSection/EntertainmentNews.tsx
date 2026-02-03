"use client"
import React, { useState } from 'react';
import styles from './EntertainmentNews.module.scss';

interface EntArticle {
  id: string;
  title: string;
  image: string;
  category: string;
}

const categories = ['Bollywood', 'TV', 'OTT', 'Reviews', 'Regional', 'Hollywood', 'Korean', 'Photos', 'Web Stories', 'Videos'];

const entertainmentArticles: EntArticle[] = [
  {
    id: '1',
    title: "Dhurandhar Creates History: Ranveer Singh Starrer Becomes First Hindi Film to Cross ₹1,000 Cr in India",
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    category: 'Bollywood',
  },
  {
    id: '2',
    title: "End of an Era: Arijit Singh Announces Retirement from Playback Singing to Focus on Independent Music",
    image: 'https://images.unsplash.com/photo-1514525253361-bee87184919a?w=800&q=80',
    category: 'Music',
  },
  {
    id: '3',
    title: "Republic Day 2026: Sanjay Leela Bhansali's 'Bharat Gatha' Tableau Celebrates the Legacy of Indian Cinema",
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
    category: 'Bollywood',
  },
  {
    id: '4',
    title: "OTT This Week: Dhanush's 'Tere Ishk Mein' and 'Space Gen: Chandrayaan' Lead Streaming Charts",
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
    category: 'OTT',
  },
  {
    id: '5',
    title: "Sankranti Winner: Chiranjeevi's 'Mana Shankara' Crosses ₹200 Crore Mark Worldwide",
    image: 'https://images.unsplash.com/photo-1598899303450-2335839333a1?w=800&q=80',
    category: 'Regional',
  },
];

export const Entertainment: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Bollywood');

  return (
    <section className={styles.sportsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Entertainment</h2>
          <nav className={styles.categoryNav}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  activeCategory === category ? styles.active : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.articlesContainer}>
          <div className={styles.articlesGrid}>
            {/* Featured Article */}
            <article className={styles.featuredArticle}>
              <div className={styles.featuredImage}>
                <img src={entertainmentArticles[0].image} alt={entertainmentArticles[0].title} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.categoryBadge}>{entertainmentArticles[0].category}</span>
                <h3 className={styles.featuredTitle}>{entertainmentArticles[0].title}</h3>
              </div>
            </article>

            {/* Regular Articles List */}
            <div className={styles.regularArticles}>
              {entertainmentArticles.slice(1).map((article) => (
                <article key={article.id} className={styles.regularArticle}>
                  <div className={styles.articleContent}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                    <h4 className={styles.articleTitle}>{article.title}</h4>
                  </div>
                  <div className={styles.articleImage}>
                    <img src={article.image} alt={article.title} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.readMoreWrapper}>
          <button className={styles.readMoreButton}>
            More Entertainment News
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;