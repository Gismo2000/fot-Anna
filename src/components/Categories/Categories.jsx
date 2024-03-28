import React, { useEffect, useState } from "react";
import classes from "./Categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesContainerHeader}>
        <div>
          <p>Categories</p>
        </div>
        <div className={classes.line}>
          <hr />
        </div>
        <div className={classes.categoriesButton}>
          <button>
            <a href="#">All categories</a>
          </button>
        </div>
      </div>
      <div className={classes.categoriesCardsContainer}>
        {categories.slice(0, 4).map((category) => (
          <div
            key={category.id}
            className={classes.categoriesCard}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img
              src={"http://127.0.0.1:3333" + category.image}
              alt={category.title}
            />
          </div>
        ))}
      </div>

      {/* --- */}
      <div className={classes.categoriesCardsContainerText}>
        {categories.slice(0, 4).map((category) => (
          <div
            key={category.id}
            className={classes.categoriesCardText}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div className={classes.description}>
              <div className={classes.title}>{category.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* ---- */}
    </div>
  );
};

export default Categories;
