import React, { useEffect, useState } from 'react';
import TourPackage from '../Tour Package/TourPackage';
import './TourPackages.css'

const TourPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <div className="p-header">
                <p className="mt-3">Choose Your Package</p>
                <h2>Select Your Best Package For Your Travel</h2>
            </div>
            <br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        packages.map(tour => <TourPackage
                            key={tour._id}
                            tour={tour}

                        >

                        </TourPackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TourPackages;