import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import AddMenu from "../AddMenu/AddMenu";
import './Header.scss';

const Header = (props) => (
    <div className='header'>
        <MainMenu />
        <div className='header__right'>
            <AddMenu {...props}/>
        </div>
    </div>
);

export default Header;