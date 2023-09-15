import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { registerRoute } from '../utils/APIRoutes';

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",

    email: '',
    password: "",
    confirmPassword: '',
  });

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   if( handleValidation()){
    const {password,  username, email} = values;
    const {data} = await axios.post(registerRoute, {
      username,
      email,
      password,
    });
    if(data.status === false){
      toast.error(data.msg, toastOptions);
    } else {
      localStorage.setItem('chat-app-user', JSON.stringify(data.user));
    }
    navigate("/");
   };
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')) {
      navigate('/');
    }
  }, );

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () =>{
    const {password, confirmPassword, username, email} = values;
    if(password!==confirmPassword){
      toast.error("Enter correct Confirm Password!", toastOptions);
      return false;
    } else if(username.length < 3){
      toast.error("Username must be atleast 3 characters.", toastOptions);
      return false;
    } else if(password.length < 4){
      toast.error("Password must be atleast 4 characters.", toastOptions);
      return false;
    } else  if(email === "") {
      toast.error("Email is required", toastOptions);
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
          <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} />
          <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
          <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
          <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} />
          <button type='submit' >Create User</button>
          <span>Already have an account? <Link to="/login">Login</Link>
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
      height: 5.5rem;
      padding-right:15px;
      
    }
    h1 {
      font-family:times-new-roman;
      color: #bd9a3a;
      text-transform: capitalize;
      font-style:italic;
      font-weight:bold;
      margin-left:0px;
    }
  }
  form {
    width:600px;
    height:650px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: black;
    border-radius: 2rem;
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
    place-items:center;
    &:focus {
      border: 0.1rem solid #cfaa4;
      outline: none;
    }
  }
  button {
    background-color:#cfaa41;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    width:100%;
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
export default Register