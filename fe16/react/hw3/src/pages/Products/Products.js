import React from 'react';
import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";
import './Products.scss';

const Products = (props) => {
    const { products, favourites, toggleFavourite, productToCart } = props;

    return (
        <div className='products'>
            {products.map(
                product => {
                    return <Product
                        key={product.id}
                        chosen={favourites.indexOf(product.id) > -1}
                        toggleFavourite={toggleFavourite}
                        productToCart={productToCart}
                        {...product}
                    />
                })
            }
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    favourites: PropTypes.array,
    toggleFavourite: PropTypes.func,
    productToCard: PropTypes.func
};

Products.defaultProps = {
    products: [],
    favourites: [],
    toggleFavourite: undefined,
    productToCard: undefined
};

export default Products;