import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
