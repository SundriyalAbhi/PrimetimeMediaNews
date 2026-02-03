import React from 'react';
import styles from './NewsSection.module.scss';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  isLive?: boolean;
  isVideo?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Runway was not in sight...',
    description: 'Crew to ATC moments before Ajit Pawar\'s plane crashed in Baramati',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    category: 'Breaking News',
    isLive: true,
  },
  {
    id: '2',
    title: 'Aircraft Accident Investigation',
    description: 'Bureau to probe incident - Live updates on the ongoing investigation',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    isLive: true,
  },
  {
    id: '3',
    title: 'Recovery Operations',
    description: 'How NCP leader\'s body was identified amid the wreckage',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
  },
  {
    id: '4',
    title: 'CCTV Footage Released',
    description: 'Exact moment when plane crashed in Maharashtra\'s Baramati',
    image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=800&q=80',
    isVideo: true,
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* Main Featured Article */}
        <article className={styles.mainArticle}>
          <div className={styles.imageWrapper}>
            <img src={newsData[0].image} alt={newsData[0].title} />
            <div className={styles.overlay}>
              {newsData[0].isLive && (
                <span className={styles.liveBadge}>
                  <span className={styles.liveDot}></span>
                  LIVE
                </span>
              )}
              <span className={styles.category}>{newsData[0].category}</span>
            </div>
          </div>
          <div className={styles.mainContent}>
            <h1 className={styles.mainTitle}>{newsData[0].title}</h1>
            <p className={styles.mainDescription}>{newsData[0].description}</p>
            <div className={styles.metadata}>
              <span className={styles.timestamp}>Updated 2 hours ago</span>
              <button className={styles.readMore}>
                Read Full Story
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </article>

        {/* Secondary Articles Grid */}
        <div className={styles.secondaryGrid}>
          {newsData.slice(1).map((item) => (
            <article key={item.id} className={styles.secondaryArticle}>
              <div className={styles.secondaryImage}>
                <img src={item.image} alt={item.title} />
                {item.isLive && (
                  <span className={styles.liveTag}>
                    <span className={styles.pulseDot}></span>
                    LIVE
                  </span>
                )}
                {item.isVideo && (
                  <div className={styles.playButton}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill="rgba(255, 255, 255, 0.95)" />
                      <path d="M12 9L23 16L12 23V9Z" fill="#000" />
                    </svg>
                  </div>
                )}
              </div>
              <div className={styles.secondaryContent}>
                <h3 className={styles.secondaryTitle}>{item.title}</h3>
                <p className={styles.secondaryDescription}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;