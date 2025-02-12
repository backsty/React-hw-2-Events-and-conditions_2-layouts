import React from 'react';
import { Product } from '../../types/index';

export const ShopCard: React.FC<Product> = ({ name, price, color, img }) => (
  <div className="shop-card">
    <div className="shop-card-image">
      <img src={img} alt={name} />
    </div>
    <div className="shop-card-content">
      <h3 className="shop-card-title">{name}</h3>
      <div className="shop-card-color">{color}</div>
      <div className="shop-card-footer">
        <div className="shop-card-price">${price}</div>
        <button className="shop-card-button">ADD TO CART</button>
      </div>
    </div>
  </div>
);
