import React, { useContext, useEffect, useState } from 'react';
import './Events.css';
import { UserContext } from '../../App';
import NavBar from '../Shared/NavBar/NavBar';
import img from '../../Image/volunteer.png';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../Shared/Footer/Footer';
import { Button } from '@mui/material';


const Events = () => {
    const [events, setEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/VolunteerActivity?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const deleteEvent = id => {
        console.log(id);
    }

    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="row p-5 mt-5">
                <h3 className="join-title"> Your joining events</h3> <hr />

                {
                    events.length > 0 ?
                        events.map(event =>
                            <div className="col-md-5 m-4  single-event">
                                <div className="half-width">
                                    <img style={{ width: '120px' }} src={img} alt="" /> <br /><br />
                                </div>
                                <div className="half-width">
                                    <strong> {event.volunteerInfo.name} </strong> <br />
                                    <strong> Event-Name : </strong> {event.volunteerInfo.library} <br />
                                    <strong> Joining : </strong> {event.volunteerInfo.date} <br /> <br />
                                    <Button onClick={() => deleteEvent(event._id)} className="cancel-btn" variant="outlined" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>  <br /> <br />
                                </div>
                            </div>
                            ) :
                        <div className="p-5">
                            <h3 className="text-center lead"> No events</h3>
                        </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Events;