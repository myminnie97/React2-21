import React from "react";
import './App.css'
import Header from "./Header/Header";
import AppFooter from "./Footer/AppFooter"
import Menu from "./Menu"




export default function App() {
  return (
    <div>
        <Header />
        <Menu />       
        <AppFooter />
    </div>
  );
}



