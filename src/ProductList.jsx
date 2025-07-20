// ProductList.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from "axios";
import Products from "./Products.jsx";
import Sorting from "./Sorting.jsx";
import NotFound from './NotFound.jsx'; 
import Loading from './Loading.jsx';   

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function() {
    const source = axios.CancelToken.source();

    axios.get('https://dummyjson.com/products', { cancelToken: source.token })
      .then(response => {
        setProducts(response.data.products);
        setLoading(false); 
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request cancelled:', err.message);
        } else {
          setError(err);
        }
        setLoading(false); 
      });

    return () => {
      source.cancel("ProductList data fetch cancelled.");
    };
  }, []);

  const handelSearch = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handelSort = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const newData = useMemo(() => {
    let filtered = products.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    let sorted = [...filtered];

    if (sort === "lowTohigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "highTolow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sort === "category") {
      sorted.sort((a, b) => a.category.localeCompare(b.category));
    }

    return sorted;
  }, [sort, query, products]);

  if (loading) { // Changed 'load' to 'loading'
    return <Loading />; // Directly return Loading component
  }
  if (error) {
    return <div className="text-center p-8 text-lg text-red-600">Error: {error.message}</div>;
  }
  if (products.length === 0) {
    return <NotFound />; // Directly return NotFound component
  }
  if (newData.length === 0 && query !== "") {
    return <NotFound />; // Directly return NotFound component
  }

  return (
    <div className="w-full">
      <div className="w-full flex md:justify-between justify-center p-4 gap-3 text-white bg-rose-300">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 border-gray-400 grow min-w-0 bg-gray-700 text-white rounded-md placeholder-gray-400"
          onChange={handelSearch}
          value={query}
        />
        <Sorting
          sortVal={sort}
          onSortChange={handelSort}
        />
      </div>

      <Products products={newData} />
    </div>
  );
}