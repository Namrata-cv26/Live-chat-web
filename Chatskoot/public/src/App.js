import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Chats from "../src/pages/Chats";
import SetAvatar from './pages/SetAvatar';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/About';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={ <Register /> }/>
      <Route path='/login' element={ <Login /> }/>
      <Route path='/setAvatar' element={ <SetAvatar /> }/>
      <Route path='/' element={ <Chats/> }/>
      <Route path="/home" element={<HomePage/>}/>

      <Route path="about" element={<AboutPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
