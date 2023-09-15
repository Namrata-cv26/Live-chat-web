import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { loginRoute } from '../utils/APIRoutes';

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, );
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   if( handleValidation()){
    const {password,  username} = values;
    const {data} = await axios.post(loginRoute, {
      username,
      password
    });
    if(data.status === false){
      toast.error(data.msg, toastOptions);
    } else {
      localStorage.setItem('chat-app-user', JSON.stringify(data.user));
    }
    navigate("/");
   };
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () =>{
    const {password, username} = values;
    if(password ===  ""){
      toast.error("Password required!", toastOptions);
      return false;
    } else if(username.length === ""){
      toast.error("Username required", toastOptions);
      return false;
    } 
    return true;
    }
  
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>CHATSKOOT</h1>
          </div>
          <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} min="3"/>
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
          <button type='submit' >Login</button>
          <span>Don't  have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color:black;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 6rem;
    }
    h1 {
      font-family:times-new-roman;
      color: #bd9a3a;
      text-transform: capitalize;
      font-style:italic;
      font-weight:bold;
    }
  }
  form {
    width:600px;
    height:500px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: black;
    border-radius: 3rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #866846;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    
    &:focus {
      border: 0.1rem solid #cfaa4;
      outline: none;
      
    }
  }
  button {
    background-color: #cfaa41;
    color: black;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      opacity:0.8;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    text-align:center;
    
    a {
      color: #cfaa41;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
export default Login