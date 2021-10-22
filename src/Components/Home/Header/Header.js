import React from 'react';
import './Header.css';
import NavBar from '../../Shared/NavBar/NavBar';

const Header = () => {
    return (
        <>
            <div className="header-main">
                <NavBar></NavBar>
                <div className="header-search">
                    <h1> I GROW BY HELPING PEOPLE IN NEED </h1>
                    <input type="search" name="" className="p-2 b-none" placeholder="search" />
                    <input type="button" className="p-2 px-4" value="search" />
                </div>
            </div>
        </>
    );
};

export default Header;