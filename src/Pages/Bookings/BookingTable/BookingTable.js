import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AllBookings from './AllBookings';


const BookingTable = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <Table responsive="sm" className='mb-0'>
            <tbody>
                {
                    bookings.map(allBookings => <AllBookings
                        key={bookings.id}
                        allBookings={allBookings}
                    ></AllBookings>)
                }
            </tbody>
        </Table>
    );
};

export default BookingTable;