// import React, { useEffect, useState } from 'react';
// import HeaderBanner from '../../HeaderBanner/Banner';
// import Navigation from '../../Navigation/Navigation';
// import classes from './AllProducts.css'; // Используй CSS модули для стилей

// import Contact from '../../Contact/Contact';
// import Map from '../../Map/Map';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:3333/products/all')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error("Ошибка загрузки данных о продуктах:", error));
//   }, []);

//   return (
//     <div className={classes.productsContainer}>
//       <Navigation />
//       <HeaderBanner />

//       <div className={classes.saleCardsContainer}>
//         {products.map((product, index) => (
//           <div key={product.id} className={classes.saleCard}>
//           <img src={"http://127.0.0.1:3333" + product.image} alt={product.title} />
//             <div className={classes.description}>
//               <div className={classes.title}>{product.title}</div>
//               <div className={classes.priceInfo}>
//                 <div className={classes.price}>${product.price}</div>
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


// export default AllProducts;






// import React, { useEffect, useState } from 'react';
// import HeaderBanner from '../../HeaderBanner/Banner';
// import Navigation from '../../Navigation/Navigation';
// import classes from './AllProducts.css'; 

// import Contact from '../../Contact/Contact';
// import Map from '../../Map/Map';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [filter, setFilter] = useState('');

//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');


//   const [sort, setSort] = useState('');

//   useEffect(() => {
//     fetch('http://127.0.0.1:3333/products/all')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error("Ошибка загрузки данных о продуктах:", error));
//   }, []);

//   const openProductDetails = (product) => {
//     const newWindow = window.open('', '_blank');
//     newWindow.document.write(`
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>${product.title}</title>
//         <style>
//           body { font-family: Arial, sans-serif; padding: 20px; }
//           img { max-width: 100%; height: auto; margin-bottom: 20px; }
//           .product-info { margin-top: 20px; }
//         </style>
//       </head>
//       <body>
//         <img src="http://127.0.0.1:3333${product.image}" alt="${product.title}">
//         <div class="product-info">
//           <h1>${product.title}</h1>
//           <p>${product.description}</p>
//           <p>Price: $${product.price}</p>
//         </div>
//       </body>
//       </html>
//     `);
//     newWindow.document.close(); // Я тут закрываю поток документа, чтобы изменения отобразились
//   };

//   const getFilteredAndSortedProducts = () => {
//     let sortedProducts = [...products];

//     if (sort === 'price_asc') {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === 'price_desc') {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }

//     return sortedProducts.filter(product => filter ? product.category === filter : true);
//   };

//   return (
//     <div className={classes.productsContainer}>
//       <Navigation />
//       <HeaderBanner />

//       <div>
//         {/* <select value={filter} onChange={e => setFilter(e.target.value)}>
//           <option value="">Все категории</option>
//           <option value="category1">Категория 1</option>
//           <option value="category2">Категория 2</option>
       
//         </select> */}

// <input
//     type="number"
//     value={minPrice}
//     onChange={(e) => setMinPrice(e.target.value)}
//     placeholder="Мин. цена"
//   />
//   <input
//     type="number"
//     value={maxPrice}
//     onChange={(e) => setMaxPrice(e.target.value)}
//     placeholder="Макс. цена"
//   />

//         <select value={sort} onChange={e => setSort(e.target.value)}>
//           <option value="">Без сортировки</option>
//           <option value="price_asc">Цена по возрастанию</option>
//           <option value="price_desc">Цена по убыванию</option>
//         </select>
//       </div>

//       <div className={classes.saleCardsContainer}>
//         {getFilteredAndSortedProducts().map((product) => (
//           <div key={product.id} className={classes.saleCard} onClick={() => openProductDetails(product)}>
//             <img src={`http://127.0.0.1:3333${product.image}`} alt={product.title} className={classes.productImage}/>
//             <div className={classes.description}>
//               <div className={classes.title}>{product.title}</div>
//               <div className={classes.priceInfo}>
//                 <div className={classes.price}>${product.price}</div>
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

// export default AllProducts;





import React, { useEffect, useState } from 'react';
import HeaderBanner from '../../HeaderBanner/Banner';
import Navigation from '../../Navigation/Navigation';
import classes from './AllProducts.css';

import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, ] = useState('');
  const [sort, setSort] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:3333/products/all')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Ошибка загрузки данных о продуктах:", error));
  }, []);

  const openProductDetails = (product) => {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${product.title}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          img { max-width: 100%; height: auto; margin-bottom: 20px; }
          .product-info { margin-top: 20px; }
        </style>
      </head>
      <body>
        <img src="http://127.0.0.1:3333${product.image}" alt="${product.title}">
        <div class="product-info">
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
        </div>
      </body>
      </html>
    `);
    newWindow.document.close();
  };

  const getFilteredAndSortedProducts = () => {
    let filteredProducts = products.filter(product => {
      let matchesFilter = filter ? product.category === filter : true;
      let matchesPrice = true;
      if (minPrice) matchesPrice = matchesPrice && product.price >= minPrice;
      if (maxPrice) matchesPrice = matchesPrice && product.price <= maxPrice;
      return matchesFilter && matchesPrice;
    });

    if (sort === 'price_asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return (
    <div className={classes.productsContainer}>
      <Navigation />
      <HeaderBanner />

      <div>
        {/* Фильтры для цены */}
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Мин. цена"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Макс. цена"
        />
        {/* Селектор сортировки */}
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Без сортировки</option>
          <option value="price_asc">Цена по возрастанию</option>
          <option value="price_desc">Цена по убыванию</option>
        </select>
      </div>

      <div className={classes.saleCardsContainer}>
        {getFilteredAndSortedProducts().map((product) => (
          <div key={product.id} className={classes.saleCard} onClick={() => openProductDetails(product)}>
            <img src={`http://127.0.0.1:3333${product.image}`} alt={product.title} className={classes.productImage}/>
            <div className={classes.description}>
              <div className={classes.title}>{product.title}</div>
              <div className={classes.priceInfo}>
                <div className={classes.price}>${product.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Contact />
      <Map />
    </div>
  );
};

export default AllProducts;
