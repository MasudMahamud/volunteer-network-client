import React, { useEffect, useState } from 'react';
import HomeMainDetails from '../HomeMainDetails/HomeMainDetails';

const HomeMain = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/activity')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    
    return (
        <section className="container my-5">
            <div className="row">
                {
                    items.map(info => <HomeMainDetails info={info} key={info.id}></HomeMainDetails>)
                }
            </div>
        </section>
    );
};

export default HomeMain;