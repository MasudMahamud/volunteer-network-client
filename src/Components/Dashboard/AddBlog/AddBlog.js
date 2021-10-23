import React from 'react';
import SideBar from '../SideBar/SideBar';

const AddBlog = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <h2> add blog </h2>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;