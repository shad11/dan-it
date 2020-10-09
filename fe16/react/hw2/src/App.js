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
    chosen: []
  };

  componentDidMount() {
    this.setState({ chosen: JSON.parse(localStorage.getItem('chosen')) || [] });
    this.setState({ cart: JSON.parse(localStorage.getItem('cart')) || [] });

    axios.get('/products.json')
        .then(res => {
          this.setState({isLoading: false, products: res.data})
        })
  }

  saveFavourites = (chosenNew) => {
    this.setState({ chosen: chosenNew });
    localStorage.setItem('chosen', JSON.stringify(chosenNew));
  };

  toggleFavourite = (setNumber) => {
    const { chosen } = this.state;
    const indexOf = chosen.indexOf(setNumber);

    if (indexOf > -1) {
      const chosenNew = [...chosen];

      chosenNew.splice(indexOf, 1);
      this.saveFavourites(chosenNew);
    } else {
      const chosenNew = [...chosen, setNumber];

      this.saveFavourites(chosenNew);
    }
  };

  productToCart = (setNumber) => {
    const { cart } = this.state;

    this.setState({cart: [...cart, setNumber]});
    localStorage.setItem('cart', JSON.stringify([...cart, setNumber]));
  };

  render() {
    const { isLoading, products, chosen } = this.state;

    if (isLoading) {
      return null;
    }

    return (
        <Products products={products} chosen={chosen} toggleFavourite={this.toggleFavourite} productToCart={this.productToCart}/>
    )
  }
}

export default App;
