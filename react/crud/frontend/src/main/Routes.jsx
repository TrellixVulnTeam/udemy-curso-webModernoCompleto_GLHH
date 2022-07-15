/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'
import Home from "../components/home/Home";
import UserCrud from "../components/user/userCrud";


export default props => 
{    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>    
}