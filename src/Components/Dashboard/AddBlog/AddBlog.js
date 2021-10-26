import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddBlog = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('date', info.date);

        fetch('https://thawing-headland-58770.herokuapp.com/addBlog', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input onBlur={handleBlur} className="form-control" type="text" class="form-control" name="title" placeholder="Enter Title" />
                        </div> <br />
                        <div class="form-group">
                            <label for="exampleInputPassword1">Date</label>
                            <input onBlur={handleBlur} type="date" class="form-control" name="date" placeholder="Enter Date" />
                        </div> <br />
                        <div class="form-group">
                            <label for="exampleInputPassword1">Upload file</label>
                            <input onChange={handleFileChange} type="file" class="form-control" placeholder="file" />
                        </div> <br /> <br />

                        <button type="submit" class="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;