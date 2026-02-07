"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAllNews, useNewsBySection, NewsItem, ApiResponse } from '@/app/hooks/NewsApi';

interface NewsContextType {
  allNews: NewsItem[] | null;
  indiaNews: NewsItem[] | null;
  sportsNews: NewsItem[] | null;
  businessNews: NewsItem[] | null;
  loading: boolean;
  error: string | null;
  refetchAll: () => void;
  refetchIndia: () => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: allNewsData, loading, error, refetch: refetchAll } = useAllNews();
  const { data: indiaData, refetch: refetchIndia } = useNewsBySection('india');
  
  const [allNews, setAllNews] = useState<NewsItem[] | null>(null);
  const [indiaNews, setIndiaNews] = useState<NewsItem[] | null>(null);
  const [sportsNews, setSportsNews] = useState<NewsItem[] | null>(null);
  const [businessNews, setBusinessNews] = useState<NewsItem[] | null>(null);

  // Flatten all news from sections
  console.log(allNewsData)
useEffect(() => {
  if (allNewsData?.[0]) {
    const config = allNewsData[0];

    setIndiaNews(config.india || null);
    setSportsNews(config.sports || null);
    setBusinessNews(config.business || null);

    const flattened: NewsItem[] = [];

    ['india', 'sports', 'business'].forEach(section => {
      if (Array.isArray(config[section])) {
        flattened.push(...config[section]);
      }
    });

    setAllNews(flattened);
  }
}, [allNewsData]);


  return (
    <NewsContext.Provider value={{
      allNews,indiaNews,
      sportsNews,
      businessNews,
      loading,
      error,
      refetchAll,
      refetchIndia,
    }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within NewsProvider');
  }
  return context;
};
