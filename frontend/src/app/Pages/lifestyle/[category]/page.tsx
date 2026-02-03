// app/Pages/lifestyle/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import NewsCards from '@/app/Components/Common/NewsCard/NewsCard'
import { latestLifestyleNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromLifestyleData } from '@/Data/MoreFromSection/MoreFromSection'
import { lifestyleNewsData } from '@/Data/NewsCardData/NewsCardData'
import { lifestyleSectionData } from '@/Data/NewsSection/NewsSection'
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

export default async function LifestyleCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "health-fitness" -> "Health Fitness")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in lifestyle subcategories
  const validCategory = lifestyleSectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestLifestyleNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromLifestyleData);
  const filteredNewsCards = getNewsByCategory(category, lifestyleNewsData);

  // Filter main news by category
  const filteredMainNews = lifestyleSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = lifestyleSectionData.topNews;

  // If no specific news found, use all lifestyle news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : lifestyleSectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestLifestyleNews;

  const displayMoreFrom = filteredMoreFrom.length > 0 
    ? filteredMoreFrom 
    : moreFromLifestyleData;

  const displayNewsCards = filteredNewsCards.length > 0
    ? filteredNewsCards
    : lifestyleNewsData;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={lifestyleSectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/lifestyle/${category}`}
        columns={3}
      />

      <NewsCards 
        data={displayNewsCards} 
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

// Generate static params for all lifestyle categories
export async function generateStaticParams() {
  // Use actual subcategories from lifestyleSectionData
  const categories = lifestyleSectionData.subCategories.map(cat => 
    cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')
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
    'travel': 'Discover the latest travel destinations, tips, guides, and adventure stories from India and around the world.',
    'food': 'Explore delicious recipes, food trends, restaurant reviews, and culinary experiences.',
    'health-fitness': 'Stay healthy with the latest fitness trends, workout routines, wellness tips, and health news.',
    'fashion': 'Get the latest fashion trends, style tips, designer collections, and beauty advice.',
    'beauty': 'Discover beauty tips, skincare routines, makeup trends, and product reviews.',
    'wellness': 'Explore wellness trends, mindfulness practices, mental health tips, and holistic living.',
    'home-living': 'Get home decor ideas, interior design tips, DIY projects, and sustainable living advice.',
    'relationships': 'Read about relationship advice, love stories, dating tips, and family dynamics.',
    'parenting': 'Find parenting tips, child development advice, family activities, and educational resources.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, trends, tips, and expert advice. Stay updated with ${categoryTitle} stories and insights.`;

  return {
    title: `${categoryTitle} - Latest ${categoryTitle} News, Tips & Trends | Lifestyle`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} tips, ${categoryTitle} trends, lifestyle, wellness, ${categoryTitle} advice`,
    openGraph: {
      title: `${categoryTitle} - Latest News & Trends`,
      description: description,
      type: 'website',
    },
  };
}
