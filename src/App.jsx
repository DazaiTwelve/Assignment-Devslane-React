import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function App() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  const products = [
  {
    image: 'https://m.media-amazon.com/images/I/81yh8+MHWHL.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://cdn.canvaschamp.in/static/images/landingpage/skateboard-deck/skateboard-deck-2.jpg',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61agiTSziEL.jpg',
    title: 'Mini Cruiser',
    description: 'Compact plastic cruiser board',
    price: 1299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Downhill Beast',
    description: 'Longboard for high-speed carving',
    price: 2999,
    sale: 'Sale',
    saleprice: '3499',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFUV-VNjIKhFbv9r2WYrRFUkHjpWDvm74qA&s',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },{
    image: 'https://m.media-amazon.com/images/I/81yh8+MHWHL.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://cdn.canvaschamp.in/static/images/landingpage/skateboard-deck/skateboard-deck-2.jpg',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61agiTSziEL.jpg',
    title: 'Mini Cruiser',
    description: 'Compact plastic cruiser board',
    price: 1299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Downhill Beast',
    description: 'Longboard for high-speed carving',
    price: 2999,
    sale: 'Sale',
    saleprice: '3499',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFUV-VNjIKhFbv9r2WYrRFUkHjpWDvm74qA&s',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81yh8+MHWHL.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://cdn.canvaschamp.in/static/images/landingpage/skateboard-deck/skateboard-deck-2.jpg',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61agiTSziEL.jpg',
    title: 'Mini Cruiser',
    description: 'Compact plastic cruiser board',
    price: 1299,
    sale: '',
    saleprice: '',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Downhill Beast',
    description: 'Longboard for high-speed carving',
    price: 2999,
    sale: 'Sale',
    saleprice: '3499',
  },
  {
    image: 'https://images-cdn.ubuy.co.in/633bcf80e2284054d803a223-chromewheels-31.jpg',
    title: 'Street Cruiser',
    description: 'Classic maple wood skateboard',
    price: 1599,
    sale: 'Sale',
    saleprice: '1899',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFUV-VNjIKhFbv9r2WYrRFUkHjpWDvm74qA&s',
    title: 'Pro Deck',
    description: 'High-performance street deck',
    price: 2299,
    sale: '',
    saleprice: '',
  },
  
  
  
  
  
];



  const filteredData = products
    .filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'lowTohigh') return a.price - b.price;
      if (sort === 'highTolow') return b.price - a.price;
      if (sort === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <Header />
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-72 rounded-md"
        />
      </div>
      <ProductList products={filteredData} sortVal={sort} onSortChange={setSort} />
      <Footer />
    </>
  );
}
