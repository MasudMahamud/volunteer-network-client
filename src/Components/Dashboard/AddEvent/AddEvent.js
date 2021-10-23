import React from 'react';
import SideBar from '../SideBar/SideBar';

const AddEvent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h2> add event </h2>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;