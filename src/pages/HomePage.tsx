import React from 'react';
import FeaturedArticle from '../components/home/FeaturedArticle';
import CategorySection from '../components/home/CategorySection';
import DataDashboard from '../components/data/DataDashboard';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { 
  featuredArticle, 
  geopoliticsArticles, 
  techArticles,
  economyArticles,
  capeTownArticles
} from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Featured Article Hero */}
      <FeaturedArticle article={featuredArticle} />
      
      {/* Geopolitics Section */}
      <CategorySection 
        title="Geopolitics" 
        slug="geopolitics"
        description="Analysis of international relations and strategic developments affecting South Africa and the world."
        articles={geopoliticsArticles}
        color="primary"
      />
      
      {/* Market Data Visualization Dashboard */}
      <DataDashboard />
      
      {/* Technology Section */}
      <CategorySection 
        title="Technology" 
        slug="tech"
        description="Exploring innovations and digital transformation across South African industries."
        articles={techArticles}
        color="secondary"
      />
      
      {/* Economy Section */}
      <CategorySection 
        title="Economy" 
        slug="economy"
        description="Insights on South African markets, trade, and economic trends."
        articles={economyArticles}
        color="tertiary"
      />
      
      {/* Cape Town Focus */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-headings text-secondary mb-2">Cape Town Focus</h2>
              <p className="text-gray-600 max-w-2xl">Local stories with global significance from the Mother City.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="article-card h-full overflow-hidden group">
                <div className="relative h-full">
                  <img 
                    src={capeTownArticles[0].imageUrl} 
                    alt={capeTownArticles[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="category-tag mb-3 bg-white/20 text-white">
                      Cape Town Focus
                    </div>
                    <h3 className="text-xl md:text-2xl font-headings font-bold mb-2">
                      {capeTownArticles[0].title}
                    </h3>
                    <p className="text-white/90 line-clamp-3">
                      {capeTownArticles[0].excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {capeTownArticles.slice(1, 3).map(article => (
                <div key={article.id} className="article-card overflow-hidden group">
                  <div className="relative aspect-video">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="category-tag mb-2 bg-secondary/10 text-secondary">
                      Cape Town Focus
                    </div>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-headings mb-4">Stay Informed with Polimetrica9</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter for curated analysis on geopolitics, technology, and the economy with a uniquely South African perspective.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;