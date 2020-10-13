import React from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/Product";
import "../Products/Products.scss";

const Favourites = (props) => {
    const { products, favourites, toggleFavourite, productToCart } = props;

    const productsFavourite = products.filter(product => favourites.indexOf(product.id) > -1);

    return (
        <div className='products'>
            {
                productsFavourite.length === 0 &&
                <div className='products__title'>No products in your favourites!</div>
            }
            {
                productsFavourite.length > 0 &&
                productsFavourite.map(
                    product => {
                        return <Product
                            key={product.id}
                            chosen={true}
                            toggleFavourite={toggleFavourite}
                            productToCart={productToCart}
                            {...product}
                        />
                    })
            }
        </div>
    );
};

Favourites.propTypes = {
    products: PropTypes.array,
    favourites: PropTypes.array,
    toggleFavourite: PropTypes.func,
    productToCard: PropTypes.func
};

Favourites.defaultProps = {
    products: [],
    favourites: [],
    toggleFavourite: undefined,
    productToCard: undefined
};

export default Favourites;