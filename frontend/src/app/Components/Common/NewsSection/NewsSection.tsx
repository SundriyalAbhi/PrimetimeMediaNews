'use client';

import React from 'react';
import styles from './NewsSection.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NewsGridItem {
  sectionTitle: string;
  id: string | number;
  image: string;
  title: string;
  slug?: string;
  category?: string;
}

export interface TopNewsItem {
  id: string | number;
  title: string;
  image: string;
  slug?: string;
}

interface NewsSectionProps {
  sectionTitle: string;
  subCategories?: string[];
  mainNews: NewsGridItem[];
  topNews?: TopNewsItem[];
  showSidebar?: boolean;
  gridColumns?: 2 | 3 | 4;
  currentSection?: string;
}

const CATEGORY_TO_SECTION_MAP: Record<string, string> = {
  // Sports Categories
  'Cricket': 'sports',
  'Football': 'sports',
  'Tennis': 'sports',
  'Badminton': 'sports',
  'Hockey': 'sports',
  'Athletics': 'sports',
  'Wrestling': 'sports',
  'IPL': 'sports',
  'Olympics': 'sports',
  
  // Business Categories
  'Markets': 'business',
  'Market': 'business',
  'Economy': 'business',
  'Banking': 'business',
  'Startups': 'business',
  'Cryptocurrency': 'business',
  'Real Estate': 'business',
  'IPO': 'business',
  'Fintech': 'business',
  'Telecom': 'business',
  'Automobile': 'business',
  'Currency': 'business',
  'Commodities': 'business',
  'Personal Finance': 'business',
  'Income Tax': 'business',
  
  // Technology Categories
  'AI': 'tech',
  'Smartphones': 'tech',
  'Gadgets': 'tech',
  'Apps': 'tech',
  'Gaming': 'tech',
  'Cybersecurity': 'tech',
  'Science': 'tech',
  'VR/AR': 'tech',
  'AR/VR': 'tech',
  'Electric Vehicles': 'tech',
  'Computing': 'tech',
  'Tech': 'tech',
  
  // Entertainment Categories
  'Bollywood': 'entertainment',
  'Hollywood': 'entertainment',
  'Television': 'entertainment',
  'OTT': 'entertainment',
  'Music': 'entertainment',
  'Regional Cinema': 'entertainment',
  'Web Series': 'entertainment',
  'Celebrity News': 'entertainment',
  'Box Office': 'entertainment',
  'Awards': 'entertainment',
  
  // Lifestyle Categories
  'Travel': 'lifestyle',
  'Food': 'lifestyle',
  'Beauty': 'lifestyle',
  'Wellness': 'lifestyle',
  'Health & Fitness': 'lifestyle',
  'Fashion': 'lifestyle',
  'Home & Living': 'lifestyle',
  'Relationships': 'lifestyle',
  'Parenting': 'lifestyle',
  
  // Health Categories
  'Medical Research': 'health',
  'Mental Health': 'health',
  'Digital Health': 'health',
  'Disease Prevention': 'health',
  'Policy': 'health',
  
  // State/India Categories
  'Maharashtra': 'india',
  'Karnataka': 'india',
  'Delhi': 'india',
  'Uttar Pradesh': 'india',
  'West Bengal': 'india',
  'Tamil Nadu': 'india',
  'Telangana': 'india',
  'Gujarat': 'india',
  'Rajasthan': 'india',
  'Kerala': 'india',
  'Punjab': 'india',
  'Haryana': 'india',
  'Bihar': 'india',
  'Odisha': 'india',
  'Assam': 'india',
  'Madhya Pradesh': 'india',
  'Jharkhand': 'india',
  'Chhattisgarh': 'india',
  
  // India National Categories
  'National': 'india',
  'Politics': 'india',
  'Education': 'india',
  'Infrastructure': 'india',
  'Defence': 'india',
  'Law & Order': 'india',
  'Social Issues': 'india',
  
  // World Categories
  'USA': 'world',
  'Europe': 'world',
  'Asia Pacific': 'world',
  'Middle East': 'world',
  'Africa': 'world',
  'Latin America': 'world',
  'Australia': 'world',
  'United Nations': 'world',
};


const getSectionFromCategory = (categoryName: string): string => {
  return CATEGORY_TO_SECTION_MAP[categoryName] || 'news';
};

const NewsSection: React.FC<NewsSectionProps> = ({
  sectionTitle,
  subCategories = [],
  mainNews,
  topNews = [],
  showSidebar = true,
  gridColumns = 3,
  currentSection
}) => {
  const pathname = usePathname();

  const getSectionFromUrl = (): string => {
    const parts = pathname.split('/').filter(Boolean);
    const pagesIndex = parts.indexOf('Pages');
    
    if (pagesIndex !== -1 && parts[pagesIndex + 1]) {
      return parts[pagesIndex + 1];
    }
    
    return currentSection || 'sports';
  };

  const section = getSectionFromUrl();

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
          {subCategories.length > 0 && (
            <nav className={styles.subCategoryNav}>
              {subCategories.map((cat) => {
                const categorySlug = cat.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link 
                    key={cat} 
                    href={`/Pages/${section}/${categorySlug}`}
                  >
                    <span>{cat}</span>
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        <div className={showSidebar ? styles.layoutWithSidebar : styles.layoutFullWidth}>
          <div className={`${styles.mainGrid} ${styles[`cols${gridColumns}`]}`}>
            {mainNews.map((news) => (
              <NewsCard 
                key={news.id} 
                currentSection={section}
                {...news} 
              />
            ))}
          </div>

          {showSidebar && topNews.length > 0 && (
            <aside className={styles.sidebar}>
              <div className={styles.adPlaceholder}>ADVERTISEMENT</div>
              <h3 className={styles.topNewsTitle}>Top News</h3>
              <div className={styles.topNewsList}>
                {topNews.map((news) => (
                  <Link
                    key={news.id}
                    href={news.slug ? `/news/${news.slug}` : '#'}
                    className={styles.topNewsItem}
                  >
                    <p>{news.title}</p>
                    <img src={news.image} alt={news.title} loading="lazy" />
                  </Link>
                ))}
              </div>
            </aside>
          )}
        </div>
      </section>
    </div>
  );
};

interface NewsCardProps extends NewsGridItem {
  currentSection: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, slug, category, currentSection }) => {
  if (!slug) {
    return (
      <div className={styles.newsCard}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} loading="lazy" />
          {category && (
            <span className={styles.categoryBadge}>{category}</span>
          )}
        </div>
        <p className={styles.newsTitle}>{title}</p>
      </div>
    );
  }

  const itemSection = category ? getSectionFromCategory(category) : currentSection;
  const categorySlug = category?.toLowerCase().replace(/\s+/g, '-') || '';
  const href = `/Pages/${itemSection}/${categorySlug}/${slug}`;

  return (
    <Link href={href} className={styles.newsCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} loading="lazy" />
        {category && (
          <span className={styles.categoryBadge}>{category}</span>
        )}
      </div>
      <p className={styles.newsTitle}>{title}</p>
    </Link>
  );
};

export default NewsSection;
