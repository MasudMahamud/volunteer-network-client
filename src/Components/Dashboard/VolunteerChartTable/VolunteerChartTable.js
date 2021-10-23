import React from 'react';

const VolunteerChartTable = ({volunteer}) => {
    return (
        <div className="table-responsive">
            <table className="table table-borderless">
            <thead className="thead-dark">
                <tr>
                    <th className="text-secondary" scope="col"> Sr No </th>
                    <th className="text-secondary" scope="col"> Name </th>
                    <th className="text-secondary" scope="col"> Email ID </th>
                    <th className="text-secondary" scope="col"> Register Date </th>
                    <th className="text-secondary" scope="col"> volunteer list </th>
                    <th className="text-secondary" scope="col"> Action </th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    volunteer.map((volunteer, index) =>

                        <tr>
                            <td> {index + 1} </td>
                            <td> {volunteer.name} </td>
                            <td> {volunteer.email} </td>
                            <td> {volunteer.volunteerInfo.date} </td>
                            <td> {volunteer.volunteerInfo.library} </td>
                            <td> <button> delete </button> </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default VolunteerChartTable;