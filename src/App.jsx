import { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import { useDispatch } from "react-redux";
import { getProductsAsync } from "./redux/productSlice";

function App() {
  const dispatch = useDispatch();
  const fetchProducts = () => {
    dispatch(getProductsAsync());
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
