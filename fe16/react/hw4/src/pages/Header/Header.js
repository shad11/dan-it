import React from "react";
import { connect } from "react-redux";
import MainMenu from "../../components/MainMenu/MainMenu";
import AddMenu from "../../components/AddMenu/AddMenu";
import './Header.scss';

const Header = (props) => (
    <div className='header'>
        <MainMenu />
        <div className='header__right'>
            <AddMenu {...props}/>
        </div>
    </div>
);

const mapStateToProps = ({ products }) => {
    const { favourites, cart } = products;

    return {
        favCnt: favourites.length,
        cartCnt: cart.reduce((prev, curr) => prev + curr.count, 0)
    }
};

export default connect(mapStateToProps)(Header);