import React from 'react';
import { Product } from '../../types/index';
import { ShopItem } from '@components/ShopItem';

interface ListViewProps {
  items: Product[];
}

export const ListView: React.FC<ListViewProps> = ({ items }) => (
  <div className="list-view">
    {items.map((item, index) => (
      <ShopItem key={index} {...item} />
    ))}
  </div>
);
