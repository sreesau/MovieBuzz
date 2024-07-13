import { NavLink } from "react-router-dom";
import logo from './logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeUser } from '../../store/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  var user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isNavbar = location.pathname === '/login'||location.pathname === '/register';

  function logout() {
    if (user) {
      axios.post('http://127.0.0.1:8000/adminApi/logout/', {}, {
        headers: { 'Authorization': "token " + user.token }
      });
      dispatch(removeUser());
      navigate('/');
    }
  }
  let menuItems;
  if (user) {
    menuItems = user.username === 'admin@moviebuzz' ? (
      <>
        <li className="nav-item customNavItem">
          <NavLink to={"/adminread"} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }} >
            All Movies
          </NavLink>
        </li>
        <li className="nav-item customNavItem">
          <NavLink to={"/addmovie"} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }}>
            Add New Movie
          </NavLink>
        </li>
      </>
    ) : (
      <>
        <li className="nav-item customNavItem">
          <NavLink to={"/userread"} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }}>
            Movies
          </NavLink>
        </li>
        <li className="nav-item customNavItem">
          <NavLink to={`/mybookings`} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }}>
            My Bookings
          </NavLink>
        </li>
      </>
    );
  }
  if (isNavbar) {
    return null;
  } else {
    return (
      <nav className="navbar navbar-expand-lg customNavbar"style={{ backgroundColor: '#FFFFFF', maxWidth: 'fit-content', margin: '0 auto', borderRadius: '40px',marginTop:'10px' }} >
        <NavLink to="/" className={'navbar-brand'}>
        <img src={logo} alt="logo of MovieBuzz" style={{ height:'30px',width:'40px', marginRight:'7px'}}/><span style={{ color: '#76885B', fontWeight:'bold'}}>MovieBuzz</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: '#eecd1d' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item customNavItem">
              <NavLink to={"/"} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item customNavItem">
              <NavLink to={"/aboutus"} className={'nav-link font-weight-bold customNavItem' +(status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }}>
                About us
              </NavLink>
            </li>
            {menuItems}
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle customNavItem" href="/" role="button" data-toggle="dropdown" aria-expanded="false" style={{ color: '#76885B' }}>
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-end" style={{ backgroundColor: 'white' }}>
                {user ?
                  <li className="dropdown-item">
                    <NavLink onClick={logout} className={'nav-link' + (status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }} >
                      Logout
                    </NavLink>
                  </li> :
                  <>
                    <li className="dropdown-item">
                      <NavLink to={"/register"} className={'nav-link' + (status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }} >
                        Register
                      </NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink to={"/login"} className={'nav-link' + (status => status.isActive ? 'active' : '')} style={{ color: '#76885B' }} >
                        Login
                      </NavLink>
                    </li>
                  </>
                }
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;