import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import img1 from "./../../Images/img2.jpg";

const Home = () => {
    return (
        <Card className='border-0 mt-5 mb-5' style={{ height: "70vh" }}>
            <div className="mb-3 ">
                <div className="row g-0">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h1 className="card-title fw-bold mb-3">leadzen.ai</h1>
                            <p className="card-text">Leadzen.ai is the most intelligent prospecting tool in today’s digital world. Our AI-powered real-time engine doesn’t just track, collate and disseminate data to you, it also helps you leverage that data in the most efficient way possible..</p>
                            <p className="card-text">It's lead generation and lead acquisition, through leading AI technology.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <CardImg src={img1}></CardImg>
                    </div>

                </div>
            </div>
        </Card>
    );
};

export default Home;