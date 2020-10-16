import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/Loader";
import Products from "../../components/Products/Products";

const Favourites = (props) => {
    const { isLoading, products } = props;

    return isLoading
        ? <Loader />
        : <Products products={products} />
};

const mapStateToProps = ({ products }) => ({
    isLoading: products.isLoading,
    products: products.favourites,
});

Favourites.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.array
};

Favourites.defaultProps = {
    isLoading: false,
    products: []
};

export default connect(mapStateToProps)(Favourites);