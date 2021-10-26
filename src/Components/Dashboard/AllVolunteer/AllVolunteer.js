import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import VolunteerChartTable from '../VolunteerChartTable/VolunteerChartTable';

const AllVolunteer = () => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('https://thawing-headland-58770.herokuapp.com/allVolunteer')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-10">
                <h6> All Volunteer </h6> <hr />
                    <VolunteerChartTable volunteer={volunteer}></VolunteerChartTable>
                </div>
            </div>
        </div>
    );
};

export default AllVolunteer;