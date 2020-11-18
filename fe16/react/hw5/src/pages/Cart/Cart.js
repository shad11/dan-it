import React from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import Products from "../../components/Products";
import { OrderForm } from "../../components/Forms";
import PropTypes from "prop-types";
import "./Cart.scss";

const Cart = ({ isLoading, products }) => (
    isLoading
        ? <Loader />
        : <div className="cart">
            <div className="cart__form"><OrderForm /></div>
            <Products products={products} />
        </div>
);

const mapStateToProps = ({ products }) => {
    const { favourites, cart } = products;
    const favouritesId = favourites.map(elem => elem.id);
    const cartArr = cart.map(elem => ({...elem, isFavourite: favouritesId.indexOf(elem.id) > 0}));

    return {
        isLoading: products.isLoading,
        products: cartArr,
    }
};

Cart.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.array
};

Cart.defaultProps = {
    isLoading: false,
    products: []
};

export default connect(mapStateToProps)(Cart);