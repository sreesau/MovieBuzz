import { useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {setUser} from '../../store/authSlice';
import { Link } from "react-router-dom";

function Login(){
    var [username, setUsername] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function attemptLogin() {
        axios.post('http://127.0.0.1:8000/adminApi/login/',{
            username:username,
            password:password,
        }).then(response=>{
            setErrorMessage('')
            const user = {
                id: response.data.id,
                username: response.data.username,
                token: response.data.token,    
            }
            dispatch(setUser(user));
            navigate('/')
        }).catch(error => {
            console.error("Login error:", error);
            if (error.response && error.response.data) {
                if (error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else if (error.response.data.error) {  // Adjusted this line to check for 'error' key
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage('Failed to login user. Please contact admin');
                }
            } else {
                setErrorMessage('Failed to login user. Please contact admin');
            }
        });
    }
return (
   <div>
    <div className="container">
        <div className="row">
            <div className="col-6 offset-3">
            <div className="card text-center mt-4">
                  <div className="card-body">
                  <h1 className="card-title">Login</h1>
                {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                <div className="form-group">
                    <input type="text"
                    className="form-control rounded-pill"
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                    placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <input type="password"
                    className="form-control rounded-pill"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block rounded-pill" onClick={attemptLogin}>Login</button>
                </div>
                <div className="text-center">
                <p>Not a member?<Link className="text-primary" to="/register"> Register Now</Link></p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>)
}

export default Login;

