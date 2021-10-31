import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="footer-info">
                            <h5 className="footer-head"><u>Traveller Point</u></h5>

                            <span>At Travellerspoint we strive to create a welcoming, friendly environment for people to discuss their travel plans and share their adventures.</span>
                            <h6>If you would like to be a part of our travel community, then please join us. We'd love you welcome you!</h6>
                            <div className="social-link">
                                <h5>Follow us:</h5>
                                <ul className="">

                                    <a className="m-2 icon" href="/"><i class="fab fa-facebook"></i>
                                    </a>

                                    <a className="m-2 icon" href="/"><i class="fab fa-instagram"></i></a>
                                    <a className="m-2 icon" href="/"><i class="fab fa-twitter"></i></a>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 contact-part">

                        <ul>
                            <h6 ><u>Contact Us</u></h6>
                            <i className="fas fa-phone m-2 icon">
                                +01852-1265125</i>
                            <br /><br />
                            <i className="fas fa-envelope m-2 icon">TravelPoint@gmail.com</i>
                            <br /><br />
                            <i className="fas fa-map-marker-alt m-2 icon">North America, US</i>
                            <br />
                        </ul>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Footer;