import React from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Products from "../../components/Products/Products";
import PropTypes from "prop-types";

const Cart = (props) => {
    const { isLoading, products } = props;

    return isLoading
        ? <Loader />
        : <Products products={products} />
};

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