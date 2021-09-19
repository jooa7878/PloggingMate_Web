import "./scss/App.scss";
import React, { useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PostList from "./pages/PostList";
import ReduxTest from "./pages/ReduxTest";
import Park from "./pages/Park";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostDetail from "./pages/PostDetail";
import CheckLogin from "./shared/CheckLogin";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.coords.longitude}&y=${position.coords.latitude}&input_coord=WGS84`,
          {
            headers: {
              Authorization: "KakaoAK c110186294e282609044a72dd378ffbf",
            },
          }
        )
        .then((res) => {
          const location = res.data.documents[0];
          console.log(location);
        });
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CheckLogin />
        <Navbar></Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/postlist" exact component={PostList} />
        <Route path="/park" exact component={Park} />
        <Route path="/postdetail/:id" component={PostDetail} />
        <Route path="/redux" exact component={ReduxTest} />
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
