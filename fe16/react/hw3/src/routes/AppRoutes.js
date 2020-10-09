import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Products from "../pages/Products/Products";
import Favourites from "../pages/Favourites/Favourites";
import Cart from "../pages/Cart/Cart";

const AppRoutes = (props) => {
    const { products, favourites, cart, toggleFavourite, productToCart, productFromCart } = props;
    const mainProps = { products, favourites, toggleFavourite, productToCart };
    const cartProps = { products, favourites, cart, toggleFavourite, productFromCart };

    return (
        <Switch>
            <Redirect exact from='/' to='/products' />
            <Route path='/products' render={() => <Products {...mainProps}/>} />
            <Route path='/favourites' render={() => <Favourites {...mainProps}/>} />
            <Route path='/cart' render={() => <Cart {...cartProps}/>} />
        </Switch>
    );
};

AppRoutes.propTypes = {
    products: PropTypes.array,
    favourites: PropTypes.array,
    cart: PropTypes.array,
    toggleFavourite: PropTypes.func,
    productToCart: PropTypes.func,
    productFromCart: PropTypes.func
};

AppRoutes.defaultProps = {
    products: [],
    favourites: [],
    cart: [],
    toggleFavourite: undefined,
    productToCart: undefined,
    productFromCart: undefined
};

export default AppRoutes;