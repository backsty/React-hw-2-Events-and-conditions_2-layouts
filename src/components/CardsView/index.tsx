import React from 'react';
import { Product } from '../../types/index';
import { ShopCard } from '@components/ShopCard';

interface CardsViewProps {
  cards: Product[];
}

export const CardsView: React.FC<CardsViewProps> = ({ cards }) => (
  <div className="cards-view">
    {cards.map((card, index) => (
      <ShopCard key={index} {...card} />
    ))}
  </div>
);
