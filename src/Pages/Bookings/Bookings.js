import React from 'react';
import BookingTable from './BookingTable/BookingTable';
import Header from './Header/Header';

const Bookings = () => {
    return (
        <div>
            <Header></Header>
            <BookingTable></BookingTable>
        </div>
    );
};

export default Bookings;