import React from 'react';
import styles from './MoreFromSection.module.scss';
import Link from 'next/link';

export interface MoreFromItem {
  id: string | number;
  title: string;
  image: string;
  slug?: string;
  category?: string;
}

interface MoreFromSectionProps {
  sectionTitle: string;
  items: MoreFromItem[];
  columns?: 2 | 3;
}

const MoreFromSection: React.FC<MoreFromSectionProps> = ({ 
  sectionTitle,
  items,
  columns = 2
}) => {
  return (
    <div className={styles.moreFromWrapper}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.titleUnderline}></div>
      </div>
      
      <div className={`${styles.itemsGrid} ${styles[`cols${columns}`]}`}>
        {items.map((item, index) => {
          const href = item.slug ? `/news/${item.slug}` : `/news/${item.id}`;
          const isImageLeft = index % 2 === 0;
          
          return (
            <Link 
              key={item.id} 
              href={href}
              className={`${styles.newsItem} ${isImageLeft ? styles.imageLeft : styles.imageRight}`}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.contentContainer}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MoreFromSection;
