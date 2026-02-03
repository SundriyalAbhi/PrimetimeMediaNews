// app/Pages/world/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestWorldNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromWorldData } from '@/Data/MoreFromSection/MoreFromSection'
import { worldSectionData } from '@/Data/NewsSection/NewsSection'
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

export default async function WorldCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "middle-east" -> "Middle East")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in world subcategories
  const validCategory = worldSectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestWorldNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromWorldData);

  // Filter main news by category
  const filteredMainNews = worldSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = worldSectionData.topNews;

  // If no specific news found, use all world news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : worldSectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestWorldNews;

  const displayMoreFrom = filteredMoreFrom.length > 0 
    ? filteredMoreFrom 
    : moreFromWorldData;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={worldSectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/world/${category}`}
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

// Generate static params for all world categories
export async function generateStaticParams() {
  // Use actual subcategories from worldSectionData
  const categories = worldSectionData.subCategories.map(cat => 
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
    'usa': 'Get the latest USA news, US politics, Donald Trump updates, White House developments, American economy, and breaking news from the United States.',
    'europe': 'Stay updated with European news, EU politics, UK updates, Brexit developments, European economy, and major stories from across Europe.',
    'middle-east': 'Follow Middle East news, Israel-Gaza conflict, Iran updates, Saudi Arabia developments, regional politics, and Gulf countries news.',
    'asia-pacific': 'Read Asia Pacific news, China updates, Japan developments, Southeast Asia stories, Pacific region politics, and economic trends.',
    'africa': 'Explore African news, political developments, economic growth, humanitarian issues, and major stories from across the African continent.',
    'latin-america': 'Discover Latin American news, Brazil updates, South American politics, regional economy, and developments from Central and South America.',
    'australia': 'Get Australian news, politics, economy, bushfire updates, climate issues, and breaking stories from down under.',
    'united-nations': 'Follow UN news, international diplomacy, peacekeeping missions, global health initiatives, and United Nations resolutions.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, political developments, economic updates, and breaking international stories. Stay informed about ${categoryTitle} events.`;

  return {
    title: `${categoryTitle} News - Latest ${categoryTitle} Updates & International Headlines | World`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} updates, world news, international news, global politics, ${categoryTitle} developments`,
    openGraph: {
      title: `${categoryTitle} - Latest World News & Updates`,
      description: description,
      type: 'website',
    },
  };
}
