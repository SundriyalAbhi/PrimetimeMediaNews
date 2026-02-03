"use client"
import React, { useState } from 'react';
import styles from './SportsNews.module.scss';

interface SportsArticle {
  id: string;
  title: string;
  image: string;
  isFeatured?: boolean;
}

const sportsCategories = ['Cricket', 'Football', 'Tennis', 'Photos', 'Web Stories', 'Video'];

const sportsArticles: SportsArticle[] = [
  {
    id: '1',
    title: 'Novak Djokovic gets walkover in Australian Open quarterfinal after losing 2 sets',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Bangladesh accuses ICC of unfair scheduling after getting knocked out of U19 World Cup 2026',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32ce4e97d?w=800&q=80',
  },
  {
    id: '3',
    title: 'IND vs NZ: Should Ishan Kishan open with Abhishek Sharma today in 4th T20I?',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
  },
  {
    id: '4',
    title: 'Suryakumar Yadav surpasses Virat Kohli as captain, targets Rohit Sharma next in special T20I record',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80',
  },
  {
    id: '5',
    title: 'WPL 2026 points table: Gujarat Giants race ahead in playoff race, RCB still favourites for final',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
  },
];

export const Sports: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Cricket');

  return (
    <section className={styles.sportsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sports</h2>
          <nav className={styles.categoryNav}>
            {sportsCategories.map((category) => (
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
                <img src={sportsArticles[0].image} alt={sportsArticles[0].title} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.categoryBadge}>Sports</span>
                <h3 className={styles.featuredTitle}>{sportsArticles[0].title}</h3>
              </div>
            </article>

            {/* Regular Articles */}
            <div className={styles.regularArticles}>
              {sportsArticles.slice(1).map((article) => (
                <article key={article.id} className={styles.regularArticle}>
                  <div className={styles.articleContent}>
                    <span className={styles.categoryBadge}>Sports</span>
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
            Read More
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sports;