import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const history = useHistory()

    const { user } = useAuth()
    const { tourPackageId } = useParams()
    const [detail, setDetail] = useState({});
    const handleOrder = () => {
        history.push('/myorder')
    }
    useEffect(() => {
        fetch(`https://possessed-werewolf-14808.herokuapp.com/packages/${tourPackageId}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 my-3">
                    <div className="card h-100">
                        <img src={detail.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{detail.name}</h5>
                            <h4 className="card-title">{detail.stay}</h4>
                            <h5 className="card-title">${detail.price}<small>/Per Person</small></h5>
                            <h6 className="card-text">{detail.description}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 my-5">
                    <h4>Booking This Package</h4>
                    <form onSubmit={handleOrder}>

                        <input className="m-2" type="text" value={user?.displayName} />
                        <input className="m-2" type="E-mail" value={user?.email} />
                        <input className="m-2" type="" placeholder="Phone Number" />
                        <input className="m-2" type="date" name="" id="" />
                        <select className="m-2">
                            <option value="1">
                                Ticket Type
                            </option>
                            <option value="2">
                                Travel With Bus
                            </option>
                            <option value="3">
                                Travel With train
                            </option>
                            <option value="4">
                                Travel With Plane
                            </option>
                        </select>
                        <br />
                        <button className="m-2">Submit</button>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default Booking;