// app/Pages/entertainment/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestEntertainmentNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromEntertainmentData } from '@/Data/MoreFromSection/MoreFromSection'
import { entertainmentSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Helper function to format category title
function formatCategoryTitle(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Filter news by category
function getNewsByCategory(category: string, allNews: any[]) {
  const formattedCategory = formatCategoryTitle(category);
  return allNews.filter(news => 
    news.category?.toLowerCase() === formattedCategory.toLowerCase()
  );
}

export default async function EntertainmentCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "bollywood" -> "Bollywood")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in entertainment subcategories
  const validCategory = entertainmentSectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestEntertainmentNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromEntertainmentData);

  // Filter main news by category
  const filteredMainNews = entertainmentSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = entertainmentSectionData.topNews;

  // If no specific news found, use all entertainment news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : entertainmentSectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestEntertainmentNews;

  const displayMoreFrom = filteredMoreFrom.length > 0 
    ? filteredMoreFrom 
    : moreFromEntertainmentData;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={entertainmentSectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/entertainment/${category}`}
        columns={3}
      />
      
      <PhotosSection />
      
      <MoreFromSection 
        sectionTitle={`More From ${categoryTitle}`}
        items={displayMoreFrom}
        columns={2}
      />
    </>
  );
}

// Generate static params for all entertainment categories
export async function generateStaticParams() {
  // Use actual subcategories from entertainmentSectionData
  const categories = entertainmentSectionData.subCategories.map(cat => 
    cat.toLowerCase().replace(/\s+/g, '-')
  );

  return categories.map((category) => ({
    category: category
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryTitle = formatCategoryTitle(category);

  // Custom descriptions based on category
  const categoryDescriptions: Record<string, string> = {
    'bollywood': 'Get the latest Bollywood news, movie reviews, celebrity gossip, film releases, box office collections, and exclusive entertainment updates.',
    'hollywood': 'Stay updated with Hollywood news, international movie releases, celebrity updates, award shows, and global entertainment trends.',
    'television': 'Watch the latest TV show updates, serial news, reality show gossip, TRP ratings, and television industry developments.',
    'ott': 'Discover new web series, OTT platform releases, streaming reviews, Netflix shows, Amazon Prime content, and digital entertainment news.',
    'music': 'Explore music releases, album reviews, concert updates, artist interviews, music awards, and trending songs from India and worldwide.',
    'regional-cinema': 'Get updates on Tamil, Telugu, Malayalam, Kannada, Bengali, and other regional cinema news, movie releases, and celebrity updates.',
    'web-series': 'Binge-watch the best web series reviews, episode recaps, streaming platform updates, and digital content recommendations.',
    'celebrity-news': 'Read exclusive celebrity interviews, star gossip, lifestyle updates, relationships, fashion, and behind-the-scenes stories.',
    'box-office': 'Track box office collections, movie earnings, weekend numbers, hit or flop verdicts, and film industry business updates.',
    'awards': 'Stay updated with award shows, Oscar nominations, Filmfare awards, IIFA, Emmy winners, and entertainment industry honors.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, updates, celebrity gossip, and exclusive entertainment stories. Stay informed about ${categoryTitle} developments.`;

  return {
    title: `${categoryTitle} News - Latest ${categoryTitle} Updates & Celebrity Gossip | Entertainment`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} updates, entertainment news, celebrity gossip, ${categoryTitle} movies, ${categoryTitle} shows`,
    openGraph: {
      title: `${categoryTitle} - Latest Entertainment News & Updates`,
      description: description,
      type: 'website',
    },
  };
}
