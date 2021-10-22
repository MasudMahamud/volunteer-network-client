import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import HomeMain from '../../HomeMain/HomeMain';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <main>          
                <Header></Header>
                <HomeMain></HomeMain>
                <Footer></Footer>      
        </main>
    );
};

export default Home;