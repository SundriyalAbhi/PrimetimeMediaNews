import React from 'react';
import Link from 'next/link';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  section: string;
  category: string;
  title: string;
}

export default function Breadcrumb({ section, category, title }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb}>
      <Link href="/" className={styles.link}>News</Link>
      <span className={styles.separator}>/</span>
      <Link href={`/${section.toLowerCase()}`} className={styles.link}>
        {section}
      </Link>
      <span className={styles.separator}>/</span>
      <Link href={`/${section.toLowerCase()}/${category.toLowerCase()}`} className={styles.link}>
        {category}
      </Link>
      <span className={styles.separator}>/</span>
      <span className={styles.current}>{title}</span>
    </nav>
  );
}
