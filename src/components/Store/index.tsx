import React, { useState } from 'react';
import { Product, ViewMode } from '../../types/index';
import { IconSwitch } from '@components/IconSwitch';
import { CardsView } from '@components/CardsView';
import { ListView } from '@components/ListView';

interface StoreProps {
  products: Product[];
}

export const Store: React.FC<StoreProps> = ({ products }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  const handleSwitch = () => {
    setViewMode((prevMode) => (prevMode === 'cards' ? 'list' : 'cards'));
  };

  return (
    <div className="store">
      <div className="store-header">
        <IconSwitch
          icon={viewMode === 'cards' ? 'view_list' : 'view_module'}
          onSwitch={handleSwitch}
        />
      </div>
      <div className="store-content">
        {viewMode === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    </div>
  );
};
