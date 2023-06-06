import React, { useEffect, useState } from "react";

function RatingFilter({ products }) {
  const [rating, setRating] = useState("");

  const handleFilterProducts = () => {
    const _filterProducts = products.filter((prod) => {
      if (prod.rating.rate >= parseInt(rating)) {
        return true;
      }
    });

    console.log(_filterProducts);
  };

  useEffect(() => {
    handleFilterProducts();
  }, [rating, products]);

  return (
    <div className="p-4 rounded ">
      <p className="font-semibold">Rating</p>
      <select
        className="mr-4 px-4 py-2 rounded my-2 w-full"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="1">1 start & Above</option>
        <option value="2">2 start & Above</option>
        <option value="3">3 start & Above</option>
        <option value="4">4 start & Above</option>
      </select>
    </div>
  );
}

export default RatingFilter;
