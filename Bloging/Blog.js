import React from "react";
import "./style.css";
import { BrowserRouter, Router,Routes,Route } from "react-router-dom";

function Blog() {
  return (
    <BrowserRouter>
   <div className="blog-container">
      <Navbar />
      <div className="content-container">
   
         <Routes>
         <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
         </Routes>
     
      </div>
      <Footer />
      </div>
      </BrowserRouter>
 
  );
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to My Blog</h1>
      <p>Here you will find my latest thoughts and musings</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>I am a passionate writer and love to share my thoughts and ideas</p>
    </div>
  );
};

const Footer = () => {
  return <footer className="footer">Copyright &copy; My Blog</footer>;
};

export default Blog;
