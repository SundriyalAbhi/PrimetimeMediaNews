import React from 'react';
import styles from './LatestNewsSection.module.scss';
import Link from 'next/link';

export interface LatestNewsItem {
  id: string | number;
  category: string;
  title: string;
  image: string;
  slug?: string;
}

interface LatestNewsSectionProps {
  sectionTitle: string;
  newsData: LatestNewsItem[];
  showReadMore?: boolean;
  readMoreLink?: string;
  columns?: 2 | 3 | 4;
}

export const LatestNewsSection: React.FC<LatestNewsSectionProps> = ({
  sectionTitle,
  newsData,
  showReadMore = true,
  readMoreLink = '#',
  columns = 3
}) => {
  return (
    <section className={styles.latestNewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{sectionTitle}</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={`${styles.newsGrid} ${styles[`cols${columns}`]}`}>
          {newsData.map((item) => {
            const href = item.slug ? `/news/${item.slug}` : `#${item.id}`;
            
            return (
              <Link key={item.id} href={href} className={styles.newsItem}>
                <div className={styles.content}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                </div>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              </Link>
            );
          })}
        </div>

        {showReadMore && (
          <div className={styles.readMoreWrapper}>
            <Link href={readMoreLink} className={styles.readMoreButton}>
              Read More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNewsSection;
