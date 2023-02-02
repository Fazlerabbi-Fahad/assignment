import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const booking = useLoaderData();
    const { company, name, address, website, email, phone } = booking;
    return (
        <div className='p-5' style={{ backgroundColor: "rgb(238, 235, 235)" }}>
            <div>
                <Table responsive="sm">
                    <tbody>
                        <tr>
                            <td>{company.name}</td>
                            <td>
                                <div>
                                    <p className='fw-bold text-uppercase mb-0'>Contact</p>
                                    <p>{name}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p className='fw-bold text-uppercase mb-0'>City</p>
                                    <p>{address.city}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p className='fw-bold text-uppercase mb-0'>State</p>
                                    <p>{address.street}</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Button variant="danger" className='text-uppercase me-0' href='/bookings'>Hide Details</Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h6 className='fw-bold'>Description</h6>
                        <p>{company.catchPhrase}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Contact Person</h6>
                        <p>{name}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Address</h6>
                        <p>{address.street} {address.suit} {address.zipcode}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Website</h6>
                        <p>{website}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>City</h6>
                        <p>{address.city}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Emails</h6>
                        <p>{email}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>State</h6>
                        <p>{address.street}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Phones</h6>
                        <p>{phone}</p>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h6 className='fw-bold'>Zip Code</h6>
                        <p>{address.zipcode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;