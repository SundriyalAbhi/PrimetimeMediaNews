import React from 'react';
import styles from './LatestNews.module.scss';

interface LatestNewsItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

const latestNewsData: LatestNewsItem[] = [
  {
    id: '1',
    category: 'Technology',
    title: 'Amazon may have accidentally sent layoff alert to AWS staff: Up to 16000 jobs at risk',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
  },
  {
    id: '2',
    category: 'Maharashtra',
    title: "'Mein toh shapath lene wala hun': Old video of Ajit Pawar's remarks during a press meet goes viral",
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80',
  },
  {
    id: '3',
    category: 'India',
    title: "'Runway was not in sight...': Crew to ATC moments before Ajit Pawar's plane crashed in Baramati",
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
  },
  {
    id: '4',
    category: 'Entertainment',
    title: "Here's why Reddit users think Arijit Singh's retirement is more of a 'rebellion'",
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
  },
  {
    id: '5',
    category: 'Entertainment',
    title: "Karan Wahi breaks silence on wedding rumours with Dil Mill Gaye co-star Jennifer Winget: 'Free ki...'",
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    id: '6',
    category: 'Technology',
    title: 'Google improves AI search experience by making AI overviews and AI mode more Seamless',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80',
  },
  {
    id: '7',
    category: 'Business',
    title: '115% return in 1 year: Stock under Rs 50 gains amid rally in stock market, check details',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
  },
  {
    id: '8',
    category: 'Entertainment',
    title: 'Karan Wahi-Jennifer Winget shows: From Dill Mill Gaye to Raisinghani vs Raisinghani',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80',
  },
  {
    id: '9',
    category: 'Education',
    title: 'JEE Main 2026 tentative cutoff: Check category-wise cut off percentile',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  },
];

export const LatestNews: React.FC = () => {
  return (
    <section className={styles.latestNewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest News</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.newsGrid}>
          {latestNewsData.map((item) => (
            <article key={item.id} className={styles.newsItem}>
              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.newsTitle}>{item.title}</h3>
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
            </article>
          ))}
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

export default LatestNews;