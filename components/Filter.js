import React from "react";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import CategoryFilter from "./CategoryFilter";

function Filter({
  products,
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  rating,
  setRating,
  selectedCategory,
  setSelectedCategory,
  handleClearFilter
}) {
  return (
    <div className=" bg-white p-2 m-3 rounded h-full">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold text-xl ml-3 my-4">Filter</p>
        <p className="text-sm font-semibold hover:text-gray-500 cursor-pointer" onClick={handleClearFilter}>Clear All</p>
      </div>
      <hr />
      <PriceFilter
        minVal={minVal}
        maxVal={maxVal}
        setMinVal={setMinVal}
        setMaxVal={setMaxVal}
      />
      <RatingFilter rating={rating} setRating={setRating} />
      <CategoryFilter
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default Filter;
