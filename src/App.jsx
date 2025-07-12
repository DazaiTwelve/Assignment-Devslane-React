import React from 'react'; // ✅ Add this line
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage.jsx";

export default function App() {
  return (
    <div className="flex flex-col items-center w-full justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route index element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
