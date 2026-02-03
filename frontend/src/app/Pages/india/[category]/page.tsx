// app/Pages/sports/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestIndiaNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromIndiaData, moreFromSportsData } from '@/Data/MoreFromSection/MoreFromSection'
import { indiaSectionData } from '@/Data/NewsSection/NewsSection'
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
    news.category.toLowerCase() === formattedCategory.toLowerCase()
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "cricket" -> "Cricket")
  const categoryTitle = formatCategoryTitle(category);

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestIndiaNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromIndiaData);

  // Filter main news by category
  const filteredMainNews = indiaSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // If no news found for this category, show 404
  if (filteredLatestNews.length === 0 && filteredMainNews.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={indiaSectionData.subCategories}
        mainNews={filteredMainNews.length > 0 ? filteredMainNews : indiaSectionData.mainNews}
        topNews={indiaSectionData.topNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={filteredLatestNews.length > 0 ? filteredLatestNews : latestIndiaNews}
        showReadMore={true}
        readMoreLink={`/sports/${category}`}
        columns={3}
      />
      
      <PhotosSection />
      
      <MoreFromSection 
        sectionTitle={`More From ${categoryTitle}`} // Dynamic title
        items={filteredMoreFrom.length > 0 ? filteredMoreFrom : moreFromSportsData}
        columns={2}
      />
    </>
  );
}

// Generate static params for all sport categories
export async function generateStaticParams() {
  const categories = [
  'Maharashtra',
  'Karnataka',
  'Delhi',
 'Uttar Pradesh',
 'West Bengal',
 'Tamil Nadu',
 'Telangana',
 'Gujarat',
 'Rajasthan',
 'Kerala',
 'Punjab',
 'Haryana',
 'Assam'
  ];

  return categories.map((category) => ({
    category: category
  }));
}

// Optional: Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryTitle = formatCategoryTitle(category);

  return {
    title: `${categoryTitle} News - Latest ${categoryTitle} Updates`,
    description: `Get the latest ${categoryTitle} news, updates, scores, and highlights.`
  };
}
