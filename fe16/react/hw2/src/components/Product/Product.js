import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Icon from '../Icon/Icon';
import './Product.scss';

class Product extends PureComponent {
    state = {
        showCartModal: false
    };

    openCartModal = (open = false) => {
        this.setState({
            showCartModal: open
        });
    };

    addToCart = () => {
        const { setNumber, productToCart } = this.props;

        productToCart(setNumber);
        this.openCartModal(false);
    };

    render() {
        const { name, producer, setNumber, price, imgUrl, chosen, toggleFavourite } = this.props;
        const { showCartModal } = this.state;

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
                        onClick={() => toggleFavourite(setNumber)}
                    />
                </div>
                <div className='product__desc'>
                    <div className='product__title'>{name}</div>
                    <div className='product__producer'>{producer}</div>
                    <div className='product__price'>
                        <span>$ {price}</span>
                        <Button text='Add to cart' className='btnCart' onClick={() => this.openCartModal(true)} />
                        {
                            showCartModal &&
                            <Modal
                                header='Adding to cart'
                                closeButton={true}
                                text='Are you sure for adding this product to cart?'
                                actions={<>
                                    <Button className='btnModal btn-red' text='Ok' onClick={this.addToCart} />
                                    <Button className='btnModal btn-red' text='Cancel' onClick={() => this.openCartModal(false)} />
                                    </>}
                                closeFunc={() => this.openCartModal(false)}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    setNumber: PropTypes.number.isRequired,
    color: PropTypes.string,
    toggleFavourite: PropTypes.func,
    productToCard: PropTypes.func
};

Product.defaultProps = {
    producer: 'Unknow',
    imgUrl: './images/productDefault.jpeg',
    color: '',
    toggleFavourite: undefined,
    productToCard: undefined
};

export default Product;