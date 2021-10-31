import React from 'react';
import { Link } from 'react-router-dom';
import './TourPackage.css'

const TourPackage = ({ tour }) => {
    console.log(tour)
    const { _id, name, price, description, img, stay } = tour || {};

    return (
        <div>
            <div className="col ">
                <div className="card h-100">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h4 className="card-title">{stay}</h4>
                        <h5 className="card-title">${price}<small>/Per Person</small></h5>
                        <h6 className="card-text">{description.slice(0, 60)}</h6>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourPackage;