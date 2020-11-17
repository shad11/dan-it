import React from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { loadProducts, loadFavourites, loadCart } from "./store/products/operations";
import Header from "./pages/Header/Header";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch();

  dispatch(loadProducts());
  dispatch(loadFavourites());
  dispatch(loadCart());

  return (
      <>
        <Header />
        <AppRoutes />
      </>
  )
};

export default App;
