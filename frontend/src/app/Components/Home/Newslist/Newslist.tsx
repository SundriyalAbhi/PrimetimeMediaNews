import React from 'react';
import styles from './Newslist.module.scss';

interface NewsArticle {
  id: string;
  category: string;
  title: string;
  image: string;
  isOpinion?: boolean;
  isVideo?: boolean;
}

interface TrendingItem {
  id: string;
  title: string;
  image: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    category: 'India',
    title: 'Ban on entry of all non-Hindus to Char Dham: Not justified',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    isOpinion: true,
  },
  {
    id: '2',
    category: 'India',
    title: "Learjet 45 under scrutiny after Ajit Pawar's death; aircraft linked to 200 accidents globally",
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    id: '3',
    category: 'India',
    title: "President Murmu addresses budget session: 'Govt tackled corruption, ensured use of public funds'",
    image: 'https://images.unsplash.com/photo-1591604129842-37fda37b0b0e?w=800&q=80',
    isVideo: true,
  },
  {
    id: '4',
    category: 'India',
    title: "Ajit Pawar's untimely demise 'very shocking and saddening': PM Modi",
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
  },
  {
    id: '5',
    category: 'Maharashtra',
    title: "Ajit Pawar's last tweet: Here's what Maharashtra Dy CM said on social media hours before death",
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    isVideo: true,
  },
  {
    id: '6',
    category: 'Maharashtra',
    title: "Ajit Pawar dies: Details of aircraft in which Maharashtra Deputy CM was travelling",
    image: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=800&q=80',
  },
  {
    id: '7',
    category: 'Maharashtra',
    title: "Ajit Pawar plane crash: Yugendra Pawar breaks down after Maharashtra Deputy CM's tragic death",
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    isVideo: true,
  },
  {
    id: '8',
    category: 'Maharashtra',
    title: "Sanjay Raut calls Ajit Pawar's death 'black day for Maharashtra', says state lost strongest leader",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    isVideo: true,
  },
];

const trendingItems: TrendingItem[] = [
  {
    id: '1',
    title: "Singapore envoy Simon Wong enjoys Delhi's first rain of 2026 with tea and pakodas, netizens react",
    image: 'https://images.unsplash.com/photo-1571942676516-bcab84649e44?w=400&q=80',
  },
  {
    id: '2',
    title: "Chips, smiles: Yogi Adityanath's sweet moment with a young child goes viral | WATCH",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
  },
  {
    id: '3',
    title: "Major Rishabh Sambyal: The officer by the President's side who has won social media's admiration",
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80',
  },
];

export const NewsList: React.FC = () => {
  return (
    <section className={styles.newsListSection}>
      <div className={styles.container}>
        {/* Main News List */}
        <div className={styles.mainContent}>
          <div className={styles.newsGrid}>
            {newsArticles.map((article) => (
              <article key={article.id} className={styles.newsCard}>
                <div className={styles.cardImage}>
                  <img src={article.image} alt={article.title} />
                  {article.isVideo && (
                    <div className={styles.videoIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="rgba(255, 68, 68, 0.95)" />
                        <path d="M9 6L17 12L9 18V6Z" fill="#fff" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.categoryBadge}>{article.category}</span>
                    {article.isOpinion && (
                      <span className={styles.opinionBadge}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        OPINION
                      </span>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Trending Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.trendingSection}>
            <div className={styles.trendingHeader}>
              <h2 className={styles.trendingTitle}>Trending</h2>
              <div className={styles.trendingAccent}></div>
            </div>
            
            <div className={styles.trendingList}>
              {trendingItems.map((item, index) => (
                <article key={item.id} className={styles.trendingCard}>
                  <div className={styles.trendingRank}>
                    <span>{index + 1}</span>
                  </div>
                  <div className={styles.trendingImage}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h4 className={styles.trendingText}>{item.title}</h4>
                </article>
              ))}
            </div>
          </div>

          {/* Advertisement Placeholder */}
          <div className={styles.adSpace}>
            <div className={styles.adContent}>
              <span className={styles.adLabel}>ADVERTISEMENT</span>
              <div className={styles.adPlaceholder}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="30" stroke="rgba(255, 153, 0, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
                  <text x="40" y="45" textAnchor="middle" fill="rgba(255, 153, 0, 0.5)" fontSize="12" fontWeight="600">AD SPACE</text>
                </svg>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default NewsList;