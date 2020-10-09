import React, { PureComponent } from 'react';
import axios from 'axios';
import Products from "./pages/Products/Products";

class App extends PureComponent {
  state = {
    isLoading: true,
    products: [],
    //productsChosen: [],
    //productsCard: [],
    cart: [],
    favourites: []
  };

  componentDidMount() {
    this.setState({ favourites: JSON.parse(localStorage.getItem('favourites')) || [] });
    this.setState({ cart: JSON.parse(localStorage.getItem('cart')) || [] });

    axios.get('/products.json')
        .then(res => {
          this.setState({isLoading: false, products: res.data})
        })
  }

  saveFavourites = (favouritesNew) => {
    this.setState({ favourites: favouritesNew });
    localStorage.setItem('favourites', JSON.stringify(favouritesNew));
  };

  toggleFavourite = (setNumber) => {
    const { favourites } = this.state;
    const indexOf = favourites.indexOf(setNumber);

    if (indexOf > -1) {
      const favouritesNew = [...favourites];

      favouritesNew.splice(indexOf, 1);
      this.saveFavourites(favouritesNew);
    } else {
      const favouritesNew = [...favourites, setNumber];

      this.saveFavourites(favouritesNew);
    }
  };

  productToCart = (setNumber) => {
    const { cart } = this.state;

    this.setState({cart: [...cart, setNumber]});
    localStorage.setItem('cart', JSON.stringify([...cart, setNumber]));
  };

  render() {
    const { isLoading, products, favourites } = this.state;

    if (isLoading) {
      return null;
    }

    return (
        <Products products={products} favourites={favourites} toggleFavourite={this.toggleFavourite} productToCart={this.productToCart}/>
    )
  }
}

export default App;