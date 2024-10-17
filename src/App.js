import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
const [isloginIn,SetIsloggedIn]=useState(false);

  return (
    <div className="w-[1263px] h-[850px] bg-[#0f172a] flex flex-col">
      <Navbar isloginIn={isloginIn} SetIsloggedIn={SetIsloggedIn}/>
      <Routes>
<Route path="/" element={<Home isloginIn={isloginIn}/>} />
<Route path="/login" element={<Login SetIsloggedIn={SetIsloggedIn}/>} />
<Route path="/signup" element={<Signup SetIsloggedIn={SetIsloggedIn}/>}/>
<Route path="/dashboard" element=

{
 <PrivateRoute>
<Dashboard/>
 </PrivateRoute> 
}/>


      </Routes>
      </div>
  );
}

export default App;
