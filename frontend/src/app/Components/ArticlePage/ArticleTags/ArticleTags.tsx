import React from 'react';
import Link from 'next/link';
import styles from './ArticleTags.module.scss';

interface ArticleTagsProps {
  tags: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className={styles.articleTags}>
      <div className={styles.tagsList}>
        {tags.map((tag) => (
          <Link 
            key={tag}
            href={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            className={styles.tag}
          >
            {tag}
          </Link>
        ))}
      </div>
      
      <div className={styles.bottomCta}>
        <p className={styles.ctaText}>
          Read all the <Link href="/breaking-news" className={styles.link}>Breaking News</Link> Live on primetimemedia.in and Get <Link href="/latest-news" className={styles.link}>Latest English News</Link> & Updates from <Link href="/sports" className={styles.link}>Sports</Link> and <Link href="/sports/cricket" className={styles.link}>Cricket</Link> Section
        </p>
      </div>
    </div>
  );
}
