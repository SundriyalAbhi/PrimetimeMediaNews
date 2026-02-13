'use client';

import React, { useState, useEffect } from 'react';
import styles from './ArticlePageClient.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ArticleHeader from '../ArticleHeader/ArticleHeader';
import ArticleContent from '../ArticleContent/ArticleContent';
import TopNewsSidebar from '../TopNewsSidebar/TopNewsSidebar';
import RelatedArticles from '../RelatedArticles/RelatedArticles';
import ArticleTags from '../ArticleTags/ArticleTags';
import MoreStoriesSection from '../../Common/MoreFromSection/MoreFromSection';
import { useActiveAds } from '@/app/hooks/useAds'; 
import RecommendedStories from '../RecommendedStories/RecommendedStories';
import SocialShare from '../../Common/SocialShare/SocialShare';

interface ArticleData {
  id: string | number;
  section: string;
  category: string;
  title: string;
  subtitle: string;  
  image: string;
  date: string;
  author?: string;
  readTime?: string;
  content: string;
  tags?: string[];
  slug: string;
}

interface SidebarNewsItem {
  id: string | number;
  title: string;
  image: string;
  slug: string;
  section: string;
  category: string;
}

interface RelatedArticle {
  id: string | number;
  title: string;
  slug: string;
  section?: string;
  category?: string;
  image?: string;
}

interface ArticlePageClientProps {
  article: ArticleData;
  relatedArticles: RelatedArticle[];
  topNews: SidebarNewsItem[];
  recommendedStories: SidebarNewsItem[];
  section: string;
  category: string;
}

const normalizeUrl = (url: string): string => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

export default function ArticlePageClient({
  article,
  relatedArticles,
  topNews,
  recommendedStories,
  section,
  category
}: ArticlePageClientProps) {
  
  const { data: ads, loading: adsLoading } = useActiveAds();
  const activeAds = (ads || []).filter(ad => ad.isActive);

  const [topAdIndex, setTopAdIndex] = useState(0);
  const [bottomAdIndex, setBottomAdIndex] = useState(activeAds.length > 1 ? 1 : 0);

  useEffect(() => {
    if (activeAds.length <= 1) return;

    const interval = setInterval(() => {
      setTopAdIndex(prev => (prev + 1) % activeAds.length);
      setBottomAdIndex(prev => (prev + 1) % activeAds.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [activeAds.length]);

  const renderAd = (index: number) => {
    if (adsLoading) {
      return (
        <div className={styles.adPlaceholder}>
          <span>Loading advertisement...</span>
        </div>
      );
    }

    if (activeAds.length === 0) {
      return (
        <div className={styles.adPlaceholder}>
          <div className={styles.emptyAdBox}>
            <span>AD SPACE</span>
            <small>Will adjust to image size</small>
          </div>
        </div>
      );
    }

    const ad = activeAds[index % activeAds.length];

    return (
      <div className={styles.adWrapper}>
        <a
          href={normalizeUrl(ad.link)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.adLink}
        >
          <img
            src={ad.imageUrl}
            alt={ad.title || 'Advertisement'}
            className={styles.adImage}
            loading="lazy"
          />
        </a>


        {activeAds.length > 1 && (
          <div className={styles.adDots}>
            {activeAds.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (index === topAdIndex) setTopAdIndex(i);
                  else setBottomAdIndex(i);
                }}
                className={`${styles.dot} ${i === (index % activeAds.length) ? styles.activeDot : ''}`}
                aria-label={`Ad ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.articlePage}>
      <div className={styles.container}>
        <Breadcrumb 
          section={section}
          category={category}
          title={article.title}
        />

        <div className={styles.articleLayout}>
          <div className={styles.mainContent}>
            <ArticleHeader article={article} />
            <ArticleContent content={article.content} />
            <RelatedArticles articles={relatedArticles} />
            {article.tags && article.tags.length > 0 && (
              <ArticleTags tags={article.tags} />
            )}
            <div className={styles.shareSection}>
              <SocialShare 
                url={typeof window !== 'undefined' ? window.location.href : `https://yoursite.com/${article.section}/${article.category}/${article.slug}`}
                title={article.title}
                description={article.subtitle}
                image={article.image}
                isArticle={true}
              />
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.adSpace}>
              <div className={styles.advertisement}>ADVERTISEMENT</div>
              {renderAd(topAdIndex)}
            </div>
            
            <TopNewsSidebar news={topNews} />
            
            <div className={styles.adSpace}>
              <div className={styles.advertisement}>ADVERTISEMENT</div>
              {renderAd(bottomAdIndex)}
            </div>
          </aside>
        </div>

        <MoreStoriesSection sectionTitle={`MORE FROM ${section.toUpperCase()}`} />
      </div>
    </div>
  );
}