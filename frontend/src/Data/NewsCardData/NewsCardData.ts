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
  relatedLinks?: string[];
}

export interface CategorySection {
  categoryName: string;
  items: NewsItem[];
  subcategories?: string[];
}

// ==================== BUSINESS NEWS ====================

// Market News
export const marketNewsData: CategorySection = {
  categoryName: 'Market',
  subcategories: ['Stock Market', 'Commodities', 'Forex'],
  items: [
    {
      id: 'market-1',
      title: 'Sensex crosses 85,000 mark for first time, Nifty at record high driven by IT stocks',
      image: '/images/sensex-85000-record.jpg',
      category: 'Market',
      slug: 'sensex-85000-nifty-record-high',
      date: '1 hour ago',
      relatedLinks: [
        'Top 5 stocks to buy today: Expert picks for January 29, 2026',
        'Foreign institutional investors pump Rs 15,000 crore in Indian markets',
        'Banking stocks rally as RBI maintains accommodative stance'
      ]
    },
    {
      id: 'market-2',
      title: 'Silver crosses Rs 4 lakh mark on MCX, gold hits all-time high of Rs 1,80,501 per 10 grams',
      category: 'Market',
      slug: 'silver-gold-price-all-time-high',
      date: '2 hours ago'
    },
    {
      id: 'market-3',
      title: 'Market Opening Bell: Sensex down 24 points, Nifty near 24,350, L&T among top gainers',
      category: 'Market',
      slug: 'market-opening-sensex-nifty-today',
      date: '3 hours ago'
    },
    {
      id: 'market-4',
      title: 'Rupee strengthens to 82 per dollar, best performance in 6 months amid FII inflows',
      category: 'Market',
      slug: 'rupee-strengthens-82-dollar',
      date: '4 hours ago'
    },
    {
      id: 'market-5',
      title: 'Adani Group stocks rally 15% after regulatory concerns cleared by SEBI',
      category: 'Market',
      slug: 'adani-group-stocks-rally-15-percent',
      date: '5 hours ago'
    }
  ]
};

// Personal Finance News
export const personalFinanceNewsData: CategorySection = {
  categoryName: 'Personal Finance',
  subcategories: ['Investment', 'Savings', 'Insurance'],
  items: [
    {
      id: 'pf-1',
      title: 'Fixed Deposit rates 2026: SBI, HDFC, ICICI offer up to 8% interest for senior citizens',
      image: '/images/fd-rates-banks.jpg',
      category: 'Personal Finance',
      slug: 'fd-rates-senior-citizens-2026',
      date: '2 hours ago',
      relatedLinks: [
        'Best banks for senior citizen savings accounts in 2026',
        'How to calculate FD returns: Online calculator and formula',
        'Tax implications on FD interest: Complete guide for investors'
      ]
    },
    {
      id: 'pf-2',
      title: 'Mutual Fund investment: Best SIP plans for long-term wealth creation in 2026',
      category: 'Personal Finance',
      slug: 'best-sip-mutual-funds-2026',
      date: '4 hours ago'
    },
    {
      id: 'pf-3',
      title: 'PPF interest rate hiked to 7.8%: Here s how to maximize your returns',
      category: 'Personal Finance',
      slug: 'ppf-interest-rate-hike-2026',
      date: '6 hours ago'
    },
    {
      id: 'pf-4',
      title: 'Life insurance vs term insurance: Which one should you choose in 2026?',
      category: 'Personal Finance',
      slug: 'life-insurance-vs-term-insurance-2026',
      date: '8 hours ago'
    },
    {
      id: 'pf-5',
      title: 'NPS Tier 1 vs Tier 2: Understanding the difference for retirement planning',
      category: 'Personal Finance',
      slug: 'nps-tier-1-vs-tier-2-retirement',
      date: 'Yesterday'
    }
  ]
};

// Income Tax News
export const incomeTaxNewsData: CategorySection = {
  categoryName: 'Income Tax',
  subcategories: ['ITR Filing', 'Tax Savings', 'Tax Planning'],
  items: [
    {
      id: 'tax-1',
      title: 'Budget 2026: Income Tax slabs revised, standard deduction increased to Rs 75,000',
      image: '/images/budget-tax-changes.jpg',
      category: 'Income Tax',
      slug: 'budget-2026-tax-slabs-standard-deduction',
      date: '1 hour ago',
      relatedLinks: [
        'New vs Old Tax Regime: Which one will save you more money?',
        'Budget 2026 highlights: All key announcements for taxpayers',
        'How to calculate income tax under new slabs: Step-by-step guide'
      ]
    },
    {
      id: 'tax-2',
      title: 'ITR filing deadline extended to August 31, 2026: Check new penalty rules',
      category: 'Income Tax',
      slug: 'itr-filing-deadline-extended-2026',
      date: '3 hours ago'
    },
    {
      id: 'tax-3',
      title: 'Section 80C limit increased to Rs 2 lakh: How to save maximum tax in FY 2026-27',
      category: 'Income Tax',
      slug: 'section-80c-limit-increase-2026',
      date: '5 hours ago'
    },
    {
      id: 'tax-4',
      title: 'Form 16 download: How to get it from employer and use for ITR filing',
      category: 'Income Tax',
      slug: 'form-16-download-itr-filing-guide',
      date: '7 hours ago'
    },
    {
      id: 'tax-5',
      title: 'TDS on salary: Complete guide to understand tax deducted at source',
      category: 'Income Tax',
      slug: 'tds-on-salary-complete-guide',
      date: 'Yesterday'
    }
  ]
};

// Combined Business News Array
export const businessNewsData: CategorySection[] = [
  marketNewsData,
  personalFinanceNewsData,
  incomeTaxNewsData
];

// ==================== LIFESTYLE NEWS ====================

// Travel News
export const travelNewsData: CategorySection = {
  categoryName: 'Travel',
  subcategories: ['Destinations', 'Travel Tips', 'Adventure'],
  items: [
    {
      id: 'travel-1',
      title: 'Top 10 hill stations in India to visit in summer 2026: From Kashmir to Kodaikanal',
      image: '/images/hill-stations-summer.jpg',
      category: 'Travel',
      slug: 'top-hill-stations-india-summer-2026',
      date: '2 hours ago',
      relatedLinks: [
        'Best time to visit Shimla: Complete month-wise travel guide',
        'Budget travel tips: How to plan a hill station trip under Rs 10,000',
        'Adventure activities in Manali: Paragliding, rafting, and trekking'
      ]
    },
    {
      id: 'travel-2',
      title: 'Passport renewal online: Step-by-step guide and new simplified process',
      category: 'Travel',
      slug: 'passport-renewal-online-guide-2026',
      date: '4 hours ago'
    },
    {
      id: 'travel-3',
      title: 'International travel: Visa-free countries for Indian passport holders in 2026',
      category: 'Travel',
      slug: 'visa-free-countries-indian-passport-2026',
      date: '6 hours ago'
    },
    {
      id: 'travel-4',
      title: 'Kerala backwaters tour: 5-day itinerary with houseboat stay and ayurvedic spa',
      category: 'Travel',
      slug: 'kerala-backwaters-tour-itinerary',
      date: '8 hours ago'
    },
    {
      id: 'travel-5',
      title: 'Schengen visa for Indians: Complete guide, documents, and application process',
      category: 'Travel',
      slug: 'schengen-visa-indians-complete-guide',
      date: 'Yesterday'
    }
  ]
};

// Food News
export const foodNewsData: CategorySection = {
  categoryName: 'Food',
  subcategories: ['Recipes', 'Restaurants', 'Health Food'],
  items: [
    {
      id: 'food-1',
      title: 'Weight loss diet plan: 7-day Indian meal plan to lose 5kg in a month',
      image: '/images/weight-loss-diet-plan.jpg',
      category: 'Food',
      slug: 'weight-loss-diet-plan-indian-meals',
      date: '1 hour ago',
      relatedLinks: [
        'Low carb Indian recipes: 10 dishes for diabetics and weight watchers',
        'Protein-rich vegetarian foods: Complete list with nutritional values',
        'Intermittent fasting guide: 16:8 diet plan for beginners'
      ]
    },
    {
      id: 'food-2',
      title: 'Viral paneer butter masala recipe: Restaurant-style dish at home in 20 minutes',
      category: 'Food',
      slug: 'paneer-butter-masala-recipe-restaurant-style',
      date: '3 hours ago'
    },
    {
      id: 'food-3',
      title: 'Best cafes in Mumbai 2026: Instagram-worthy spots for coffee lovers',
      category: 'Food',
      slug: 'best-cafes-mumbai-2026-instagram',
      date: '5 hours ago'
    },
    {
      id: 'food-4',
      title: 'Healthy breakfast ideas: 15 quick Indian recipes under 200 calories',
      category: 'Food',
      slug: 'healthy-breakfast-ideas-indian-recipes',
      date: '7 hours ago'
    },
    {
      id: 'food-5',
      title: 'Street food guide Delhi: 20 must-try dishes from Chandni Chowk to Connaught Place',
      category: 'Food',
      slug: 'street-food-guide-delhi-must-try',
      date: 'Yesterday'
    }
  ]
};

// Beauty News
export const beautyNewsData: CategorySection = {
  categoryName: 'Beauty',
  subcategories: ['Skincare', 'Makeup', 'Haircare'],
  items: [
    {
      id: 'beauty-1',
      title: 'Korean skincare routine: 10-step guide for glowing skin at home',
      image: '/images/korean-skincare-routine.jpg',
      category: 'Beauty',
      slug: 'korean-skincare-routine-10-steps',
      date: '2 hours ago',
      relatedLinks: [
        'Best serums for glowing skin: Vitamin C, Niacinamide, and Hyaluronic acid',
        'Double cleansing method: Why its essential for clear skin',
        'Sheet mask benefits: How often should you use them?'
      ]
    },
    {
      id: 'beauty-2',
      title: 'Natural hair growth tips: 5 home remedies for thicker, longer hair',
      category: 'Beauty',
      slug: 'natural-hair-growth-home-remedies',
      date: '4 hours ago'
    },
    {
      id: 'beauty-3',
      title: 'Best sunscreen for Indian skin 2026: Dermatologist-recommended brands under Rs 500',
      category: 'Beauty',
      slug: 'best-sunscreen-indian-skin-2026',
      date: '6 hours ago'
    },
    {
      id: 'beauty-4',
      title: 'Bridal makeup trends 2026: From minimal glam to bold dramatic looks',
      category: 'Beauty',
      slug: 'bridal-makeup-trends-2026',
      date: '8 hours ago'
    },
    {
      id: 'beauty-5',
      title: 'Anti-aging skincare routine: Expert tips for women over 30',
      category: 'Beauty',
      slug: 'anti-aging-skincare-routine-women-30',
      date: 'Yesterday'
    }
  ]
};

// Combined Lifestyle News Array
export const lifestyleNewsData: CategorySection[] = [
  travelNewsData,
  foodNewsData,
  beautyNewsData
];

// ==================== STATE NEWS (INDIA) ====================

export const stateNewsData: CategorySection[] = [
  {
    categoryName: 'Maharashtra',
    items: [
      {
        id: 'maha-main-1',
        title: "Ajit Pawar plane crash: Police register ADR; AAIB team questions charter firm VSR Ventures officials",
        image: '/images/ajit-pawar-memorial.jpg',
        category: 'Maharashtra',
        slug: 'ajit-pawar-investigation-vsr-ventures',
        date: '1 hour ago',
        isLive: true,
        relatedLinks: [
          "Ajit Pawar funeral LIVE: Maharashtra Deputy CM accorded full state honours, last rites at 11 am",
          "Ajit Pawar death: Maharashtra ZP, Panchayat Samiti polls to be held as scheduled despite mourning",
          "Baramati mourns: Markets closed as local leaders pay tribute to the late Deputy CM",
          "Aviation experts point to technical glitch in the engine of the Beechcraft King Air"
        ]
      },
      {
        id: 'maha-2',
        title: "Mumbai Coastal Road Phase 2: Traffic updates as new stretch opens for public",
        category: 'Maharashtra',
        slug: 'mumbai-coastal-road-phase-2-opening',
        date: '3 hours ago'
      },
      {
        id: 'maha-3',
        title: "Pune Metro Orange Line extension: Trial runs begin on Swargate to Katraj route",
        category: 'Maharashtra',
        slug: 'pune-metro-orange-line-extension',
        date: '5 hours ago'
      },
      {
        id: 'maha-4',
        title: "Maharashtra Budget 2026: CM announces Rs 2,000 crore for women entrepreneurs",
        category: 'Maharashtra',
        slug: 'maharashtra-budget-women-entrepreneurs',
        date: '7 hours ago'
      }
    ]
  },
  {
    categoryName: 'Uttar Pradesh',
    items: [
      {
        id: 'up-1',
        title: "Ayodhya Ram Mandir: Record 5 lakh devotees visit on second anniversary of Pran Pratishtha",
        image: '/images/ayodhya-anniversary.jpg',
        category: 'Uttar Pradesh',
        slug: 'ayodhya-ram-mandir-anniversary-crowd',
        date: '2 hours ago',
        relatedLinks: [
          "Special 'Aarti' performed at Ayodhya temple to mark 2-year milestone",
          "UP Police deploy drones for crowd management as visitor numbers swell",
          "New tourist facility center inaugurated near Ram Janmabhoomi Path"
        ]
      },
      {
        id: 'up-2',
        title: "UP CM Yogi Adityanath announces 'Kanya Sumangala' grant hike to Rs 25,000 from April",
        category: 'Uttar Pradesh',
        slug: 'up-kanya-sumangala-yojana-hike',
        date: '4 hours ago'
      },
      {
        id: 'up-3',
        title: "Varanasi Kashi Vishwanath Corridor Phase 2: Work begins on underground parking facility",
        category: 'Uttar Pradesh',
        slug: 'varanasi-kashi-corridor-phase-2',
        date: '6 hours ago'
      },
      {
        id: 'up-4',
        title: "Lucknow Metro: Pink Line to connect Gomti Nagar Extension by December 2026",
        category: 'Uttar Pradesh',
        slug: 'lucknow-metro-pink-line-extension',
        date: '8 hours ago'
      }
    ]
  },
  {
    categoryName: 'Odisha',
    items: [
      {
        id: 'odisha-1',
        title: "Odisha Bandh highlights: Normal life disrupted, NNKS workers block Puri-Bhubaneswar road",
        image: '/images/odisha-bandh-updates.jpg',
        category: 'Odisha',
        slug: 'odisha-bandh-road-blockade-updates',
        date: '2 hours ago',
        relatedLinks: [
          "Odisha Bandh today: Are schools, colleges, banks, govt offices closed?",
          "Bhubaneswar-Cuttack Twin City police issues traffic advisory for commuters",
          "Emergency services remained unaffected during day-long state shutdown",
          "Train services on Howrah-Chennai route delayed due to track blockade"
        ]
      },
      {
        id: 'odisha-2',
        title: "Jagannath Puri Rath Yatra 2026 dates announced: Festival from June 20-28",
        category: 'Odisha',
        slug: 'jagannath-puri-rath-yatra-2026-dates',
        date: '4 hours ago'
      },
      {
        id: 'odisha-3',
        title: "Bhubaneswar Smart City: Solar-powered street lights installed in 100 wards",
        category: 'Odisha',
        slug: 'bhubaneswar-smart-city-solar-lights',
        date: '6 hours ago'
      }
    ]
  },
  {
    categoryName: 'Tamil Nadu',
    items: [
      {
        id: 'tn-1',
        title: "Chennai Metro Phase 2: Corridor 4 work progresses, Poonamallee to Porur route on track",
        image: '/images/chennai-metro-phase2.jpg',
        category: 'Tamil Nadu',
        slug: 'chennai-metro-phase-2-corridor-4',
        date: '3 hours ago',
        relatedLinks: [
          "CMRL extends Blue Line: 10 new stations to open by November 2026",
          "Metro fare revision: Digital payments to get 10% discount",
          "Chennai Airport Metro connectivity: Work 70% complete"
        ]
      },
      {
        id: 'tn-2',
        title: "Tamil Nadu Assembly passes Bill for 10% reservation for economically weaker sections",
        category: 'Tamil Nadu',
        slug: 'tamil-nadu-ews-reservation-bill',
        date: '5 hours ago'
      },
      {
        id: 'tn-3',
        title: "Coimbatore Smart City: AI-powered traffic management system reduces congestion by 30%",
        category: 'Tamil Nadu',
        slug: 'coimbatore-ai-traffic-management',
        date: '7 hours ago'
      }
    ]
  },
  {
    categoryName: 'West Bengal',
    items: [
      {
        id: 'wb-1',
        title: "Kolkata Metro: East-West corridor extension to Salt Lake Sector V begins trial run",
        image: '/images/kolkata-metro-eastwest.jpg',
        category: 'West Bengal',
        slug: 'kolkata-metro-east-west-trial-run',
        date: '2 hours ago',
        relatedLinks: [
          "Underwater Metro tunnel: India's first such project nears completion",
          "Kolkata Metro fare hike: New rates from February 1, 2026",
          "Metro connectivity to Howrah Airport planned by 2027"
        ]
      },
      {
        id: 'wb-2',
        title: "Durga Puja 2026: Kolkata theme pujas to get additional government funding",
        category: 'West Bengal',
        slug: 'durga-puja-2026-kolkata-funding',
        date: '4 hours ago'
      },
      {
        id: 'wb-3',
        title: "Darjeeling toy train: UNESCO heritage site gets new coaches with panoramic windows",
        category: 'West Bengal',
        slug: 'darjeeling-toy-train-new-coaches',
        date: '6 hours ago'
      }
    ]
  }
];

// ==================== TECHNOLOGY NEWS ====================

export const technologyNewsData: CategorySection[] = [
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
        title: 'OpenAI unveils GPT-5: Most advanced AI model with reasoning capabilities',
        category: 'Technology',
        slug: 'openai-gpt-5-launch-features',
        date: '2 hours ago',
        isLive: true
      },
      {
        id: 'tech-3',
        title: 'New Aadhaar app enables age verification on social media without sharing personal data',
        category: 'Technology',
        slug: 'aadhaar-app-age-verification-social-media',
        date: '3 hours ago'
      },
      {
        id: 'tech-4',
        title: 'Google Pixel 9 Pro launched in India with advanced AI photography at Rs 89,999',
        category: 'Technology',
        slug: 'google-pixel-9-pro-india-launch',
        date: '4 hours ago'
      },
      {
        id: 'tech-5',
        title: 'Samsung Galaxy A57 5G design leaks: Metal frame, slim build and key features revealed',
        category: 'Technology',
        slug: 'samsung-galaxy-a57-5g-design-leak',
        date: '5 hours ago'
      }
    ]
  }
];

// ==================== AUTO NEWS ====================

export const autoNewsData: CategorySection[] = [
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
        title: 'Tata Curvv EV launched at Rs 17.49 lakh: Features, range, and specifications revealed',
        category: 'Auto',
        slug: 'tata-curvv-ev-launch-price-features',
        date: '3 hours ago'
      },
      {
        id: 'auto-3',
        title: 'Mahindra BE 6 EV fire in UP: Automaker reveals real cause behind viral incident',
        category: 'Auto',
        slug: 'mahindra-be6-ev-fire-cause-revealed',
        date: '4 hours ago'
      },
      {
        id: 'auto-4',
        title: 'BMW, Mercedes, Lamborghini cars to get cheaper in India as EU trade deal nears',
        category: 'Auto',
        slug: 'luxury-cars-cheaper-india-eu-trade-deal',
        date: '5 hours ago'
      }
    ]
  }
];

// ==================== EDUCATION NEWS ====================

export const educationNewsData: CategorySection[] = [
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
        title: 'JEE Main 2026 tentative cutoff: Check category-wise cut off percentile for IITs',
        category: 'Education',
        slug: 'jee-main-2026-cutoff-percentile',
        date: '2 hours ago'
      },
      {
        id: 'edu-3',
        title: 'JEE Main Jan 28 shift two analysis 2026: Check section-wise paper review',
        category: 'Education',
        slug: 'jee-main-jan-28-shift-two-analysis',
        date: '3 hours ago'
      },
      {
        id: 'edu-4',
        title: 'CUET UG registration 2026 to close on January 30; steps to apply',
        category: 'Education',
        slug: 'cuet-ug-registration-2026-last-date',
        date: '4 hours ago'
      }
    ]
  }
];

// ==================== HEALTH NEWS ====================

export const healthNewsData: CategorySection[] = [
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
        title: 'Delhi air pollution: AQI improves to moderate category after rainfall',
        category: 'Health',
        slug: 'delhi-air-pollution-aqi-moderate',
        date: '3 hours ago'
      },
      {
        id: 'health-3',
        title: 'Cervical cancer kills 75,000 Indian women every year: How to protect yourself',
        category: 'Health',
        slug: 'cervical-cancer-prevention-india',
        date: '4 hours ago'
      },
      {
        id: 'health-4',
        title: 'COVID-19 new variant JN.1: Symptoms, precautions, vaccination guidelines',
        category: 'Health',
        slug: 'covid-19-jn1-variant-symptoms',
        date: '5 hours ago'
      }
    ]
  }
];

// ==================== ASTRO NEWS ====================

export const astroNewsData: CategorySection[] = [
  {
    categoryName: 'Astro',
    items: [
      {
        id: 'astro-1',
        title: 'Mangal Gochar 2026: Mars\' entry into Saturn\'s sign may bring tough phase for 3 zodiac signs',
        image: '/images/mars-saturn-astrology-2026.jpg',
        category: 'Astro',
        slug: 'mangal-gochar-2026-zodiac-signs-affected',
        date: '1 hour ago'
      },
      {
        id: 'astro-2',
        title: 'Horoscope today, January 29, 2026: Daily predictions for all 12 zodiac signs',
        category: 'Astro',
        slug: 'horoscope-today-january-29-2026',
        date: '2 hours ago'
      },
      {
        id: 'astro-3',
        title: 'Shadashtak Yog 2026: These 4 zodiac signs will see major career and money gains',
        category: 'Astro',
        slug: 'shadashtak-yog-2026-zodiac-career-money',
        date: '3 hours ago'
      },
      {
        id: 'astro-4',
        title: 'Mercury Retrograde 2026: How it affects your communication and travel plans',
        category: 'Astro',
        slug: 'mercury-retrograde-2026-effects',
        date: '4 hours ago'
      }
    ]
  }
];

// ==================== COMBINED EXPORTS ====================

// Export individual categories
export const businessMarketNews = marketNewsData.items;
export const businessPersonalFinanceNews = personalFinanceNewsData.items;
export const businessIncomeTaxNews = incomeTaxNewsData.items;

export const lifestyleTravelNews = travelNewsData.items;
export const lifestyleFoodNews = foodNewsData.items;
export const lifestyleBeautyNews = beautyNewsData.items;

// Export all category data
export const allCategoryNewsData = {
  business: businessNewsData,
  lifestyle: lifestyleNewsData,
  states: stateNewsData,
  technology: technologyNewsData,
  auto: autoNewsData,
  education: educationNewsData,
  health: healthNewsData,
  astro: astroNewsData
};
