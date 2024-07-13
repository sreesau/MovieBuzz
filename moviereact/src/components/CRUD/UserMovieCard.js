import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye,} from '@fortawesome/free-solid-svg-icons';


function UserMovieCard(props) { 
    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
                <img src={props.movie.poster} className="card-img" alt="Movie Poster" />
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-success">₹ {props.movie.ticketCost}</span>
                    </div>
                    <h5 className="card-title text-center">{props.movie.name}</h5> <br></br>
                    <p className="card-text" style={{ marginTop: '-25px' }}>{props.movie.desc}</p>
                    <div className="text-center">
                 <Link to={`/viewmovie/${props.movie.id}`} className="btn btn-info btn-sm m-1 border-0"disabled={!props.movie.is_enabled}>
                     <FontAwesomeIcon icon={faEye} />
                 </Link>
               
        </div>
        </div>
        </div>
        </div>
    );
}
export default UserMovieCard;