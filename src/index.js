import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./componets/login";
import {BrowserRouter as Router, Redirect, Route, Routes, Switch, useHistory} from 'react-router-dom'
import Home from "./componets/home";
import Product from "./componets/product";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
        <Routes>
            <Route exact path='/' element={<Login />}/>
            <Route exact path='/home' element={<Home />}/>
            <Route exact path='/product' element={<Product />}/>
        </Routes>
    </Router>


);
