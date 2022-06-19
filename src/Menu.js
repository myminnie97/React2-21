import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pagesUser/Home";
import TrendTw from "./pagesUser/TrendTw";
import Dashboard from "./pagesUser/Dashboard";
import NoPage from "./pagesUser/NoPage";
import SignIn from "./SignIn/SignIn";
import HomeAd from "./pagesAdmin/HomeAd";
import TrendTwitterAD from "./pagesAdmin/TrendTwitterAD";
import DashboardAD from "./pagesAdmin/DashboardAD";



export default function Menu() {
  return (
<div>
    
    <BrowserRouter className="Menu">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TrendTwitter" element={<TrendTw /> } />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="HomeAd" element={<HomeAd />} />
          <Route path="TrendTwitterAD" element={<TrendTwitterAD />} />
          <Route path="DashboardAD" element={<DashboardAD />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}