import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import checkAuth from '../auth/CheckAuth';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function ViewMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({
    name: '',
    genre: '',
    desc: '',
    ticketCost: '',
    poster: '',
    trailer: '',
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    startDate: '',
    endDate: ''
  });
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      axios.get(`http://127.0.0.1:8000/adminApi/detailmovie/${movieId}`, {
        headers: { 'Authorization': `Token ${user.token}` }
      }).then(response => {
        setMovie(response.data);
      }).catch(error => {
        console.error('Error fetching movie details:', error);
      });
    }
  }, [movieId, user]);
  const timeMapping = {
    time1: "11:30 AM",
    time2: "2:30 PM",
    time3: "5:00 PM",
    time4: "9:00 PM"
  };

  const showTimings = [
    movie.time1 ? timeMapping.time1 : null,
    movie.time2 ? timeMapping.time2 : null,
    movie.time3 ? timeMapping.time3 : null,
    movie.time4 ? timeMapping.time4 : null
  ].filter(time => time).join(', ');
  return (
    <div>
      <Navbar />
      <div className="container" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <div className="col-md-8">
          <div className="card mb-3">
          <div class="row no-gutters">
          <div class="col-md-4">
                <img
                  src={movie.poster}
                  className="card-img-top" style={{height:'500px'}}
                  alt="movie poster"
                /><a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill text-white"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '50%',
                  textAlign: 'center',
                  fontSize: '1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                }}
              >
               <FontAwesomeIcon icon={faPlay} /> Trailer
              </a>

                </div>
                <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center">{movie.name}</h5>
                  <p className="card-text"><strong>Genre: </strong>{movie.genre}</p>
                  <p className="card-text"><strong>Description: </strong>{movie.desc}</p>
                  <p className="card-text"><strong>Ticket Cost: </strong>{movie.ticketCost}</p>
                  <p className="card-text"><strong>Show Timings: </strong>{showTimings}</p>
                  <p className="card-text"><strong>Show Start Date: </strong>{movie.startDate}</p>
                  <p className="card-text"><strong>Show End Date: </strong>{movie.endDate}</p> 
                  {user && user.username !== 'admin@moviebuzz' && (
                     <div className="d-flex justify-content-center mt-5">
               <Link to={`/bookingform/${movieId}/${movie.name}`} className="btn" style={{ backgroundColor: '#76885B' }}>Book Now</Link>
             </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  
  );
}

export default checkAuth(ViewMovie);
