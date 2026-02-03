// app/Pages/health/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { VideosSection } from '@/app/Components/Common/VideosSection/VideosSection'
import { latestHealthNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { healthSectionData } from '@/Data/NewsSection/NewsSection'
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

export default async function HealthCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "mental-health" -> "Mental Health")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in health subcategories
  const validCategory = healthSectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestHealthNews);

  // Filter main news by category
  const filteredMainNews = healthSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = healthSectionData.topNews;

  // If no specific news found, use all health news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : healthSectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestHealthNews;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={healthSectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/health/${category}`}
        columns={3}
      />

      <VideosSection />
      
      <PhotosSection />
    </>
  );
}

// Generate static params for all health categories
export async function generateStaticParams() {
  // Use actual subcategories from healthSectionData
  const categories = healthSectionData.subCategories.map(cat => 
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
    'medical-research': 'Stay updated with the latest medical research, breakthrough treatments, clinical trials, and scientific discoveries in healthcare.',
    'mental-health': 'Get expert advice on mental health, depression, anxiety, stress management, therapy options, and emotional wellness.',
    'wellness': 'Explore wellness trends, holistic health practices, preventive care, lifestyle modifications, and overall well-being tips.',
    'digital-health': 'Discover digital health innovations, telemedicine, health apps, AI in healthcare, and technology-driven medical solutions.',
    'disease-prevention': 'Learn about disease prevention strategies, vaccination updates, health screening guidelines, and public health initiatives.',
    'policy': 'Read about healthcare policy changes, government health schemes, insurance updates, and regulatory developments in Indian healthcare.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, expert advice, research updates, and health tips. Stay informed about ${categoryTitle} developments in India and globally.`;

  return {
    title: `${categoryTitle} - Latest ${categoryTitle} News & Updates | Health`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} India, health news, medical updates, healthcare, ${categoryTitle} tips`,
    openGraph: {
      title: `${categoryTitle} - Latest Health News & Updates`,
      description: description,
      type: 'website',
    },
  };
}
