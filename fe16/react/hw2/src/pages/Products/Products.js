import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";
import './Products.scss';

class Products extends PureComponent {
    render() {
        const { products, chosen, toggleFavourite, productToCart } = this.props;

        return (
            <div className='products'>
                {products.map(
                    product => {
                        return <Product
                            key={product.setNumber}
                            chosen={chosen.indexOf(product.setNumber) > -1}
                            toggleFavourite={toggleFavourite}
                            productToCart={productToCart}
                            {...product}
                        />
                    })
                }
            </div>
        );
    }
}

Product.propTypes = {
    products: PropTypes.array,
    chosen: PropTypes.array,
    toggleFavourite: PropTypes.func,
    productToCard: PropTypes.func
};

Product.defaultProps = {
    products: [],
    chosen: [],
    toggleFavourite: undefined,
    productToCard: undefined
};

export default Products;