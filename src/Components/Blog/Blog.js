import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://thawing-headland-58770.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="row mt-5 pt-5">
            {
                    blog.map(data => <BlogDetails key={blog._id} data={data}> </BlogDetails>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;