import React from "react";
import './Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="layout">

                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/TrendTwitter">Trend Twitter</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/Dashboard">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/SignIn">Sign-In</Link> &nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/HomeAd">-----</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/HomeAd">Home Admin</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/TrendTwitterAD">Trend Twitter</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/DashboardAD">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;



            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
