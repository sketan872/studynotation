import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GuessTheNumber from "./components/adminPage"
function App() {
const [isloginIn,SetIsloggedIn]=useState(false);

  return (
    <div className="w-[1263px] h-[800px] bg-[#0f172a] flex flex-col">
      <Navbar isloginIn={isloginIn} SetIsloggedIn={SetIsloggedIn}/>
      <Routes>
<Route path="/" element={<Home isloginIn={isloginIn}/>} />
<Route path="/About" element={<About isloginIn={isloginIn}/> }/>
<Route path="/login" element={<Login SetIsloggedIn={SetIsloggedIn}/>} />
<Route path="/signup" element={<Signup SetIsloggedIn={SetIsloggedIn}/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route pth="game1" element={<GuessTheNumber/>}/>
<Route path="/dashboard" element={
<Dashboard/>
}/>


      </Routes>
      </div>
  );
}

export default App;
