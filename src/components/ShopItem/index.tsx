import React from 'react';
import { Product } from '../../types/index';

export const ShopItem: React.FC<Product> = ({ name, price, color, img }) => (
  <div className="shop-item">
    <div className="shop-item-image">
      <img src={img} alt={name} />
    </div>
    <h3 className="shop-item-title">{name}</h3>
    <div className="shop-item-color">{color}</div>
    <div className="shop-item-price">${price}</div>
    <button className="shop-item-button">ADD TO CART</button>
  </div>
);
