// app/Pages/business/[category]/page.tsx
import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsCards from '@/app/Components/Common/NewsCard/NewsCard'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestBusinessNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromBusinessData } from '@/Data/MoreFromSection/MoreFromSection'
import { businessNewsData } from '@/Data/NewsCardData/NewsCardData'
import { businessSectionData } from '@/Data/NewsSection/NewsSection'
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

export default async function BusinessCategoryPage({ params }: CategoryPageProps) {
  // Await params to get category from URL
  const { category } = await params;

  // Format category for display (e.g., "real-estate" -> "Real Estate")
  const categoryTitle = formatCategoryTitle(category);

  // Validate if category exists in business subcategories
  const validCategory = businessSectionData.subCategories
    .map(cat => cat.toLowerCase().replace(/\s+/g, '-'))
    .includes(category.toLowerCase());

  if (!validCategory) {
    notFound();
  }

  // Filter news data by category
  const filteredLatestNews = getNewsByCategory(category, latestBusinessNews);
  const filteredMoreFrom = getNewsByCategory(category, moreFromBusinessData);
  const filteredNewsCards = getNewsByCategory(category, businessNewsData);

  // Filter main news by category
  const filteredMainNews = businessSectionData.mainNews.filter(
    news => news.category?.toLowerCase() === categoryTitle.toLowerCase()
  );

  // Filter top news (optional: show all or filter)
  const filteredTopNews = businessSectionData.topNews;

  // If no specific news found, use all business news but with category title
  const displayMainNews = filteredMainNews.length > 0 
    ? filteredMainNews 
    : businessSectionData.mainNews;

  const displayLatestNews = filteredLatestNews.length > 0 
    ? filteredLatestNews 
    : latestBusinessNews;

  const displayMoreFrom = filteredMoreFrom.length > 0 
    ? filteredMoreFrom 
    : moreFromBusinessData;

  const displayNewsCards = filteredNewsCards.length > 0
    ? filteredNewsCards
    : businessNewsData;

  return (
    <>
      <NewsSection 
        sectionTitle={categoryTitle} 
        subCategories={businessSectionData.subCategories}
        mainNews={displayMainNews}
        topNews={filteredTopNews}
        showSidebar={true}
        gridColumns={3}
      />
      
      <LatestNewsSection
        sectionTitle={`Latest ${categoryTitle} News`} 
        newsData={displayLatestNews}
        showReadMore={true}
        readMoreLink={`/business/${category}`}
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

// Generate static params for all business categories
export async function generateStaticParams() {
  // Use actual subcategories from businessSectionData
  const categories = businessSectionData.subCategories.map(cat => 
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
    'markets': 'Track stock market updates, Sensex, Nifty, BSE, NSE, share prices, market analysis, and live trading insights.',
    'economy': 'Get the latest Indian economy news, GDP growth, inflation rates, economic policies, fiscal updates, and macroeconomic trends.',
    'banking': 'Stay updated with banking news, RBI policies, interest rates, loan updates, digital banking, and financial sector developments.',
    'startups': 'Discover Indian startup ecosystem news, funding rounds, unicorns, venture capital, entrepreneurship, and innovation stories.',
    'cryptocurrency': 'Follow cryptocurrency news, Bitcoin prices, blockchain technology, crypto regulations, digital assets, and Web3 developments.',
    'real-estate': 'Explore real estate market trends, property prices, housing news, RERA updates, commercial real estate, and investment opportunities.',
    'ipo': 'Track IPO listings, public offerings, grey market premium, allotment status, subscription details, and new stock launches.',
    'fintech': 'Read about fintech innovations, digital payments, UPI updates, financial technology, payment gateways, and banking tech solutions.'
  };

  const description = categoryDescriptions[category.toLowerCase()] || 
    `Get the latest ${categoryTitle} news, market updates, expert analysis, and business insights. Stay informed about ${categoryTitle} developments in India and globally.`;

  return {
    title: `${categoryTitle} News - Latest ${categoryTitle} Updates & Market Analysis | Business`,
    description: description,
    keywords: `${categoryTitle}, ${categoryTitle} news, ${categoryTitle} India, business news, market updates, ${categoryTitle} analysis, economy`,
    openGraph: {
      title: `${categoryTitle} - Latest Business News & Updates`,
      description: description,
      type: 'website',
    },
  };
}
