import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import './App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem('favourites')) || []);
    setCart(JSON.parse(localStorage.getItem('cart')) || []);

    axios.get('/products.json')
        .then(res => {
          setProducts(res.data);
          setIsLoading(false);
        })
  }, []);

  const saveFavourites = (favouritesNew) => {
    setFavourites(favouritesNew);
    localStorage.setItem('favourites', JSON.stringify(favouritesNew));
  };

  const toggleFavourite = (id) => {
    const indexOf = favourites.indexOf(id);

    if (indexOf > -1) {
      const favouritesNew = [...favourites];

      favouritesNew.splice(indexOf, 1);
      saveFavourites(favouritesNew);
    } else {
      const favouritesNew = [...favourites, id];

      saveFavourites(favouritesNew);
    }
  };

  const productToCart = (id) => {
    setCart([...cart, id]);
    localStorage.setItem('cart', JSON.stringify([...cart, id]));
  };

  const productFromCart = (id) => {
    const cartNew = cart.filter(productId => productId !== id);

    setCart(cartNew);
    localStorage.setItem('cart', JSON.stringify(cartNew));
  };

  if (isLoading) {
    return null;
  }

  return (
      <>
        <Header/>
        <AppRoutes
            products={products}
            favourites={favourites}
            cart={cart}
            toggleFavourite={toggleFavourite}
            productToCart={productToCart}
            productFromCart={productFromCart}
        />
      </>
  )
};

export default App;