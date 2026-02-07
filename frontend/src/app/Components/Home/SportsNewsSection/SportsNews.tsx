"use client";
import React, { useState, useMemo } from 'react';
import { useNewsContext } from '@/app/context/NewsContext';
import styles from './SportsNews.module.scss';

interface RawSportsItem {
  slug: string;
  title: string;
  image?: string;
  category: string;
  tags?: string[];
  subCategory?: string;
}

interface SportsArticle {
  id: string;
  title: string;
  image: string;
  isFeatured: boolean;
}

const sportsCategories = ['Cricket', 'Football', 'Tennis', 'Photos', 'Web Stories', 'Video'];

const Sports: React.FC = () => {
  const { sportsNews, loading } = useNewsContext();
  const [activeCategory, setActiveCategory] = useState('Cricket');

  const filteredSportsNews = useMemo(() => {
    if (!sportsNews) return [];
    
    return sportsNews.filter(item => 
      item.subCategory?.toLowerCase().includes(activeCategory.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase())) ||
      activeCategory === 'Cricket'
    );
  }, [sportsNews, activeCategory]);

  const sportsArticles: SportsArticle[] = useMemo(() => {
    if (!filteredSportsNews.length) return [];
    
    return filteredSportsNews.slice(0, 6).map((item, index) => ({
      id: `${activeCategory.toLowerCase()}-${item.slug}-${index}`,
      title: item.title,
      image: item.image ? `/public/${item.image}` : 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
      isFeatured: index === 0,
    }));
  }, [filteredSportsNews, activeCategory]);

  if (loading) {
    return (
      <section className={styles.sportsSection}>
        <div className={styles.container}>
          <div className={styles.articlesContainer}>
            <div className={styles.articlesGrid}>
              <article className={`${styles.featuredArticle} animate-pulse`}>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-64 rounded-2xl"></div>
              </article>
              <div className={styles.regularArticles}>
                {Array(5).fill(0).map((_, i) => (
                  <article key={i} className={`${styles.regularArticle} animate-pulse`}>
                    <div className="space-y-2">
                      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-6 bg-gray-200 rounded w-full"></div>
                    </div>
                    <div className="bg-gray-200 h-24 rounded"></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
            {sportsArticles[0] && (
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
            )}

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
