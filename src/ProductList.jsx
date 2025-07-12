import React from "react";
import Product from "./Product.jsx";
import Filter from "./Filter.jsx";
import Pages from "./Pages.jsx";

export default function ProductList({ products, sortVal, onSortChange, onSearch }) {
  return (
    <div className="flex flex-wrap gap-y-5 bg-white py-5 px-2 justify-center">
      <Filter sortVal={sortVal} onSortChange={onSortChange} onSearch={onSearch} />
      {products.map((item, index) => (
        <Product key={item.id} product={item} index={item.id} />
      ))}
      <Pages />
    </div>
  );
}
