// ProductDetailsModal.js
import React from 'react';
import styles from './AllSales.module.css'; // Убедитесь, что этот путь правильный

const ProductDetailsModal = ({ product, onClose, formatPrice, calculateDiscountPercent }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{product.title}</h2>
        <img src={`http://127.0.0.1:3333${product.image}`} alt={product.title} />
        <p>Описание: {product.description}</p>
        <p>Цена без скидки: <span>{formatPrice(product.price)}</span></p>
        <p>Цена со скидкой: {formatPrice(product.discont_price)}</p>
        <p>Скидка: -{calculateDiscountPercent(product.price, product.discont_price)}%</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;

