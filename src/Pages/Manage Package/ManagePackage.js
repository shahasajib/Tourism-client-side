import React, { useEffect, useState } from 'react';

const ManagePackage = () => {
    const [tourP, setTourP] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setTourP(data))
    }, [])
    const handleDelete = id => {
        const uri = `http://localhost:5000/packages/${id}`
        fetch(uri, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Are You Sure Delete This item.")
                    const remainingPackages = tourP.filter(tp => tp._id !== id);
                    setTourP(remainingPackages);
                }
            })
    }
    return (
        <div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    tourP.map(data => (
                        <div className="col">
                            <div className="card h-100">
                                <img src={data.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <h4 className="card-title">{data.stay}</h4>
                                    <h5 className="card-title">${data.price}<small>/Per Person</small></h5>
                                    <h6 className="card-text">{data.description}</h6>
                                    <button onClick={() => handleDelete(data._id)} className="btn btn-warning">Delete</button>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManagePackage;