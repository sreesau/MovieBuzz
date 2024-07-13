import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
    var [username, setUsername] = useState('');
    var [email, setEmail] = useState('');
    var [password1, setPassword1] = useState('');
    var [password2, setPassword2] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();
    function registerUser(){
        var user = {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }
        axios.post('http://127.0.0.1:8000/adminApi/register/',user)
        .then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
    return <div>
        <div className="container rounded">
            <div className="row">
                <div className="col-6 offset-3">
                <div className="card text-center mt-4">
                  <div className="card-body">
                  <h1 className="card-title">Create Account</h1>
                    {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
                    <div className="form-group">
                        <input type="text"
                        className="form-control rounded-pill"
                        value={username}
                        onInput={(event)=>setUsername(event.target.value)}
                        placeholder="Username"
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                        className="form-control rounded-pill"
                        value={email}
                        onInput={(event)=>setEmail(event.target.value)}
                        placeholder="Email Address"

                        />
                    </div>
                    <div className="form-group">
                        <input type="password"
                        className="form-control rounded-pill"
                        value={password1}
                        onInput={(event)=>setPassword1(event.target.value)}
                        placeholder="Password"
                        />
                    </div>
                    <div className="form-group">

                        <input type="password"
                        className="form-control rounded-pill"
                        value={password2}
                        onInput={(event)=>setPassword2(event.target.value)}
                         placeholder="Confirm Password"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary btn-block rounded-pill" onClick={registerUser}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
}

export default Register;