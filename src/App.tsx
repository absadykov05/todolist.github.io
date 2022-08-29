import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import DoneTask from "./Components/Pages/DoneTask";
import {Link, Route, Routes} from 'react-router-dom';
import Archive from "./Components/Pages/Archive";
import {hideMenu} from "./Redux/Slices/contextMenuSlice";
import {useDispatch, useSelector} from "react-redux";
import SignIn from "./Components/Firebase/SignIn";
import Login from "./Components/Firebase/Login";
import SideBlock from "./Components/SideBlock/SideBlock";
import {hideBlock} from "./Redux/Slices/sideBlockSlice";

function App() {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(hideMenu());
    }
  return (
    <div className='App' onClick={onClick}>
        <Header/>
      <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/done' element = {<DoneTask/>}/>
            <Route path = '/archive' element = {<Archive/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/sign_in' element = {<SignIn/>}/>
        </Routes>
        <SideBlock/>
    </div>
  );
}

export default App;
