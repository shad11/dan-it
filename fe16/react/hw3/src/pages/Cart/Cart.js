import React from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";
import "../Products/Products.scss";

const Cart = (props) => {
    const { products, favourites, cart, toggleFavourite, productFromCart } = props;

    const cartIds = Object.keys(cart);
    const productsCart = products
        .filter(product => cartIds.indexOf(product.id.toString()) > -1)
        .map(product => ({...product, count: cart[product.id]}));

    return (
        <div className='products'>
            {
                productsCart.length === 0 &&
                <div className='products__title'>No products in your cart!</div>
            }
            {
                productsCart.length > 0 &&
                productsCart.map(
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
    cart: PropTypes.object,
    toggleFavourite: PropTypes.func,
    productFromCart: PropTypes.func
};

Cart.defaultProps = {
    products: [],
    favourites: [],
    cart: {},
    toggleFavourite: undefined,
    productFromCart: undefined
};

export default Cart;