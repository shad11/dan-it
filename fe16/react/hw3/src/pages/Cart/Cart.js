import React from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";
import "../Products/Products.scss";

const Cart = (props) => {
    const { products, favourites, cart, toggleFavourite, productFromCart } = props;

    const productsCart = products
        .filter(product => cart.indexOf(product.id) > -1)
        .map(product => ({...product, count: [...cart].reduce((prev, curr) => (curr === product.id ? prev + 1 : prev), 0)}));

    return (
        <div className='products'>
            {productsCart.map(
                product => {
                    return <Product
                        key={product.id}
                        inCart={true}
                        chosen={favourites.indexOf(product.id) > -1}
                        toggleFavourite={toggleFavourite}
                        productFromCart={productFromCart}
                        {...product}
                    />
                })
            }
        </div>
    );
};

Cart.propTypes = {
    products: PropTypes.array,
    favourites: PropTypes.array,
    cart: PropTypes.array,
    toggleFavourite: PropTypes.func,
    productFromCart: PropTypes.func
};

Cart.defaultProps = {
    products: [],
    favourites: [],
    cart: [],
    toggleFavourite: undefined,
    productFromCart: undefined
};

export default Cart;