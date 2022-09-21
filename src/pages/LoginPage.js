import React, { useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import { Navigate, useNavigate } from "react-router-dom";

const LOGIN_URL = 'https://dummyjson.com/auth/login';

function LoginPage() {
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState('');
    const navigate = useNavigate();

    function handleFormSubmit({username, password}){
        console.log({username, password});
        setLoading(true);
        axios.post(LOGIN_URL,{username, password})
        .then(res => res.data)
        .then((user)=>{
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/posts');
        })
        .catch((err)=>{
          setError('Spmething went wrong');
          console.dir(err);
        })
        .finally(()=>{
          setLoading(false);
        });      
    }
  return (
    <>
      <div className="container h-full flex-center">
        <div>
          {error && <span className="error">{error}</span>}
          <LoginForm onSubmit={handleFormSubmit} loading={loading}/>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
