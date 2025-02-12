import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@css/index.css';
import '@css/components/CardsView.css';
import '@css/components/IconSwitch.css';
import '@css/components/ListView.css';
import '@css/components/ShopCard.css';
import '@css/components/ShopItem.css';
import '@css/components/Store.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
