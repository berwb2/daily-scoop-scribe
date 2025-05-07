
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import TagPage from './pages/TagPage';
import TagsPage from './pages/TagsPage';
import DynamicArticlePage from './pages/DynamicArticlePage';
import DynamicArticlesPage from './pages/DynamicArticlesPage';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/article/:articleSlug" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/tag/:tagSlug" element={<TagPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/dynamic-article/:articleSlug" element={<DynamicArticlePage />} />
            <Route path="/articles" element={<DynamicArticlesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
