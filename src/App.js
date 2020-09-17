import React from "react";
import Header from "./components/Header";
import HomeBody from "./components/HomeBody";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={HomeBody} />
          <Route path="*" component={HomeBody} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
