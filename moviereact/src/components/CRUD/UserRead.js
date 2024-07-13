import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import  UserMovieCard from './UserMovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import checkAuth from '../auth/CheckAuth';
import Navbar from '../Navbar/Navbar';

function UserRead() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const user = useSelector((state) => state.auth.user);

    function fetchMovies() {
        if (user) {
            axios.get('http://127.0.0.1:8000/adminApi/userreadmovie/', {
                headers: { 'Authorization': `Token ${user.token}` }
            }).then(response => {
                setMovies(response.data);
            }).catch(error => {
                console.error('Error fetching movies:', error);
            });
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [user]);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center my-4">Movies List</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <input
                                type="text"
                                placeholder="Search here...."
                                style={{
                                    width: '950px',
                                    height: '40px',
                                    borderRadius: "5px",
                                    border: 'none'
                                }}
                                onChange={(event) => {
                                    setSearchTerm(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {movies.filter(movie => {
                        if (searchTerm === "") {
                            return true;
                        } else if (movie.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return true;
                        }
                        return false;
                    }).map(movie => (
                        <UserMovieCard
                            key={movie.id}
                            user={user}
                            movie={movie}
                            refresh={fetchMovies}
                        />
                    ))}
                    </div>
                </div>
            </div>
    );
}

export default checkAuth(UserRead);
