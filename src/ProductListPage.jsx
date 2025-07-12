import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import allData from './allproduct';

export default function ProductListPage() {
  const [sort, setSort] = useState("default");
  const [query, setQuery] = useState('');

  function handelSearch(event) {
    setQuery(event.target.value);
  }

  function handelSort(event) {
    setSort(event.target.value);
  }

  let filterData = allData.filter(item =>
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  let data = [...filterData];

  if (sort === "lowTohigh") {
    data.sort((a, b) => +a.price - +b.price);
  } else if (sort === "highTolow") {
    data.sort((a, b) => +b.price - +a.price);
  } else if (sort === "title") {
    data.sort((a, b) => (a.title < b.title ? -1 : 1));
  }

  return (
    <ProductList
      products={data}
      sortVal={sort}
      onSortChange={handelSort}
      onSearch={handelSearch}
    />
  );
}
