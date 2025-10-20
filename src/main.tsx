import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { AppProviders } from './app/providers/AppProviders';
import { SEOProvider } from './app/providers/SEOProvider';
import { Layout } from './app/layout/Layout';
import { AppRouter } from './app/routing/AppRouter';

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <SEOProvider>
      <AppProviders>
        <App />
      </AppProviders>
    </SEOProvider>
  </React.StrictMode>
);
