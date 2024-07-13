import React from 'react';
import Navbar from '../Navbar/Navbar';
import checkAuth from '../auth/CheckAuth';
import checkAdmin from '../auth/CheckAdmin';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AddMovie() {

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
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    function addMovie() {
        axios.post('http://127.0.0.1:8000/adminApi/addmovie/', {
            name: name,
            desc: desc,
            genre: genre,
            ticketCost: ticketCost,
            poster:poster,
            trailer:trailer,
            time1: time1, 
            time2: time2,  
            time3: time3,  
            time4: time4,
            startDate:startDate,
            endDate:endDate, 
        }, {
            headers: { 'Authorization': `Token ${user.token}` }
        })
        .then(response => {
            alert(response.data.message);
            navigate('/');
        })
        .catch(error => {
            if (error.response) {
                alert(`Error: ${error.response.data.error}`);
            } else if (error.request) {
                alert('No response received from the server');
            } else {
                alert('Error setting up the request');
            }
        });}
  return (
    <div>
        <Navbar/>
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
                                    <button className="btn btn-block btn-dark rounded-pill" onClick={addMovie}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default checkAdmin(checkAuth(AddMovie));