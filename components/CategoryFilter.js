import React, { use, useEffect, useState } from "react";

function CategoryFilter({ products }) {
  const [productsCategory, setProductsCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProductsCategory, setFilteredProductsCategory] = useState([]);

  const handleProductsCategory = () => {
    const category = products.map((prod) => prod.category);
    const uniqueCategory = [...new Set(category)];
    setProductsCategory(uniqueCategory);
  };

  useEffect(() => {
    handleProductsCategory();
  }, []);

  const handleFilterProductByCategory = () => {
    const _filterProductsByCategory = products.filter((prod) => {
      if (prod.category === selectedCategory) {
        return true;
      }
    });

    console.log(_filterProductsByCategory);
  };

  useEffect(() => {
    handleFilterProductByCategory();
  }, [selectedCategory]);
  console.log(selectedCategory);

  return (
    <div className="p-4 rounded ">
      <p className="font-semibold">Category</p>
      <select
        className="px-4 py-2 rounded my-2"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Choose Category</option>
        {productsCategory.map((cat) => (
          <option value={cat}>{cat.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
