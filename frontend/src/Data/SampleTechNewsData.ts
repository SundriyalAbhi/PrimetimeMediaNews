export interface NewsItem {
  id: string | number;
  title: string;
  image?: string;
  category?: string;
  isLive?: boolean;
  isVideo?: boolean;
  isPhoto?: boolean;
  slug?: string;
  date?: string;
}

export interface CategorySection {
  categoryName: string;
  items: NewsItem[];
}

// Sample data matching your images
export const sampleNewsData: CategorySection[] = [
  {
    categoryName: 'Business',
    items: [
      {
        id: 'biz-1',
        title: 'Kerala Budget: State hikes pay of pre-primary teachers by Rs 1,000; honorariums of ASHAs hiked',
        image: '/images/kerala-budget-teachers.jpg',
        category: 'Business',
        slug: 'kerala-budget-teachers-pay-hike-2026',
        date: '2 hours ago'
      },
      {
        id: 'biz-2',
        title: 'Silver crosses Rs 4 lakh mark on MCX, gold hits all-time high of Rs 1,80,501 | Check city-wise rates',
        category: 'Business',
        slug: 'silver-gold-price-all-time-high',
        date: '3 hours ago'
      },
      {
        id: 'biz-3',
        title: 'Market Opening Bell: Sensex down 24 points, Nifty near 24,350, L&T among top gainers',
        category: 'Business',
        slug: 'market-opening-sensex-nifty-today',
        date: '4 hours ago'
      }
    ]
  },
  {
    categoryName: 'Technology',
    items: [
      {
        id: 'tech-1',
        title: 'Buying a smartphone? Reddit users reveal best phones of 2025 you can actually trust',
        image: '/images/smartphone-2025-reddit.jpg',
        category: 'Technology',
        slug: 'best-smartphones-2025-reddit-recommendations',
        date: '1 hour ago'
      },
      {
        id: 'tech-2',
        title: 'New Aadhaar app enables age verification on social media without sharing personal data',
        category: 'Technology',
        slug: 'aadhaar-app-age-verification-social-media',
        date: '3 hours ago'
      },
      {
        id: 'tech-3',
        title: 'Samsung Galaxy A57 5G design leaks: Metal frame, slim build and key features revealed ahead of launc',
        category: 'Technology',
        slug: 'samsung-galaxy-a57-5g-design-leak',
        date: '5 hours ago'
      },
      {
        id: 'tech-4',
        title: 'New Aadhaar app full version launched: Enhanced security features and improved user interface',
        category: 'Technology',
        slug: 'new-aadhaar-app-full-version-launch',
        date: '6 hours ago'
      }
    ]
  },
  {
    categoryName: 'Auto',
    items: [
      {
        id: 'auto-1',
        title: 'Why India-EU FTA won\'t make Mercedes-Benz, BMW cars cheaper anytime soon?',
        image: '/images/bmw-india-eu-fta.jpg',
        category: 'Auto',
        slug: 'india-eu-fta-luxury-cars-price',
        date: '2 hours ago'
      },
      {
        id: 'auto-2',
        title: 'Mahindra BE 6 EV fire in UP: Automaker reveals real cause behind viral incident',
        category: 'Auto',
        slug: 'mahindra-be6-ev-fire-cause-revealed',
        date: '4 hours ago'
      },
      {
        id: 'auto-3',
        title: 'BMW, Mercedes, Lamborghini cars to get cheaper in India as EU trade deal nears implementation',
        category: 'Auto',
        slug: 'luxury-cars-cheaper-india-eu-trade-deal',
        date: '5 hours ago'
      },
      {
        id: 'auto-4',
        title: 'Renault Duster returns to India: New 4x4 SUV debuts with hybrid powertrain, terrain modes',
        category: 'Auto',
        slug: 'renault-duster-india-launch-2026',
        date: '7 hours ago'
      }
    ]
  },
  {
    categoryName: 'Education',
    items: [
      {
        id: 'edu-1',
        title: 'UGC NET result date 2026: How to download scorecard PDF at ugcnet.nta.nic.in',
        image: '/images/ugc-net-result-2026.jpg',
        category: 'Education',
        slug: 'ugc-net-result-date-2026-download',
        date: '1 hour ago'
      },
      {
        id: 'edu-2',
        title: 'JEE Main Jan 28 shift two analysis 2026: Check section-wise paper review, difficulty level',
        category: 'Education',
        slug: 'jee-main-jan-28-shift-two-analysis',
        date: '3 hours ago'
      },
      {
        id: 'edu-3',
        title: 'CUET UG registration 2026 to close on January 30; steps to apply at cuet.nta.nic.in',
        category: 'Education',
        slug: 'cuet-ug-registration-2026-last-date',
        date: '5 hours ago'
      },
      {
        id: 'edu-4',
        title: 'FMGE Result 2026: How to download scorecard pdf at natboard.edu.in',
        category: 'Education',
        slug: 'fmge-result-2026-download-scorecard',
        date: '6 hours ago'
      }
    ]
  },
  {
    categoryName: 'Health',
    items: [
      {
        id: 'health-1',
        title: 'Cold weather, hormonal chaos? A doctor explains why PCOS feels harder in winter',
        image: '/images/pcos-winter-health.jpg',
        category: 'Health',
        slug: 'pcos-symptoms-worse-winter-doctor-explains',
        date: '2 hours ago'
      },
      {
        id: 'health-2',
        title: 'Cervical cancer kills 75,000 Indian women every year: Here\'s how to protect yourself',
        category: 'Health',
        slug: 'cervical-cancer-prevention-india',
        date: '4 hours ago'
      },
      {
        id: 'health-3',
        title: 'Myths vs medical facts about the Nipah virus: What doctor wants the public to know',
        category: 'Health',
        slug: 'nipah-virus-myths-facts-doctor-explains',
        date: '6 hours ago'
      },
      {
        id: 'health-4',
        title: 'Nipah virus explained: Doctor explains 6 ways this rare infection is more dangerous than others',
        category: 'Health',
        slug: 'nipah-virus-dangerous-infection-explained',
        date: '8 hours ago'
      }
    ]
  },
  {
    categoryName: 'Astro',
    items: [
      {
        id: 'astro-1',
        title: 'Mangal Gochar 2026: Mars\' entry into Saturn\'s sign may bring a tough phase for these 3 zodiac signs',
        image: '/images/mars-saturn-astrology-2026.jpg',
        category: 'Astro',
        slug: 'mangal-gochar-2026-zodiac-signs-affected',
        date: '1 hour ago'
      },
      {
        id: 'astro-2',
        title: 'Shadashtak Yog 2026: These 4 zodiac signs will see major career and money gains',
        category: 'Astro',
        slug: 'shadashtak-yog-2026-zodiac-career-money',
        date: '3 hours ago'
      },
      {
        id: 'astro-3',
        title: 'Horoscope today, January 28, 2026: What the stars say for Aries, Taurus, Gemini and all zodiac signs',
        category: 'Astro',
        slug: 'horoscope-today-january-28-2026',
        date: '5 hours ago'
      },
      {
        id: 'astro-4',
        title: 'Horoscope today, January 27, 2026: Daily predictions for all zodiac signs',
        category: 'Astro',
        slug: 'horoscope-today-january-27-2026',
        date: 'Yesterday'
      }
    ]
  }
];
