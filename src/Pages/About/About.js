import React from 'react';
import about1 from '../../Images/About/about1.jpg'
import about2 from '../../Images/About/about2.jpg'
import about3 from '../../Images/About/about3.jpg'
import about4 from '../../Images/About/about4.jpg'
import './About.css'



const about = [
    {
        img: about1,
        details: "2000+ Our worldwide guide"
    },
    {
        img: about2,
        details: "100% trusted travel agency"
    },
    {
        img: about3,
        details: "10+ year of travel experience"
    },
    {
        img: about4,
        details: "90% of our traveller happy"
    }
]
const About = () => {
    return (
        <div className="container">
            <div className="about-text">
                <h3>Why Are You Travel With Traveller Point?</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-2 ">

                {
                    about.map(about => (
                        <div className="col">
                            <div className="card m-4 text-center" style={{ "width": "18rem" }}>
                                <div className="card" >
                                    <img src={about.img} class="card-img-top img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h2 className="card-text"><b>{about.details}</b></h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;