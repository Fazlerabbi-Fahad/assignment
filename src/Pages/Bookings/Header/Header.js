import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img1 from "./../../../Images/img1.jpg";

const Header = () => {
    return (
        <Card className='border-0 mt-5 mb-5'>
            <div className="mb-3 ">
                <div className="row g-0">
                    <div className="col-md-6">
                        <CardImg src={img1}></CardImg>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title fw-bold mb-3">You Can Check Your Bookings Here</h1>
                            <p className="card-text">This page id for you who have bookings in our hotel. You can see your booking details here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Header;