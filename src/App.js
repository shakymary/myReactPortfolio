import React from "react";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/skills">
            <Header />
            <Skills />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Header />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <HomeBody />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
