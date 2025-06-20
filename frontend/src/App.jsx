import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import SharedReport from './pages/SharedReport';
import Login from "./components/Login";     // Create this
import Signup from "./components/Signup";   // Create this
import Home from "./components/home";
import Medupload from "./components/medupload";
import ViewReports from "./components/viewReports";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <div>
    <Navigation />
    <Header data={data.Header} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Testimonials data={data.Testimonials} />
    <Team data={data.Team} />
    <Contact data={data.Contact} />
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage data={landingPageData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Medupload />} />
        <Route path="/reports" element={<ViewReports />} />
        <Route path="/shared/:token" element={<SharedReport />} />
      </Routes>
    </Router>
  );
};

export default App;
