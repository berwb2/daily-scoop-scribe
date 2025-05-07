import { ArticleProps } from '../components/articles/ArticleCard';

// Mock tags data
export const articleTags = [
  { id: 1, name: 'BRICS', slug: 'brics' },
  { id: 2, name: 'Trade', slug: 'trade' },
  { id: 3, name: 'Diplomacy', slug: 'diplomacy' },
  { id: 4, name: 'Economy', slug: 'economy' },
  { id: 5, name: 'Technology', slug: 'technology' },
  { id: 6, name: 'Innovation', slug: 'innovation' },
  { id: 7, name: 'Investment', slug: 'investment' },
  { id: 8, name: 'Climate', slug: 'climate' },
  { id: 9, name: 'Energy', slug: 'energy' },
  { id: 10, name: 'Infrastructure', slug: 'infrastructure' },
  { id: 11, name: 'Finance', slug: 'finance' },
  { id: 12, name: 'Agriculture', slug: 'agriculture' },
];

// Mock references data
export const articleReferences = [
  { 
    text: 'South African Department of Trade and Industry. (2023). BRICS Cooperation Framework.',
    url: 'https://www.thedtic.gov.za/brics-cooperation-framework'
  },
  { 
    text: 'World Bank. (2023). Global Economic Prospects, June 2023.',
    url: 'https://www.worldbank.org/en/publication/global-economic-prospects'
  },
  { 
    text: 'African Development Bank. (2023). African Economic Outlook.',
    url: 'https://www.afdb.org/en/knowledge/publications/african-economic-outlook'
  }
];

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

// Sample article content for article page
export const sampleArticleContent = `
<h2>The Shifting Landscape of Global Trade</h2>

<p>
  The expansion of the BRICS alliance marks a significant shift in the global economic order, with profound implications for South Africa and the African continent. As traditional Western-dominated institutions face mounting challenges, the growing influence of this coalition of emerging economies presents both opportunities and challenges for global trade dynamics.
</p>

<p>
  South Africa, as the sole African representative in the BRICS grouping, occupies a unique position at this intersection of global power realignment. With the recent announcement of six new members joining the alliance, including Egypt and Ethiopia from Africa, the continent\'s collective economic leverage within the group has substantially increased.
</p>

<blockquote>
  "The expansion of BRICS represents not just a numerical change, but a fundamental shift in how global economic governance will function in the coming decades. South Africa\'s role as a bridge between the alliance and the broader African continent becomes even more strategic." — Dr. Thabo Molefe, International Relations Institute
</blockquote>

<h2>Economic Implications for South Africa</h2>

<p>
  For South African businesses, this evolving geopolitical landscape creates tangible opportunities in several key sectors:
</p>

<ul>
  <li>Enhanced access to the markets of new BRICS members</li>
  <li>Increased investment flows from China and India into South African infrastructure</li>
  <li>New financing mechanisms through the New Development Bank that bypass traditional Western-dominated institutions</li>
  <li>Strengthened bargaining power in trade negotiations with Western partners</li>
</ul>

<p>
  However, these opportunities come with significant challenges. Increased competition from other emerging economies, particularly in manufacturing, could put pressure on South African industries. The country must navigate complex diplomatic terrain, balancing its BRICS commitments against established relationships with Western trading partners.
</p>

<h2>The African Continental Free Trade Context</h2>

<p>
  The BRICS expansion occurs against the backdrop of the African Continental Free Trade Area (AfCFTA) implementation. South Africa\'s dual position—as a BRICS member and AfCFTA participant—creates unique synergies that could be leveraged to advance African economic integration.
</p>

<p>
  Trade experts suggest that South African companies could position themselves as gateways for BRICS investment into the broader AfCFTA market, particularly in sectors where South Africa has established expertise, such as financial services, telecommunications, and mining technology.
</p>

<h2>Looking Ahead: Strategic Considerations</h2>

<p>
  As South Africa navigates this complex geopolitical landscape, several strategic priorities emerge:
</p>

<ol>
  <li>Strengthening productive capacity to compete effectively within expanded BRICS markets</li>
  <li>Leveraging BRICS partnerships to address critical infrastructure constraints</li>
  <li>Balancing diplomatic relations to avoid becoming caught in great power competitions</li>
  <li>Using its position to advocate for broader African interests within the BRICS framework</li>
</ol>

<p>
  The coming years will be decisive in determining whether South Africa can effectively leverage its position at this crossroads of global trade realignment. Success will require nimble diplomacy, strategic economic planning, and a clear vision for how to advance both national and continental interests in this rapidly evolving global landscape.
</p>

<h2>New Investment Opportunities</h2>

<p>
  With BRICS expansion comes new avenues for cross-border investment. The New Development Bank, headquartered in Shanghai with its African Regional Center in Johannesburg, is positioned to finance major infrastructure and sustainable development projects across the continent. South African financial institutions are well-positioned to facilitate and benefit from these investment flows.
</p>

<p>
  Cape Town's emergence as a tech and financial services hub adds another dimension to South Africa's strategic advantage. The city's vibrant startup ecosystem and established financial infrastructure make it an attractive entry point for BRICS investors looking to gain exposure to African markets.
</p>

<p>
  Recent data from the South African Reserve Bank indicates a 27% increase in foreign direct investment from BRICS nations in the past fiscal year, with particular growth in renewable energy, telecommunications, and agricultural technology sectors.
</p>
`;

// Sample article with all content for article page
export const fullArticle = {
  id: 1,
  slug: 'brics-expansion-impact-on-global-trade',
  title: 'BRICS Expansion and Its Impact on Global Trade Dynamics',
  content: sampleArticleContent,
  excerpt: 'As the BRICS alliance welcomes new members, South Africa positions itself as a key player in reshaping international trade relations. Understanding the geopolitical implications for African economies.',
  category: {
    name: 'Geopolitics',
    slug: 'geopolitics'
  },
  publishedAt: '2023-07-15T09:00:00Z',
  estimatedReadingTime: 8,
  relevance: 'global',
  imageUrl: 'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  author: {
    name: 'Elokusa Zondi',
    title: 'Senior Geopolitical Analyst',
    imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Elokusa Zondi is a geopolitical analyst specializing in African international relations and trade policy. With over 15 years of experience, she has advised governments and multinational corporations on strategic positioning in emerging markets.',
    twitter: 'elokusa_zondi',
    linkedin: 'https://linkedin.com/in/elokusa-zondi'
  },
  featured: true,
  related: [2, 3, 8],
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

// Tags page data
export const popularTags = [
  { id: 1, name: 'BRICS', slug: 'brics', count: 23 },
  { id: 2, name: 'Trade', slug: 'trade', count: 18 },
  { id: 3, name: 'Technology', slug: 'technology', count: 32 },
  { id: 4, name: 'Economy', slug: 'economy', count: 45 },
  { id: 5, name: 'Climate', slug: 'climate', count: 16 },
  { id: 6, name: 'Energy', slug: 'energy', count: 21 },
  { id: 7, name: 'Innovation', slug: 'innovation', count: 29 },
  { id: 8, name: 'Diplomacy', slug: 'diplomacy', count: 14 },
  { id: 9, name: 'Finance', slug: 'finance', count: 19 },
  { id: 10, name: 'Infrastructure', slug: 'infrastructure', count: 12 },
];
