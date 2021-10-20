import React from 'react';
import './HomeMainDetails.css';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeMainDetails = ({info}) => {
    return (
       <div className="home-container col-sm-6 col-md-4 col-lg-3">    
            <Figure>
                <Figure.Image
                    width={200}
                    height={80}
                    alt="171x180"
                    src={info.imgUrl}
                />
                <Figure.Caption>         
                   <Link  className="title" >  <p className="activity-title">{info.title}</p>  </Link>            
                </Figure.Caption>
            </Figure>      
       </div>
    );
};

export default HomeMainDetails;