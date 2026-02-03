'use client';
import React from 'react';
import styles from './MoreStories.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Story {
  id: string;
  image: string;
  category: string;
  title: string;
  timeAgo: string;
  author: string;
  slug: string;
}

interface MoreStoriesSectionProps {
  stories?: Story[];
  title?: string;
}

const defaultStoriesData: Story[] = [
  {
    id: '1',
    image: '/images/cm-appointment.jpg',
    category: 'Uttarakhand Dehradun Religion-Culture Politics Employment',
    title: 'Chief Minister Dhami distributed appointment letters to 1035 assistant teachers',
    timeAgo: '1 day ago',
    author: 'Nagram Consultant Services',
    slug: 'cm-teachers-appointment-uttarakhand'
  },
  {
    id: '2',
    image: '/images/flag-hoisting.jpg',
    category: 'Uttarakhand Dehradun Religion-Culture',
    title: 'Governor hoisted the national flag at Lok Bhawan and Parade Ground on the occasion of Republic Day',
    timeAgo: '3 days ago',
    author: 'Nagram Consultant Services',
    slug: 'republic-day-flag-hoisting-uttarakhand'
  },
  {
    id: '3',
    image: '/images/cm-republic-day.jpg',
    category: 'Uttarakhand Dehradun Religion-Culture Politics',
    title: 'Chief Minister extended Republic Day greetings to the people of the state',
    timeAgo: '4 days ago',
    author: 'Nagram Consultant Services',
    slug: 'cm-republic-day-wishes-uttarakhand'
  }
];

const MoreStoriesSection: React.FC<MoreStoriesSectionProps> = ({ 
  stories, 
  title = 'MORE STORIES' 
}) => {
  const displayStories = stories && stories.length > 0 ? stories : defaultStoriesData;

  return (
    <section className={styles.moreStoriesSection}>
      <div className={styles.containerInner}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleIcon}></div>
          <h2 className={styles.mainTitle}>{title}</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.storiesGrid}>
          {displayStories.map((story, index) => (
            <Link
              key={story.id}
              href={`/news/${story.slug}`}
              className={styles.storyCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className={styles.storyImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.categoryWrapper}>
                  <div className={styles.categoryDot}></div>
                  <p className={styles.category}>{story.category}</p>
                </div>

                <h3 className={styles.storyTitle}>{story.title}</h3>

                <div className={styles.metaInfo}>
                  <div className={styles.timeWrapper}>
                    <svg
                      className={styles.clockIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 7v5l3 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className={styles.timeAgo}>{story.timeAgo}</span>
                  </div>

                  <div className={styles.authorWrapper}>
                    <svg
                      className={styles.authorIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className={styles.author}>{story.author}</span>
                  </div>
                </div>
              </div>

              <div className={styles.hoverArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStoriesSection;

export type { Story };
