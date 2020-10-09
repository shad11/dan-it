import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.scss';

const Menu = () => (
    <ul className='menu'>
        <li className='menu__link'><NavLink to='/products' activeClassName='selected'>Products</NavLink></li>
        <span className='menu__right'>
            <li className='menu__link'><NavLink to='/favourites' activeClassName='selected'>Favourites</NavLink></li>
            <li className='menu__link'><NavLink to='/cart' activeClassName='selected'>Cart</NavLink></li>
        </span>
    </ul>
);

export default Menu;