import React from "react";
import { NavLink } from "react-router-dom";
import Icon from '../Icon/Icon';
import PropTypes from "prop-types";
import './AddMenu.scss';

const AddMenu = (props) => {
    const { cartCnt, favCnt } = props;
    return (
        <div className='menu-add'>
            <div className='menu-add__link menu-link'>
                <NavLink to='/favourites' activeClassName='selected'>
                    { favCnt > 0 && <div className='menu-link__cnt'>{favCnt}</div> }
                    <Icon type='heart' />
                </NavLink>
            </div>
            <div className='menu-add__link menu-link'>
                <NavLink to='/cart' activeClassName='selected'>
                    { cartCnt > 0 && <div className='menu-link__cnt menu-link__cnt--cart'>{cartCnt}</div> }
                    <Icon type='cart' />
                </NavLink>
            </div>
        </div>
    );
};

AddMenu.propTypes = {
    cartCnt: PropTypes.number,
    favCnt: PropTypes.number
};

AddMenu.defaultProps = {
    cartCnt: 0,
    favCnt: 0
};

export default AddMenu;