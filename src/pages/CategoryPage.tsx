
import { useParams } from 'react-router-dom';
import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/articles/ArticleCard';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  const categoryArticles = articles.filter(
    (article) => article.category.toLowerCase() === category?.toLowerCase()
  );
  
  if (categoryArticles.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">Category not found</h1>
        <p>Sorry, the category you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">{categoryName}</h1>
        <div className="w-20 h-1 bg-blue-600"></div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
