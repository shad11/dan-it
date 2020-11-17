import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import Products from "../../components/Products";

const Index = ({ isLoading, products }) => (
    isLoading
        ? <Loader />
        : <Products products={products} />
);

const mapStateToProps = ({ products }) => ({
    isLoading: products.isLoading,
    products: products.data,
});

Index.propTypes = {
    isLoading: PropTypes.bool,
    products: PropTypes.array,
    toggleFavourite: PropTypes.func,
    addToCart: PropTypes.func,
    showModalToCart: PropTypes.func,
};

Index.defaultProps = {
    isLoading: false,
    products: [],
    toggleFavourite: () => {},
    addToCart: () => {},
    showModalToCart: () => {},
};

export default connect(mapStateToProps)(Index);