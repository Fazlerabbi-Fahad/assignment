import React from 'react';
import Button from 'react-bootstrap/Button';
import './AllBookings.css';

const AllBookings = ({ allBookings }) => {
    const { id, address, name, company } = allBookings;
    return (
        <tr className='table-row'>
            <td>{company.name}</td>
            <td>
                <div>
                    <p className='fw-bold text-uppercase mb-0 '>Contact</p>
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
                    <Button variant="danger" className='text-uppercase me-0' href={`/bookings/${id}`} > View Details</Button>
                </div>
            </td>
        </tr >
    );
};

export default AllBookings;