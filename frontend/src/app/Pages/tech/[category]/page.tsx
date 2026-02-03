// app/Pages/technology/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestTechnologyNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromTechnologyData } from '@/Data/MoreFromSection/MoreFromSection'
import { technologySectionData } from '@/Data/NewsSection/NewsSection'
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

export default async function TechnologyCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "ai" -> "AI", "smartphones" -> "Smartphones")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in technology subcategories
  const validCategory = technologySectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestTechnologyNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromTechnologyData);

  // Filter main news by category
  const filteredMainNews = technologySectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = technologySectionData.topNews;

  // If no specific news found, use all technology news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : technologySectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestTechnologyNews;

  const displayMoreFrom = filteredMoreFrom.length > 0 
    ? filteredMoreFrom 
    : moreFromTechnologyData;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={technologySectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/technology/${category}`}
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

// Generate static params for all technology categories
export async function generateStaticParams() {
  // Use actual subcategories from technologySectionData
  const categories = technologySectionData.subCategories.map(cat => 
    cat.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')
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
    'ai': 'Get the latest AI news, artificial intelligence developments, ChatGPT updates, machine learning breakthroughs, and AI technology innovations.',
    'smartphones': 'Stay updated with smartphone launches, mobile phone reviews, Android updates, iOS news, and latest mobile technology trends.',
    'gadgets': 'Discover new gadgets, tech reviews, wearables, smart devices, innovative technology products, and electronics news.',
    'apps': 'Explore new app launches, software updates, mobile applications, productivity tools, and digital platform developments.',
    'gaming': 'Follow gaming news, video game releases, esports updates, PlayStation, Xbox, PC gaming, and gaming industry trends.',
    'cybersecurity': 'Read about cybersecurity threats, data breaches, privacy issues, hacking news, security updates, and digital safety tips.',
    'science': 'Stay informed about scientific discoveries, research breakthroughs, space exploration, innovations, and technology advancements.',
    'space': 'Get space news, NASA updates, SpaceX launches, astronomy discoveries, satellite missions, and space exploration developments.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, product launches, reviews, and technology updates. Stay informed about ${categoryTitle} innovations and trends.`;

  return {
    title: `${categoryTitle} News - Latest ${categoryTitle} Updates & Tech Reviews | Technology`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} updates, technology news, tech reviews, ${categoryTitle} innovations, gadgets`,
    openGraph: {
      title: `${categoryTitle} - Latest Technology News & Updates`,
      description: description,
      type: 'website',
    },
  };
}
