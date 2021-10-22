import React from 'react';
import './HomeMainDetails.css';
import { Figure } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const HomeMainDetails = ({info}) => {
    const history = useHistory();
    const handleBook = (title) => {
        history.push(`/info/${title}`);
    }
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
                   <button  onClick={() => handleBook(info.title)} className="activity-title" >  <p >{info.title}</p>  </button>            
                </Figure.Caption>
            </Figure>      
       </div>
    );
};

export default HomeMainDetails;