import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css'; 

function ImageCarousel() {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} showIndicators={false}>
            <div>
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1718014609054_jobkurian1240x300.jpg" alt="First Slide" />
            </div>
            <div>
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" alt="Second Slide" />
            </div>
            <div>
                <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1718776376730_lop1240x300.jpg" alt="Third Slide" />
            </div>
        </Carousel>
    );
}

function RecommendedMoviesSlider({ movies }) {
    const settings = {
        dots:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
    };

    return (
        <div className="recommended-slider  g-5">
            <Slider {...settings}>
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <img src={movie.poster} alt={movie.title} />
                        <p>{movie.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

function HomePage() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/adminApi/userreadmovie/');
                setRecommendedMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="homepage-container">
            <ImageCarousel />
            <h2 className='text-center mt-4'> <strong>Recommended Movies</strong></h2>
            <RecommendedMoviesSlider movies={recommendedMovies} />
        </div>
    );
}

export default HomePage;
