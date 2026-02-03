// app/data/moreStoriesData.ts

export interface Story {
  id: string;
  image: string;
  category: string;
  title: string;
  timeAgo: string;
  author: string;
  slug: string;
}

// INDIA MORE STORIES
export const indiaMoreStories: Story[] = [
  {
    id: 'india-story-1',
    image: '/images/india-budget-announcement.jpg',
    category: 'National Economy',
    title: 'Budget 2026: FM announces major tax relief for middle class, new income tax slabs introduced',
    timeAgo: '2 hours ago',
    author: 'Economic Times Desk',
    slug: 'budget-2026-tax-relief-new-slabs'
  },
  {
    id: 'india-story-2',
    image: '/images/delhi-metro-expansion.jpg',
    category: 'Delhi Infrastructure',
    title: 'Delhi Metro Phase 5 approved: 3 new corridors to connect Noida, Gurgaon and Faridabad',
    timeAgo: '4 hours ago',
    author: 'India Infrastructure',
    slug: 'delhi-metro-phase-5-expansion'
  },
  {
    id: 'india-story-3',
    image: '/images/maharashtra-political-update.jpg',
    category: 'Maharashtra Politics',
    title: 'Maharashtra cabinet reshuffle: 12 new ministers sworn in, key portfolios redistributed',
    timeAgo: '6 hours ago',
    author: 'Political Bureau',
    slug: 'maharashtra-cabinet-reshuffle-12-ministers'
  }
];

// WORLD MORE STORIES
export const worldMoreStories: Story[] = [
  {
    id: 'world-story-1',
    image: '/images/us-tech-regulation.jpg',
    category: 'USA Technology Policy',
    title: 'US Senate passes landmark AI regulation bill: Tech giants face stricter oversight and penalties',
    timeAgo: '3 hours ago',
    author: 'Global News Network',
    slug: 'us-senate-ai-regulation-tech-giants'
  },
  {
    id: 'world-story-2',
    image: '/images/europe-energy-crisis.jpg',
    category: 'Europe Energy',
    title: 'Europe achieves 60% renewable energy milestone: Coal power plants shut down across 15 countries',
    timeAgo: '5 hours ago',
    author: 'International Desk',
    slug: 'europe-60-percent-renewable-energy'
  },
  {
    id: 'world-story-3',
    image: '/images/middle-east-peace.jpg',
    category: 'Middle East Diplomacy',
    title: 'Historic Middle East peace summit: 8 nations sign economic cooperation agreement in Dubai',
    timeAgo: '7 hours ago',
    author: 'World Affairs',
    slug: 'middle-east-peace-summit-cooperation'
  }
];

// BUSINESS MORE STORIES
export const businessMoreStories: Story[] = [
  {
    id: 'business-story-1',
    image: '/images/stock-market-milestone.jpg',
    category: 'Markets Stocks',
    title: 'Sensex achieves historic 85,000 milestone: FII inflows cross Rs 50,000 crore in January 2026',
    timeAgo: '1 hour ago',
    author: 'Market Watch',
    slug: 'sensex-85000-fii-inflows-january'
  },
  {
    id: 'business-story-2',
    image: '/images/startup-unicorn.jpg',
    category: 'Startups Funding',
    title: 'Indian edtech startup becomes 150th unicorn: $500 million Series D funding from global investors',
    timeAgo: '3 hours ago',
    author: 'Startup India',
    slug: 'edtech-150th-unicorn-500-million-funding'
  },
  {
    id: 'business-story-3',
    image: '/images/rbi-digital-rupee.jpg',
    category: 'Banking Digital Currency',
    title: 'RBI expands digital rupee pilot: 50 million users onboarded, targets 100 million by June 2026',
    timeAgo: '5 hours ago',
    author: 'Banking Reporter',
    slug: 'rbi-digital-rupee-50-million-users'
  }
];

// TECHNOLOGY MORE STORIES
export const technologyMoreStories: Story[] = [
  {
    id: 'tech-story-1',
    image: '/images/apple-iphone-17.jpg',
    category: 'Smartphones Apple',
    title: 'Apple iPhone 17 leaked specs: Revolutionary foldable design, 200MP camera, India launch in September',
    timeAgo: '2 hours ago',
    author: 'Tech Insider',
    slug: 'apple-iphone-17-foldable-leaked-specs'
  },
  {
    id: 'tech-story-2',
    image: '/images/google-ai-gemini.jpg',
    category: 'AI Machine Learning',
    title: 'Google Gemini 2.0 launches globally: Multimodal AI surpasses GPT-5 in benchmark tests',
    timeAgo: '4 hours ago',
    author: 'AI Tech News',
    slug: 'google-gemini-2-multimodal-surpasses-gpt5'
  },
  {
    id: 'tech-story-3',
    image: '/images/india-semiconductor.jpg',
    category: 'Technology Manufacturing',
    title: 'India semiconductor mission success: First chip fabrication unit in Gujarat begins production',
    timeAgo: '6 hours ago',
    author: 'Tech Manufacturing',
    slug: 'india-semiconductor-gujarat-chip-production'
  }
];

// SPORTS MORE STORIES
export const sportsMoreStories: Story[] = [
  {
    id: 'sports-story-1',
    image: '/images/cricket-world-cup-schedule.jpg',
    category: 'Cricket ICC',
    title: 'T20 World Cup 2026 schedule released: India to play Pakistan in Ahmedabad on March 15',
    timeAgo: '1 hour ago',
    author: 'Cricket Correspondent',
    slug: 't20-world-cup-2026-schedule-india-pakistan'
  },
  {
    id: 'sports-story-2',
    image: '/images/indian-premier-league.jpg',
    category: 'IPL Cricket',
    title: 'IPL 2026 mega auction records: 5 players sold for over Rs 20 crore, total spend crosses Rs 800 crore',
    timeAgo: '3 hours ago',
    author: 'IPL Newsroom',
    slug: 'ipl-2026-auction-records-800-crore'
  },
  {
    id: 'sports-story-3',
    image: '/images/olympics-india-preparation.jpg',
    category: 'Olympics Athletics',
    title: 'Paris 2028 Olympics: India announces Rs 500 crore athlete development fund, targets 30 medals',
    timeAgo: '5 hours ago',
    author: 'Sports Authority',
    slug: 'paris-2028-india-500-crore-fund-30-medals'
  }
];

// ENTERTAINMENT MORE STORIES
export const entertainmentMoreStories: Story[] = [
  {
    id: 'ent-story-1',
    image: '/images/bollywood-box-office.jpg',
    category: 'Bollywood Box Office',
    title: 'Pushpa 3 crosses Rs 1000 crore worldwide: Allu Arjun film breaks all-time collection records',
    timeAgo: '2 hours ago',
    author: 'Film Trade Analyst',
    slug: 'pushpa-3-1000-crore-worldwide-records'
  },
  {
    id: 'ent-story-2',
    image: '/images/ott-releases.jpg',
    category: 'OTT Streaming',
    title: 'Netflix India originals dominate: Sacred Games Season 3 becomes most-watched series globally',
    timeAgo: '4 hours ago',
    author: 'Entertainment Reporter',
    slug: 'sacred-games-season-3-most-watched'
  },
  {
    id: 'ent-story-3',
    image: '/images/music-awards.jpg',
    category: 'Music Awards',
    title: 'Grammy Awards 2026: AR Rahman wins third Grammy, Indian artists sweep World Music category',
    timeAgo: '6 hours ago',
    author: 'Music Correspondent',
    slug: 'grammy-2026-ar-rahman-third-award'
  }
];

// LIFESTYLE MORE STORIES
export const lifestyleMoreStories: Story[] = [
  {
    id: 'lifestyle-story-1',
    image: '/images/wellness-retreat-goa.jpg',
    category: 'Travel Wellness',
    title: 'Goa wellness retreats book out for 2026: Yoga tourism generates Rs 5000 crore revenue annually',
    timeAgo: '3 hours ago',
    author: 'Travel & Leisure',
    slug: 'goa-wellness-retreats-5000-crore-yoga-tourism'
  },
  {
    id: 'lifestyle-story-2',
    image: '/images/sustainable-fashion-week.jpg',
    category: 'Fashion Sustainability',
    title: 'Lakme Fashion Week 2026: 80% designers showcase sustainable collections, eco-friendly fabrics',
    timeAgo: '5 hours ago',
    author: 'Fashion Desk',
    slug: 'lakme-fashion-week-sustainable-collections'
  },
  {
    id: 'lifestyle-story-3',
    image: '/images/food-delivery-healthy.jpg',
    category: 'Food Health',
    title: 'Healthy food delivery booms: Indians order 200% more salads, protein bowls in 2026',
    timeAgo: '7 hours ago',
    author: 'Food & Dining',
    slug: 'healthy-food-delivery-200-percent-growth'
  }
];

// HEALTH MORE STORIES
export const healthMoreStories: Story[] = [
  {
    id: 'health-story-1',
    image: '/images/cancer-vaccine-india.jpg',
    category: 'Medical Research Oncology',
    title: 'AIIMS develops cancer vaccine: Clinical trials show 85% efficacy in preventing cervical cancer',
    timeAgo: '2 hours ago',
    author: 'Medical Science',
    slug: 'aiims-cancer-vaccine-85-percent-efficacy'
  },
  {
    id: 'health-story-2',
    image: '/images/mental-health-app.jpg',
    category: 'Mental Health Digital',
    title: 'Government launches free mental health app: 10 million downloads in first week, multilingual support',
    timeAgo: '4 hours ago',
    author: 'Health Technology',
    slug: 'mental-health-app-10-million-downloads'
  },
  {
    id: 'health-story-3',
    image: '/images/ayurveda-global.jpg',
    category: 'Wellness Ayurveda',
    title: 'Ayurveda goes global: WHO recognizes 50 Indian traditional medicine practices, international demand surges',
    timeAgo: '6 hours ago',
    author: 'Alternative Medicine',
    slug: 'ayurveda-who-recognition-50-practices'
  }
];

// CENTRALIZED MORE STORIES DATA MAPPING
export const ALL_MORE_STORIES: Record<string, Story[]> = {
  india: indiaMoreStories,
  world: worldMoreStories,
  business: businessMoreStories,
  technology: technologyMoreStories,
  sports: sportsMoreStories,
  entertainment: entertainmentMoreStories,
  lifestyle: lifestyleMoreStories,
  health: healthMoreStories
};

// Helper function to get more stories by section
export const getMoreStoriesBySection = (sectionName: string): Story[] => {
  const normalizedSection = sectionName.toLowerCase();
  return ALL_MORE_STORIES[normalizedSection] || [];
};

// Get all available sections for more stories
export const getAllMoreStoriesSections = (): string[] => {
  return Object.keys(ALL_MORE_STORIES);
};

// Type for section names
export type MoreStoriesSection = keyof typeof ALL_MORE_STORIES;
