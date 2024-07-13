import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import checkAuth from '../auth/CheckAuth';
import { useParams, useNavigate } from 'react-router-dom';

function BookingForm() {
    const { movieId, name } = useParams();
    const [date, setDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [noOfSeats, setNoOfSeats] = useState(1);
    const [ticketCost, setTicketCost] = useState(null);
    const [totalCost, setTotalCost] = useState('');
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [backendBookingId, setBackendBookingId] = useState();
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            axios.get(`http://127.0.0.1:8000/adminApi/detailmovie/${movieId}`, {
                headers: { 'Authorization': `Token ${user.token}` }
            }).then(response => {
                const data = response.data;
                setTicketCost(data.ticketCost);
                setTotalCost(data.ticketCost); // Set initial total cost based on 1 seat
                setTime1(data.time1);
                setTime2(data.time2);
                setTime3(data.time3);
                setTime4(data.time4);
                const { startDate, endDate } = response.data;

                const today = new Date();
                const movieStartDate = new Date(startDate);
                const movieEndDate = new Date(endDate);

                if (movieStartDate > today) {
                    setMinDate(movieStartDate.toISOString().split('T')[0]);
                } else {
                    setMinDate(today.toISOString().split('T')[0]);
                }
                setMaxDate(movieEndDate.toISOString().split('T')[0]);

                setLoading(false); // Set loading to false after data is fetched
            }).catch(error => {
                console.error('Error fetching movie details:', error);
            });
        }
    }, [movieId, user]);

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSeatsChange = (event) => {
        const seats = parseInt(event.target.value);
        setNoOfSeats(seats);
        setTotalCost(seats * ticketCost);
    };

    const addBooking = () => {
        if (!movieId) {
            console.error("Movie ID is null or empty.");
            return;
        }

        const bookingData = {
            user: user.id,
            movie: movieId,
            bookingDate: date,
            bookingTime: selectedTime,
            noOfSeats: noOfSeats,
            ticketCost: ticketCost,
            totalCost: totalCost,
            movieName: name,
        };

        console.log("Booking data:", bookingData); // Debugging

        axios.post("http://127.0.0.1:8000/adminApi/moviebooking/", bookingData, {
            headers: {
                'Authorization': `Token ${user.token}`
            },
        })
        .then((response) => {
            const { bookingId } = response.data; // Assuming the API response has a 'bookingId' field
            setBackendBookingId(bookingId); // Store the booking ID in state
            handlePayment(bookingId); // Call handlePayment with the received booking ID
        })
        .catch((error) => {
            console.error("Error in movie booking:", error);
        });
    };

    const handlePayment = (bookingId) => {
        axios.post("http://127.0.0.1:8000/adminApi/generateorder/", {
            amount: totalCost * 100, // Razorpay expects amount in paise
            order_id: bookingId,
        }, {
            headers: {
                'Authorization': `Token ${user.token}`,
            },
        })
        .then((response) => {
            const orderId = response.data.order_id;
            const options = {
                key: "rzp_test_RWsrVVw4Rc5Cq3",
                amount: totalCost,
                currency: "INR",
                order_id: orderId,
                name: "YOUR COMPANY NAME",
                description: "Payment for Movie Ticket",
                handler: function (response) {
                    console.log("Payment successful:", response);
                    sendEmail();
                    navigate(`/bookingconfirmation/${user.id}/${encodeURIComponent(name)}/${bookingId}`);
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: "9999999999",
                },
            };
            if (window.Razorpay) {
                const rzp = new window.Razorpay(options);
                rzp.open();
            } else {
                console.error('Razorpay is not loaded');
            }
        })
        .catch((error) => {
            console.error("Error initiating payment:", error);
        });
    };

    const sendEmail = () => {
        const emailData = {
            recipient_email: user.email,
            subject: 'Movie Ticket Booking Confirmation',
            message: 'Thank you for choosing to experience this cinematic journey with us. Your ticket(s) are now confirmed, and we look forward to welcoming you to the theater. Enjoy the show....!!'
        };

        axios.post('http://127.0.0.1:8000/adminApi/sendemail/', emailData)
        .then(response => {
            console.log('Email sent successfully');
        })
        .catch(error => {
            console.error('Failed to send email:', error);
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="card">
                        <div className="card-header">{name}</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={date}
                                    onChange={handleDateChange}
                                    min={minDate}
                                    max={maxDate}
                                />
                            </div>
                            <div className="form-group">
                                <label>Show Time:</label>
                                <select
                                    className="form-control"
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                >
                                    <option value="">Select a time</option>
                                    {time1 && <option value={time1}>11:30 AM</option>}
                                    {time2 && <option value={time2}>2:30 PM</option>}
                                    {time3 && <option value={time3}>5:00 PM</option>}
                                    {time4 && <option value={time4}>9:00 PM</option>}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Number of Seats:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={noOfSeats}
                                    onChange={handleSeatsChange}
                                    min="1"
                                />
                            </div>
                            <div className="form-group">
                                <label>Total Price:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={totalCost}
                                    readOnly
                                />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-block customBtnClr" onClick={addBooking}>Book Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(BookingForm);
