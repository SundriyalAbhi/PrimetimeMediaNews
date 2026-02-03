"use client"
import React from 'react';
import styles from './NewsCard.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NewsItem {
  id: string | number;
  title: string;
  image?: string;
  category?: string;
  isLive?: boolean;
  isVideo?: boolean;
  isPhoto?: boolean;
  slug?: string;
  date?: string;
  relatedLinks?: string[];
}

export interface CategorySection {
  categoryName: string;
  items: NewsItem[];
  subcategories?: string[];
}

interface NewsCardsProps {
  data: CategorySection[];
  columns?: 2 | 3 | 4;
  showSubcategories?: boolean;
  animationEnabled?: boolean;
  showViewMore?: boolean;
  maxHeadlines?: number;
}

const NewsCards: React.FC<NewsCardsProps> = ({ 
  data, 
  columns = 3,
  showSubcategories = false,
  animationEnabled = true,
  showViewMore = true,
  maxHeadlines = 4
}) => {
  const pathname = usePathname();

  const CATEGORY_TO_SECTION_MAP: Record<string, string> = {
    'Cricket': 'sports',
    'Football': 'sports',
    'Tennis': 'sports',
    'Badminton': 'sports',
    'Hockey': 'sports',
    'Athletics': 'sports',
    'Wrestling': 'sports',
    'IPL': 'sports',
    'Olympics': 'sports',
    'Market': 'business',
    'Personal Finance': 'business',
    'Income Tax': 'business',
    'Travel': 'lifestyle',
    'Food': 'lifestyle',
    'Beauty': 'lifestyle',
    'Maharashtra': 'india',
    'Uttar Pradesh': 'india',
    'Odisha': 'india',
    'Bihar': 'india',
    'Madhya Pradesh': 'india',
    'Karnataka': 'india',
    'Tamil Nadu': 'india',
    'West Bengal': 'india',
    'USA': 'world',
    'Europe': 'world',
    'Asia Pacific': 'world',
    'Middle East': 'world',
  };

  const getSectionFromCategory = (categoryName: string): string => {
    return CATEGORY_TO_SECTION_MAP[categoryName] || 'news';
  };

  const getItemLink = (item: NewsItem, categoryName: string): string => {
    if (!item.slug) {
      return `/news/${item.id}`;
    }

    console.log('Item:', item.title);
    console.log('Item category:', item.category);
    console.log('CategoryName from section:', categoryName);

    const itemCategory = item.category || categoryName;
    const itemSection = getSectionFromCategory(itemCategory);
    const itemCategorySlug = itemCategory.toLowerCase().replace(/\s+/g, '-');

    console.log('Final itemCategory:', itemCategory);
    console.log('Final itemSection:', itemSection);
    console.log('Final itemCategorySlug:', itemCategorySlug);
    console.log('Current pathname:', pathname);
    console.log('---');

    const expectedPath = `/Pages/${itemSection}/${itemCategorySlug}`;
    const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    
    if (normalizedPathname === expectedPath) {
      return `${expectedPath}/${item.slug}`;
    }

    return `/Pages/${itemSection}/${itemCategorySlug}/${item.slug}`;
  };

  const getCategoryLink = (categoryName: string): string => {
    const section = getSectionFromCategory(categoryName);
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    return `/Pages/${section}/${categorySlug}`;
  };

  return (
    <div className={styles.categoryCardsWrapper}>
      <div className={`${styles.categoryCardsGrid} ${styles[`cols${columns}`]}`}>
        {data.map((categorySection, index) => {
          const featuredItem = categorySection.items[0];
          const headlineItems = categorySection.items.slice(1, maxHeadlines + 1);
          
          if (!featuredItem) return null;
          
          return (
            <div 
              key={categorySection.categoryName} 
              className={styles.categoryCard}
              style={animationEnabled ? { animationDelay: `${index * 0.1}s` } : undefined}
            >
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>
                  <span className={styles.categoryIcon}></span>
                  {categorySection.categoryName}
                </h2>
                
                {showSubcategories && categorySection.subcategories && categorySection.subcategories.length > 0 && (
                  <div className={styles.subcategoriesWrapper}>
                    {categorySection.subcategories.map((subcat, idx) => {
                      const section = getSectionFromCategory(categorySection.categoryName);
                      const subcatSlug = subcat.toLowerCase().replace(/\s+/g, '-');
                      
                      return (
                        <Link
                          key={`${subcat}-${idx}`}
                          href={`/Pages/${section}/${subcatSlug}`}
                          className={styles.subcategoryPill}
                        >
                          {subcat}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <div className={styles.featuredSection}>
                <Link 
                  href={getItemLink(featuredItem, categorySection.categoryName)}
                  className={styles.featuredArticle}
                >
                  <div className={styles.imageContainer}>
                    {featuredItem.image ? (
                      <>
                        <img 
                          src={featuredItem.image} 
                          alt={featuredItem.title} 
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/placeholder-news.jpg';
                          }}
                        />
                        
                        <div className={styles.imageOverlay}></div>
                        
                        {featuredItem.isLive && (
                          <span className={styles.liveBadge}>
                            <span className={styles.liveIcon}>●</span> LIVE
                          </span>
                        )}
                        
                        {featuredItem.isVideo && (
                          <span className={styles.mediaBadge}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </span>
                        )}
                        
                        {featuredItem.isPhoto && (
                          <span className={styles.mediaBadge}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                            </svg>
                          </span>
                        )}
                      </>
                    ) : (
                      <div className={styles.imagePlaceholder}>
                        <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <h3 className={styles.featuredTitle}>{featuredItem.title}</h3>
                  
                  <span className={styles.featuredDate}>
                    {featuredItem.date || 'Just now'}
                  </span>
                </Link>
              </div>
              
              <div className={styles.headlinesSection}>
                {headlineItems.length > 0 ? (
                  <div className={styles.headlinesList}>
                    {headlineItems.map((item, idx) => (
                      <Link
                        key={item.id}
                        href={getItemLink(item, categorySection.categoryName)}
                        className={styles.headlineItem}
                        style={animationEnabled ? { animationDelay: `${(index * 0.1) + (idx * 0.05)}s` } : undefined}
                      >
                        <span className={styles.headlineBorder}></span>
                        <div className={styles.headlineContent}>
                          <p className={styles.headlineText}>{item.title}</p>
                          {item.date && (
                            <span className={styles.headlineDate}>{item.date}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noHeadlines}>
                    <p>No additional headlines</p>
                  </div>
                )}
              </div>
              
              {featuredItem.relatedLinks && featuredItem.relatedLinks.length > 0 && (
                <div className={styles.relatedLinksSection}>
                  <h4 className={styles.relatedLinksTitle}>Related Stories</h4>
                  <ul className={styles.relatedLinksList}>
                    {featuredItem.relatedLinks.slice(0, 3).map((link, idx) => (
                      <li key={idx} className={styles.relatedLinkItem}>
                        <span className={styles.relatedLinkBullet}>→</span>
                        <span className={styles.relatedLinkText}>{link}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {showViewMore && (
                <div className={styles.cardFooter}>
                  <Link 
                    href={getCategoryLink(categorySection.categoryName)}
                    className={styles.moreAboutButton}
                  >
                    <span>More About {categorySection.categoryName}</span>
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCards;
