import React, { use, useEffect, useState } from "react";

function CategoryFilter({ products, selectedCategory, setSelectedCategory }) {
  const [productsCategory, setProductsCategory] = useState([]);

  const handleProductsCategory = () => {
    const category = products.map((prod) => prod.category);
    const uniqueCategory = [...new Set(category)];
    setProductsCategory(uniqueCategory);
  };

  useEffect(() => {
    handleProductsCategory();
  }, []);

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
          <option key={cat} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
