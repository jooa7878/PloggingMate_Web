import "./scss/App.scss";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PostList from "./pages/PostList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"



function App() {
  return (
    
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/postlist" exact component={PostList} />
        </BrowserRouter>
        <Footer></Footer>
      </div>
    
  );
}

export default App
