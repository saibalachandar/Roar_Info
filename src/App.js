import './App.css';
import Card from './components/card/Card';
import ClubActivity from './components/clubActivity/ClubActivity';
import ClubWrite from './components/clubWrite/ClubWrite';
import Home from './components/Home/Home';
import Account from './components/account/Account';
import NavBar from './components/navBar/NavBar';
import ProfileCard from './components/profileCard/ProfileCard';
import Staff from './components/staff/Staff';
import Student from './components/student/Student';
import Register from './components/register/Register';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NotFound from './components/not fount/NotFound';
import Dept from './components/dept/Dept';
import CardStd from './components/card stud/CardStd';
import { AuthContext } from './components/context/AuthContext';
import { useContext } from 'react';
import ProfileInfo from './components/profileInfo/ProfileInfo';



function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exect element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/student" element={<Student />} />
        <Route path="/clubactivity/:id" element={<ClubActivity />} />
        <Route path="/clubactivity" element={<ClubActivity />} />
        <Route path="/clubwrite" element={<ClubWrite />} />
        <Route path="/account/:id" element={user ? <Account /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profileCard/:id" element={<ProfileCard />} />

        <Route path="/dept" element={<Dept />} />
        {/* <Route path="/student/:studentId" element={<ProfileCard />} /> */}
        <Route path="/card" element={<Card />} />
        <Route path="/profileInfo" element={<ProfileInfo />} />
        <Route path="/cardStd" element={<CardStd />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
