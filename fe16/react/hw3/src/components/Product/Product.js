import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';
import './Product.scss';

const Product = (props) => {
    const { id, name, producer, price, imgUrl, chosen, inCart, toggleFavourite, productToCart, productFromCart, count } = props;

    const [showCartModal, setShowCardModal] = useState(false);

    const openCartModal = (isOpen = false) => setShowCardModal(isOpen);

    const addToCart = () => {
        productToCart(id);
        openCartModal(false);
    };

    const removeFromCart = () => {
        productFromCart(id);
        openCartModal(false);
    };

    return (
        <div className='product'>
            <div className='product__img'>
                <img src={imgUrl}  alt='Product'/>
            </div>
            <div className='product__icon'>
                <Icon
                    type='star'
                    filled={true}
                    color={chosen ? '#ff271a' : '#000'}
                    onClick={() => toggleFavourite(id)}
                />
                {
                    inCart &&
                    <Icon
                        type='remove'
                        filled={true}
                        color='#ff271a'
                        onClick={() => openCartModal(true)}
                    />
                }
            </div>
            <div className='product__desc'>
                <div className='product__title'>{name}</div>
                <div className='product__producer'>{producer}</div>
                <div className='product__price'>
                    <span>$ {price.toFixed(2)}</span>
                    {
                        !inCart &&
                        <Button text='Add to cart' className='btnCart' onClick={() => openCartModal(true)} />
                    }
                    {
                        showCartModal &&
                        <Modal
                            header={inCart ? 'Deleting from the cart' : 'Adding to the cart'}
                            closeButton={true}
                            text={inCart
                                ? 'Are you sure for deleting this product from the cart?'
                                : 'Are you sure for adding this product to the cart?'}
                            actions={<>
                                <Button className='btnModal btn-red' text='Ok' onClick={inCart ? removeFromCart : addToCart} />
                                <Button className='btnModal btn-red' text='Cancel' onClick={() => openCartModal(false)} />
                                </>}
                            closeFunc={() => openCartModal(false)}
                        />
                    }
                </div>
                {
                    inCart &&
                    <div className='product__total total'>
                        <p className='total__count'>Count: {count}</p>
                        <p className='total__sum'>Total amount: ${(price * count).toFixed(2)}</p>
                    </div>
                }
            </div>
        </div>
    );
};

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    chosen: PropTypes.bool,
    inCart: PropTypes.bool,
    color: PropTypes.string,
    toggleFavourite: PropTypes.func,
    productToCard: PropTypes.func,
    productFromCart: PropTypes.func,
    count: PropTypes.number
};

Product.defaultProps = {
    producer: 'Unknown',
    imgUrl: './images/productDefault.jpeg',
    chosen: false,
    inCart: false,
    color: '',
    toggleFavourite: undefined,
    productToCard: undefined,
    productFromCart: undefined,
    count: 1
};

export default Product;