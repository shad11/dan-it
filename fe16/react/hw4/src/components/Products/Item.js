import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import "./Item.scss";

const Item = (props) => {
    const { id, name, producer, price, imgUrl, color, isFavourite, isCart, count, toggleFavourite, showModalToCart, showModalFromCart } = props;

    return (
        <div className='item'>
            <div className='item__img'>
                <img src={imgUrl}  alt='Product'/>
            </div>
            <div className='item__icon'>
                <Icon
                    type='star'
                    filled={true}
                    color={isFavourite ? '#ff271a' : '#000'}
                    onClick={() => {toggleFavourite(id)}}
                />
                {
                    isCart &&
                    <Icon
                        type='remove'
                        filled={true}
                        color='#ff271a'
                        onClick={() => {showModalFromCart(id)}}
                    />
                }
            </div>
            <div className='item__desc'>
                <div className='item__title'>{name}</div>
                <div className='item__producer'>{producer}</div>
                <div className='item__price'>
                    <span>$ {price.toFixed(2)}</span>
                    {
                        !isCart &&
                        <Button text='Add to cart' className='btnCart' onClick={() => {showModalToCart(id)}} />
                    }
                </div>
                {
                    isCart &&
                    <div className='item__total total'>
                        <p className='total__count'>Count: {count}</p>
                        <p className='total__sum'>Total amount: ${(price * count).toFixed(2)}</p>
                    </div>
                }
            </div>
        </div>
    );
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    price: PropTypes.number.isRequired,
    imgUrl: PropTypes.string,
    color: PropTypes.string,
    isFavourite: PropTypes.bool,
    isCart: PropTypes.bool,
    count: PropTypes.number,
    toggleFavourite: PropTypes.func.isRequired,
    showModalToCart: PropTypes.func,
    showModalFromCart: PropTypes.func,
};

Item.defaultProps = {
    producer: 'Unknown',
    imgUrl: './images/productDefault.jpeg',
    color: '',
    isFavourite: false,
    isCart: false,
    count: 1,
    showModalToCart: undefined,
    showModalFromCart: PropTypes.func,
};

export default Item;