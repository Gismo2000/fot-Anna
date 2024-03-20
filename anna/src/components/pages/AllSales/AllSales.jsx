import React from 'react';
import HeaderBanner from '../../HeaderBanner/Banner';
import Navigation from '../../Navigation/Navigation';
import Categories from '../../Categories/Categories';
import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';

const AllSales = () => (
  <div className="pageBody">
    <Navigation />
    {/* <HeaderBanner />
    <Categories /> */}
    <Sale />
    <Contact />
    <Map />
  </div>
);

export default AllSales;