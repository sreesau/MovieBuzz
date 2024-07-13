
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

function BookingConfirmation() {
    const { userId, name, bookingId } = useParams();


    return (
        <div>
            <Navbar/>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        <h1 className="text-center mb-0">Booking Confirmed</h1>
                    </div>
                    <div className="card-body">
                        <h4 className='text-center mb-4'>
                            Your booking for {name} has been confirmed.
                        </h4>
                        <h5 className='text-center mb-4'>
                            Booking ID: {bookingId}
                        </h5>
                        <div className="text-center">
                            <Link to={`/mybookings`} className="btn btn-primary">My Bookings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BookingConfirmation;