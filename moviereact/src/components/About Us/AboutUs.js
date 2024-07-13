import Navbar from "../Navbar/Navbar";

function Aboutus() {
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-md-8 offset-md-2" style={{fontFamily:'sans-serif', fontSize:'20px',}}>
                    <h1 className="mt-4">About Us</h1>
                      <p>Welcome to MovieBuzz, your ultimate destination for movie tickets and cinema experiences! Founded in 2024, MovieBuzz was created with the vision of simplifying the way you book movie tickets and enhancing your overall movie-going experience. Our platform is designed to bring the magic of cinema closer to you with just a few clicks.
                     </p>
                    <h1>Our Mission</h1>
                        <p>At MovieBuzz, our mission is to provide a seamless and enjoyable ticket booking experience for movie enthusiasts. We strive to offer the latest in movie showtimes, exclusive previews, and special promotions to keep you in the buzz of the film world. We aim to be your go-to source for all things cinema, making movie nights easier and more fun.
                    </p>

                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;