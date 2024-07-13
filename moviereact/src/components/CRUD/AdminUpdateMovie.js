import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import checkAuth from '../auth/CheckAuth';

function AdminUpdateMovie() {
    const {movieId}= useParams();
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState('');
    const [poster, setPoster] = useState('');
    const [trailer, setTrailer] = useState('');
    const [ticketCost, setTicketCost] = useState('');
    const [time1, setTime1] = useState(false);
    const [time2, setTime2] = useState(false);
    const [time3, setTime3] = useState(false);
    const [time4, setTime4] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    useEffect(() => {
        if (user) {
          axios.get(`http://127.0.0.1:8000/adminApi/detailmovie/${movieId}`, {
            headers: { 'Authorization': `Token ${user.token}` }
          }).then(response => {
            setName(response.data.name);
            setGenre(response.data.genre)
            setDesc(response.data.desc);
            setTicketCost(response.data.ticketCost);
            setPoster(response.data.poster);
            setTrailer(response.data.trailer);
            setTime1(response.data.time1);
            setTime2(response.data.time2);
            setTime3(response.data.time3);
            setTime4(response.data.time4);
            setStartDate(response.data.startDate);
            setEndDate(response.data.endDate)
          }).catch(error => {
            console.error('Error fetching movie details:', error);
          });
        }
      }, [movieId, user]);
      function updateMovie() {
        axios.put(`http://127.0.0.1:8000/adminApi/updatemovie/${movieId}`, {
            name: name,
            genre: genre,
            desc: desc,
            ticketCost:ticketCost,
            poster:poster,
            trailer:trailer,
            time1:time1,
            time2:time2,
            time3:time3,
            time4:time4,
            startDate:startDate,
            endDate:endDate,
        }, {
            headers: { 'Authorization': `Token ${user.token}` }
        }).then(response => {
            setShowSuccessModal(true);
            console.log('showSuccessModal set to true');
            navigate('/adminread'); 
        }).catch(error => {
            console.error('Error updating movie:', error);
        });
    }

  return (
    <div>  <Navbar/>
    <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card bg-white" style={{borderRadius:'20px'}}>
                    <h1 className="card-title text-center mt-4"style={{color: '#76885B'}}>Add Movie</h1>
                        <div className="card-body">
                            <div className="form-group" style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Title:</label>
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    value={name} 
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Genre:</label>
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    value={genre} 
                                    onChange={(event) => setGenre(event.target.value)}
                                />
                            </div>
        
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Description:</label>
                                <textarea 
                                    className="form-control rounded-pill" 
                                    value={desc} 
                                    onChange={(event) => setDesc(event.target.value)}
                                />
                            </div>
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Poster:</label>
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    value={poster} 
                                    onChange={(event) => setPoster(event.target.value)}
                                />
                            </div>
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Trailer:</label>
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    value={trailer} 
                                    onChange={(event) => setTrailer(event.target.value)}
                                />
                            </div>
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Ticket Price:</label>
                                <input 
                                    type="text" 
                                    className="form-control rounded-pill" 
                                    value={ticketCost} 
                                    onChange={(event) => setTicketCost(event.target.value)}
                                />
                            </div>

                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Show Start Date:</label>
                                <input 
                                    type="date" 
                                    className="form-control rounded-pill" 
                                    value={startDate} 
                                    onChange={(event) => setStartDate(event.target.value)}
                                />
                            </div>
                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Show End Date:</label>
                                <input 
                                    type="date" 
                                    className="form-control rounded-pill" 
                                    value={endDate} 
                                    onChange={(event) => setEndDate(event.target.value)}
                                />
                            </div>

                            <div className="form-group"style={{color: '#76885B',fontSize:'18px'}}>
                                <label>Show Times:</label><br/>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        id="time1" 
                                        checked={time1}
                                        onChange={(event) => setTime1(event.target.checked)}
                                    />
                                    11:30Am
                                </label><br/>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        id="time2" 
                                        checked={time2}
                                        onChange={(event) => setTime2(event.target.checked)}
                                    />
                                    2:30pm
                                </label><br/>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        id="time3" 
                                        checked={time3}
                                        onChange={(event) => setTime3(event.target.checked)}
                                    />
                                    5pm
                                </label><br/>
                                <label>
                                    <input 
                                        type="checkbox" 
                                        id="time4" 
                                        checked={time4}
                                        onChange={(event) => setTime4(event.target.checked)}
                                    />
                                    9pm
                                </label>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-block btn-dark rounded-pill" onClick={() => setShowSuccessModal(true)}>update</button>
                            </div>{showSuccessModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-between">
                                <h5 className="modal-title">Confirm Update</h5>
                                <button type="button" className="close mr-5" onClick={() => setShowSuccessModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to update this movie?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowSuccessModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={updateMovie}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default checkAuth(AdminUpdateMovie);