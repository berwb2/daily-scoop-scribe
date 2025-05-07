
import { Article } from '../types/article';
import { articleTags } from './mockTags';
import { sampleArticleContent } from './mockArticleContent';
import { articleReferences } from './mockReferences';

// For ArticleCard component
export interface ArticleProps {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: {
    name: string;
    slug: string;
  };
  publishedAt: string;
  readingTime: number;
  relevance: 'local' | 'national' | 'global';
  imageUrl: string;
  featured?: boolean;
  tags?: any[];
}

// Mock articles data
export const featuredArticle: ArticleProps = {
  id: 1,
  slug: 'brics-expansion-impact-on-global-trade',
  title: 'BRICS Expansion and Its Impact on Global Trade Dynamics',
  excerpt: 'As the BRICS alliance welcomes new members, South Africa positions itself as a key player in reshaping international trade relations. Understanding the geopolitical implications for African economies.',
  category: {
    name: 'Geopolitics',
    slug: 'geopolitics'
  },
  publishedAt: '2023-07-15T09:00:00Z',
  readingTime: 8,
  relevance: 'global',
  imageUrl: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  featured: true,
  tags: [articleTags[0], articleTags[1], articleTags[2]]
};

export const geopoliticsArticles: ArticleProps[] = [
  {
    id: 2,
    slug: 'south-africa-diplomatic-relations',
    title: "South Africa's Evolving Diplomatic Relations in a Multipolar World",
    excerpt: 'How South Africa balances relationships between Western allies and BRICS partners in an increasingly complex global landscape.',
    category: {
      name: 'Geopolitics',
      slug: 'geopolitics'
    },
    publishedAt: '2023-07-12T14:30:00Z',
    readingTime: 6,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    slug: 'africa-continental-free-trade',
    title: 'The Promise of the African Continental Free Trade Agreement',
    excerpt: 'Analyzing the potential and challenges of AfCFTA for South African businesses and regional integration.',
    category: {
      name: 'Geopolitics',
      slug: 'geopolitics'
    },
    publishedAt: '2023-07-08T08:15:00Z',
    readingTime: 7,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/269790/pexels-photo-269790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    slug: 'maritime-security-cape-route',
    title: 'Maritime Security: The Growing Importance of the Cape Route',
    excerpt: "Global shipping disruptions highlight the strategic value of South Africa's position along vital maritime trade routes.",
    category: {
      name: 'Geopolitics',
      slug: 'geopolitics'
    },
    publishedAt: '2023-07-05T11:20:00Z',
    readingTime: 5,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const techArticles: ArticleProps[] = [
  {
    id: 5,
    slug: 'cape-town-silicon-cape',
    title: 'Cape Town\'s "Silicon Cape" Challenges African Tech Hubs',
    excerpt: 'The rise of Cape Town as a leading technology ecosystem in Africa and its competition with established hubs like Nairobi and Lagos.',
    category: {
      name: 'Tech',
      slug: 'tech'
    },
    publishedAt: '2023-07-14T10:45:00Z',
    readingTime: 6,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    slug: 'renewable-energy-tech-sa',
    title: 'Renewable Energy Technologies Transforming South African Power',
    excerpt: 'How innovative solar and wind solutions are helping address South Africa\'s energy challenges and enabling a greener future.',
    category: {
      name: 'Tech',
      slug: 'tech'
    },
    publishedAt: '2023-07-10T16:20:00Z',
    readingTime: 7,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 7,
    slug: 'fintech-revolution-africa',
    title: 'The Fintech Revolution Reshaping African Banking',
    excerpt: 'South African startups lead innovation in financial technology, creating solutions tailored for the continent\'s unique challenges.',
    category: {
      name: 'Tech',
      slug: 'tech'
    },
    publishedAt: '2023-07-06T09:30:00Z',
    readingTime: 8,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const economyArticles: ArticleProps[] = [
  {
    id: 8,
    slug: 'rand-volatility-global-markets',
    title: 'Rand Volatility: Navigating Global Market Uncertainties',
    excerpt: 'Understanding the factors behind the South African Rand\'s fluctuations and strategies for businesses to mitigate currency risks.',
    category: {
      name: 'Economy',
      slug: 'economy'
    },
    publishedAt: '2023-07-13T13:15:00Z',
    readingTime: 7,
    relevance: 'national',
    imageUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 9,
    slug: 'cape-town-property-market',
    title: 'Cape Town\'s Property Market Defies National Trends',
    excerpt: 'Analysis of the divergent real estate dynamics in Cape Town versus the rest of South Africa, and what it means for investors.',
    category: {
      name: 'Economy',
      slug: 'economy'
    },
    publishedAt: '2023-07-09T15:45:00Z',
    readingTime: 6,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 10,
    slug: 'tourism-recovery-western-cape',
    title: 'Tourism Recovery Accelerates in the Western Cape',
    excerpt: 'Post-pandemic visitor numbers show promising growth, reinforcing the sector\'s importance to the regional economy.',
    category: {
      name: 'Economy',
      slug: 'economy'
    },
    publishedAt: '2023-07-07T12:00:00Z',
    readingTime: 5,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const capeTownArticles: ArticleProps[] = [
  {
    id: 11,
    slug: 'cape-town-water-security',
    title: 'Cape Town\'s Water Security: Lessons from the Crisis',
    excerpt: 'How the city transformed its water management after the 2018 drought and what other global cities can learn from the experience.',
    category: {
      name: 'Cape Town Focus',
      slug: 'capetown'
    },
    publishedAt: '2023-07-11T09:30:00Z',
    readingTime: 8,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 12,
    slug: 'startup-ecosystem-cape-town',
    title: 'Inside Cape Town\'s Dynamic Startup Ecosystem',
    excerpt: 'A deep dive into the entrepreneurs, investors, and institutions fueling the Mother City\'s innovation economy.',
    category: {
      name: 'Cape Town Focus',
      slug: 'capetown'
    },
    publishedAt: '2023-07-09T11:15:00Z',
    readingTime: 7,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 13,
    slug: 'port-expansion-cape-town',
    title: 'Cape Town Port Expansion: Gateway to African Trade',
    excerpt: 'Planned infrastructure developments aim to position Cape Town\'s harbor as a crucial link in global supply chains.',
    category: {
      name: 'Cape Town Focus',
      slug: 'capetown'
    },
    publishedAt: '2023-07-04T14:00:00Z',
    readingTime: 6,
    relevance: 'local',
    imageUrl: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Sample article with all content for article page
export const fullArticle: Article = {
  id: 1,
  slug: 'brics-expansion-impact-on-global-trade',
  title: 'BRICS Expansion and Its Impact on Global Trade Dynamics',
  content: sampleArticleContent,
  excerpt: 'As the BRICS alliance welcomes new members, South Africa positions itself as a key player in reshaping international trade relations. Understanding the geopolitical implications for African economies.',
  authorId: 1,
  categoryId: 1,
  publishedAt: '2023-07-15T09:00:00Z',
  readingTime: 8,
  imageUrl: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  featured: true,
  relevance: 'global',
  category: {
    id: 1,
    name: 'Geopolitics',
    slug: 'geopolitics'
  },
  author: {
    id: 1,
    name: 'Elokusa Zondi',
    title: 'Senior Geopolitical Analyst',
    imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Elokusa Zondi is a geopolitical analyst specializing in African international relations and trade policy. With over 15 years of experience, she has advised governments and multinational corporations on strategic positioning in emerging markets.',
    twitter: 'elokusa_zondi',
    linkedin: 'https://linkedin.com/in/elokusa-zondi'
  },
  tags: [articleTags[0], articleTags[1], articleTags[2]],
  metaDescription: 'Analysis of the BRICS alliance expansion and its implications for South African trade, economy and regional influence in the changing global order.',
  metaKeywords: ['BRICS', 'South Africa', 'global trade', 'geopolitics', 'AfCFTA'],
  references: articleReferences
};

// Related articles are needed for article page
export const relatedArticles = [
  geopoliticsArticles[0],
  geopoliticsArticles[1],
  economyArticles[0]
];

// All articles for search and category pages
export const allArticles = [
  featuredArticle,
  ...geopoliticsArticles,
  ...techArticles,
  ...economyArticles,
  ...capeTownArticles
];
