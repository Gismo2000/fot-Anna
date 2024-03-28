import Categories from "../../Categories/Categories";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";


const CategoriesGoods = () => {
  return (
    <div className="pageBody">
      <Navigation />
      <Categories />
      {/* <Contact />
      <Map /> */}
    </div>
  );
};

export default CategoriesGoods;