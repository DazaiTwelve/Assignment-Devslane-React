import React from "react";
import Product from "./Product.jsx";
import Filter from "./Filter.jsx";
import Pages from "./Pages.jsx";

export default function ProductList({ products, sortVal, onSortChange }) {
  return (
    <div className="flex flex-wrap gap-y-5 bg-black gap-x-8 justify-center md:px-35 py-10 md:justify-between my-10">
      
      
      <Filter sortVal={sortVal} onSortChange={onSortChange} />

      
      {products.map((item, index) => (
        <Product
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          sale={item.sale}
          saleprice={item.saleprice}
        />
      ))}

      
      <Pages />
    </div>
  );
}
