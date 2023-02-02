import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AllBookings from './AllBookings';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


const BookingTable = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Table responsive="sm" className='mb-0 border-0'>

                    {
                        bookings.map(allBookings => <AllBookings
                            key={bookings.id}
                            allBookings={allBookings}
                        ></AllBookings>)
                    }

                </Table>

            </Card>
        </Accordion >
    );
};

export default BookingTable;