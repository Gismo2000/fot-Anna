// import React from 'react';
// import HeaderBanner from '../../HeaderBanner/Banner';
// import Navigation from '../../Navigation/Navigation';
// import Categories from '../../Categories/Categories';
// import Sale from '../../Sale/Sale';
// import Contact from '../../Contact/Contact';
// import Map from '../../Map/Map';

// const AllSales = () => (
//   <div className="pageBody">
//     <Navigation />
//     {/* <HeaderBanner />
//     <Categories /> */}
//     <Sale />
//     <Contact />
//     <Map />
//   </div>
// );

// export default AllSales;




// import React, { useEffect, useState } from 'react';

// import Navigation from '../../Navigation/Navigation';
// import Contact from '../../Contact/Contact';
// import Map from '../../Map/Map';


// const AllSales = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:3333/products/all') // Использую общий эндпоинт для получения всех продуктов
//       .then(response => response.json())
//       .then(data => {
//         const discountedProducts = data.filter(product => product.discont_price > 0); // Фильтрую продукты со скидкой
//         setProducts(discountedProducts);
//       })
//       .catch(error => console.error("Ошибка загрузки данных о продуктах:", error));
//   }, []);

//   const formatPrice = (price) => {
//     // Форматирование цены для отображения
//     return `${price.toFixed(2)}$`;
//   };

//   const calculateDiscountPercent = (originalPrice, discountPrice) => {
//     // Расчёт процента скидки
//     return ((originalPrice - discountPrice) / originalPrice * 100).toFixed(0);
//   };

//   return (
//     <div className="pageBody">
//       <Navigation />
//       <div className="salesContainer">
//         {Array.isArray(products) && products.map((product) => (
//           <div key={product.id} className="saleCard">
//             <img src={`http://127.0.0.1:3333${product.image}`} alt={product.title} className="productImage"/>
//             <div className="description">
//               <div className="title">{product.title}</div>
//               <div className="priceInfo">
//                 <div className="originalPrice">Без скидки: {formatPrice(product.price)}</div>
//                 <div className="discountPrice">Со скидкой: {formatPrice(product.discont_price)}</div>
//                 <div className="discountPercent">Скидка: -{calculateDiscountPercent(product.price, product.discont_price)}%</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

     
//       <Contact />
//       <Map />

//     </div>
//   );
// };

// export default AllSales;


// AllSales.jsx



// AllSales.jsx
import React, { useEffect, useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';
import ProductDetailsModal from './ProductDetailsModal'; 
import styles from './AllSales.module.css';

const formatPrice = (price) => `${price.toFixed(2)}$`;

const calculateDiscountPercent = (originalPrice, discountPrice) =>
  ((originalPrice - discountPrice) / originalPrice * 100).toFixed(0);

const AllSales = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:3333/products/all')
      .then(response => response.json())
      .then(data => {
        const discountedProducts = data.filter(product => product.discont_price > 0);
        setProducts(discountedProducts);
      })
      .catch(error => console.error("Ошибка загрузки данных о продуктах:", error));
  }, []);

  return (
    <div className={styles.pageBody}>
      <Navigation />
      <div className={styles.salesContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.saleCard} onClick={() => setSelectedProduct(product)}>
            <img src={`http://127.0.0.1:3333${product.image}`} alt={product.title} className={styles.productImage}/>
            <div className={styles.description}>
              <div className={styles.title}>{product.title}</div>
              <div className={styles.priceInfo}>
                <div className={styles.originalPrice}>
                  {formatPrice(product.price)}
                </div>
                <div className={styles.discountPrice}>
                  {formatPrice(product.discont_price)}
                </div>
                <div className={styles.discountPercent}>
                  Скидка: -{calculateDiscountPercent(product.price, product.discont_price)}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          formatPrice={formatPrice}
          calculateDiscountPercent={calculateDiscountPercent}
        />
      )}
      <Contact />
      <Map />
    </div>
  );
};

export default AllSales;



