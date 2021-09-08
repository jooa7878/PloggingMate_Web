import "./scss/App.scss";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PostList from "./pages/PostList";
<<<<<<< HEAD
=======

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5

import Navbar from "./components/Navbar";
<<<<<<< HEAD
import Footer from "./components/Footer";

function App() {
  return (
<<<<<<< HEAD
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
=======
import Footer from "./components/Footer"



function App() {
  return (
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5
    
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
    
<<<<<<< HEAD
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5
  );
}

export default App
