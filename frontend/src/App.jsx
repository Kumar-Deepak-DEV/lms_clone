import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDash";
import Attendance from "./pages/Attendance";
import CalendarPage from "./pages/StudentCalendar";
import Navbar from "./components/Navbar";
import ApplyLeave from "./pages/ApplyLeave";
import Profile from "./pages/Profile";
import StudentEvents from "./pages/StudentEvents";
// import 

function App() {
  return (

    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path = "/attendance" element={<Attendance/>} />
      <Route path="/Calendar" element={<CalendarPage/>} />
      <Route path="/apply-leave" element={<ApplyLeave/>} />
      <Route path="/student/profile" element={<Profile/>} />
      <Route path="/student/events" element={<StudentEvents/>} />
      
    </Routes>
    </>
  );
}

export default App;