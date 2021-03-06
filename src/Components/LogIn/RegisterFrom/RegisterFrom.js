import React, { useState, useContext } from 'react';
import './RegisterFrom.css';
import Button from '@mui/material/Button';
import NavBar from '../../Shared/NavBar/NavBar';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const RegisterFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { title } = useParams();
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const volunteerDetails = { ...loggedInUser, volunteerInfo: data, addTime: new Date() };

        fetch('https://thawing-headland-58770.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data === false) {
                    alert('Registration complete!');
                    history.push("/home");
                }
            })
    }


    return (
        <section className="reg-form">
            <div className="container">
                <NavBar></NavBar>
                <div className="row">
                    <h4 className='pt-5 mt-5'> REGISTER AS A VOLUNTEER</h4>
                    <form className="rounded" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" {...register('name', { required: true })} value={loggedInUser.name} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group">
                            <input type="text"  {...register('email', { required: true })} value={loggedInUser.email} name="email" placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group">
                            <input type="text"  {...register('date', { required: true })} name="date" placeholder="Date" className="form-control" />
                            {errors.date && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group">
                            <input type="text"  {...register('description', { required: true })} name="description" placeholder="description" className="form-control" />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group">
                            <input type="text"  {...register('library', { required: true })} value={title} name="library" placeholder="Organize books at the library" className="form-control" />
                            {errors.library && <span className="text-danger">This field is required</span>}
                        </div> <br />
                        <div className="form-group text-right">
                            <Button type="submit" variant="contained"> Registration </Button>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        </section>
    );
};

export default RegisterFrom;