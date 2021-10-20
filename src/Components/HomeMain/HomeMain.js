import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import HomeMainDetails from '../HomeMainDetails/HomeMainDetails';

const HomeMain = () => {
    const [item, setItem] = useState(FakeData)
    return (
        <section className="container my-5">
            <div className="row">
            {
                item.map(info => <HomeMainDetails info={info} key={info.id}></HomeMainDetails>)
            }
            </div>
        </section>
    );
};

export default HomeMain;