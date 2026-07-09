import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ProductDetailPage from './pages/ProductDetailPage.tsx';
import ArticleDetailPage from './pages/ArticleDetailPage.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
