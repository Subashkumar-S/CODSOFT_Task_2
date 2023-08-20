import React from "react";
import Nav from "./components/Navbar"
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col">
      <Nav />
      <Home />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
