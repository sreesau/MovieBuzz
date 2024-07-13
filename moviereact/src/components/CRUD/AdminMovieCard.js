import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye,faTrashAlt,faToggleOff,faToggleOn } from '@fortawesome/free-solid-svg-icons';


function AdminMovieCard(props) { 
    const user = useSelector(state => state.auth.user);
    const [showModal, setShowModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(props.movie.is_enabled);


   function deleteMovie() {
        if (user && user.token) {
            axios.delete(`http://127.0.0.1:8000/adminApi/deletemovie/${props.movie.id}`, {
                headers: { 'Authorization': `Token ${user.token}` }
            })
            .then(response => {
                console.log('Delete response:', response.data);
                setShowModal(true);
                props.refresh();
            })
            .catch(error => {
                console.error('Error deleting show:', error);
            });
        } else {
            console.error('User or token is missing. User:', user);
        }
    }
    const handleDisable = (move_id,is_enabled) => {
        axios.post(`http://127.0.0.1:8000/adminApi/disablemovie/${props.movie.id}`,{}, {
            headers: { 'Authorization': `Token ${user.token}` }
        })
            .then(response => {
                console.log('Disable response:', response.data);
                setIsEnabled(false); // Update state after successful disable
                props.refresh(); 
            })
            .catch(error => {
                console.error('Error disabling movie:', error);
                // Handle error
            });
    };

    const handleEnable = () => {
        axios.post(`http://127.0.0.1:8000/adminApi/enablemovie/${props.movie.id}`,{}, {
            headers: { 'Authorization': `Token ${user.token}` }
        })
            .then(response => {
                console.log('Enable response:', response.data);
                setIsEnabled(true);
                props.refresh(); 
            })
            .catch(error => {
                console.error('Error enabling movie:', error);
                // Handle error
            });
    };
    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm" style={{ opacity: props.movie.is_enabled ? 1 : 0.5 }}>
                <img src={props.movie.poster} className="card-img" alt="Movie Poster" />
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-success">₹ {props.movie.ticketCost}</span>
                    </div>
                    <h5 className="card-title text-center">{props.movie.name}</h5> <br></br>
                    <p className="card-text" style={{ marginTop: '-25px' }}>{props.movie.desc}</p>
                    <div className="text-center">
                 <Link to={`/adminupdatemovie/${props.movie.id}/edit`} className="btn btn-primary btn-sm m-1 border-0" disabled={!props.movie.is_enabled}>
                     <FontAwesomeIcon icon={faEdit} />
                 </Link>
                 <Link to={`/viewmovie/${props.movie.id}`} className="btn btn-info btn-sm m-1 border-0"disabled={!props.movie.is_enabled}>
                     <FontAwesomeIcon icon={faEye} />
                 </Link>
                 <button className="btn btn-danger btn-sm m-1 border-0" onClick={() => setShowModal(true)} disabled={!props.movie.is_enabled}>
             <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {isEnabled? (
                            <button className="btn btn-success btn-sm m-1 border-0" onClick={handleDisable} >
                                <FontAwesomeIcon icon={faToggleOff} />
                            </button>
                        ) : (
                            <button className="btn btn-secondary btn-sm m-1 border-0" onClick={handleEnable}>
                                <FontAwesomeIcon icon={faToggleOn} />
                            </button>
                        )}
                 {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-between">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="close mr-5" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this show?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={deleteMovie}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
        </div>
        </div>
    );
}
export default AdminMovieCard;