import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import web from "./images/web-development.avif"
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import aboutImg from "./images/web-development.avif"
import Error from "./components/Error";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home img={web} />} />
        <Route path="/service" render={() => <Service />} />
        <Route path="/about" render={() => <About img={aboutImg} />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route render={() => <Error />} />
      </Switch>
    </>
  );
}

export default App;
