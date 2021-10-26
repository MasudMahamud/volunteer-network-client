import React from 'react';

const BlogDetails = ({ data }) => {
    return (
        <div className="col-md-4  col-sm-6 text-center">
            <div className="blog-info">
                <div className="blog-image">
                    {
                        data.image ? <img style={{ maxWidth: '250px' }} src={`data:image/png;base64,${data.image.img}`} alt="" />
                            :
                            <img style={{ maxWidth: '200px' }} className="img-fluid mb-3" src={`https://thawing-headland-58770.herokuapp.com/${data.img}`} alt="" />
                    }
                </div>
                <div className="doctor-data text-center p-4">
                    <h3 className="text-primary"> {data.title} </h3>
                    <h5 className="text-primary"> {data.date} </h5>
                </div> <hr />
            </div>
        </div>
    );
};

export default BlogDetails;