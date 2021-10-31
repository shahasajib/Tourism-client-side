import React from 'react';
import client from '../../Images/Client/client1.jpg'
import client1 from '../../Images/Client/client2.jpg'
import client3 from '../../Images/Client/client4.jpg'
import client4 from '../../Images/Client/client5.jpg'
import './ClientComment.css'


const comments = [
    {
        img: client1,
        name: "Karan",
        details: "This travel angecy is very carfully. I'm really happy with their visited. Because their was take care of all person.So, it is most carefully angency. "
    },
    {
        img: client,
        name: "Rohan",
        details: "This travel angecy is very carfully. I'm really happy with their visited. Because their was take care of all person.So, it is most carefully angency. "
    },

    {
        img: client3,
        name: "Dina Dells",
        details: "This travel angecy is very carfully. I'm really happy with their visited. Because their was take care of all person.So, it is most carefully angency. "
    },
    {
        img: client4,
        name: "Dipa",
        details: "This travel angecy is very carfully. I'm really happy with their visited. Because their was take care of all person.So, it is most carefully angency. "
    }
]

const ClientComment = () => {
    return (
        <div>

            <div className="container">
                <h3 className="comment-header">What Our Traveller Say <br />
                    About Us</h3>
                <div className="row row-cols-1 row-cols-md-2 ">
                    {
                        comments.map(comment => (
                            <div className="col  text-center">
                                <div className="card m-3" style={{ "width": "18rem" }}>

                                    <img src={comment.img} class="rounded img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h4>{comment.name}</h4>
                                        <h6 className="card-text">{comment.details}</h6>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientComment;