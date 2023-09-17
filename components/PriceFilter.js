import React, { useEffect, useState } from "react";

function PriceFilter({ minVal, maxVal, setMinVal, setMaxVal }) {
 
  
  return (
    <div className=" p-4 rounded ">
      <p className="font-semibold">Price</p>
      <select
        className="px-4 py-2 rounded my-2 mr-2"
        value={minVal}
        onChange={(e) => setMinVal(e.target.value)}
      >
        <option value="">Min</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="1500">15000</option>
      </select>

      <select
        className="px-4 py-2 rounded my-2"
        value={maxVal}
        onChange={(e) => setMaxVal(e.target.value)}
      >
        <option value="">Max</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
        <option value="1500">15000</option>
      </select>
    </div>
  );
}

export default PriceFilter;
