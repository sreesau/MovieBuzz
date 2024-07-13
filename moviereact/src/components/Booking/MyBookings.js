import React, { useState, useEffect } from "react";
import axios from "axios";
import checkAuth from '../auth/CheckAuth';
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";
import Navbar from '../Navbar/Navbar';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (user) {
          const response = await axios.get(`http://127.0.0.1:8000/adminApi/mybookings/`, {
            headers: { 'Authorization': `Token ${user.token}` }
          });
          setBookings(response.data);
        }
      } catch (error) {
        console.error('Error fetching booking history:', error);
      }
    };

    fetchBookings();
  }, [user]);

  const downloadPdf = (containerId, bookingId) => {
    const ticketDetails = document.getElementById(containerId);
    if (!ticketDetails) {
      console.error("Ticket details not found.");
      return;
    }

    html2canvas(ticketDetails)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);

        // Include QR code in PDF
        const qrCanvas = document.querySelector("canvas");
        if (qrCanvas) {
          const qrImgData = qrCanvas.toDataURL("image/png");
          pdf.addPage();
          pdf.addImage(qrImgData, "PNG", 3, 3, 5, 5, null, "SLOW");
        }

        pdf.save(`ticket-${bookingId}.pdf`);
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className="text-center text-white mt-3 mb-5">Booking History</h1>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div key={booking.bookingId} className="card mb-3">
                  <div className="card-header bg-success"></div>
                  <div className="card-body" id={`ticket-container-${booking.bookingId}`}>
                    <h4 className="text-center mb-4">{booking.movieName}</h4>
                    <p> <strong>Booking Id: </strong> {booking.bookingId}</p>
                    <p> <strong>Date: </strong>{booking.bookingDate}</p>
                    <p> <strong>No. of seats: </strong>{booking.noOfSeats}</p>
                    <p><strong>Total Price:</strong> {booking.totalCost}</p>
                    <QRCode value={JSON.stringify(booking)} size={100} />
                  </div>
                  <div className="btn btn-success">
                    <button style={{backgroundColor: '#76885B'}}  onClick={() => downloadPdf(`ticket-container-${booking.bookingId}`, booking.booking_id)}>Download Ticket</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">Loading booking history...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(MyBookings);
