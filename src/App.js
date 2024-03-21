import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import apiRequest from './apiRequest';



function App() {

// declare all const needed
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [ipAddress, setIpAddress] = useState('');
const [geoInfo, setGeoInfo] = useState(null);
const [error, setError] = useState(null);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const USER_CREDENTIALS = {
  email: 'user@example.com',
  password: 'password123',
  ip: '136.158.126.94'
};

//link for Geo API
const HOME_API_URL = 'https://ipinfo.io/';

useEffect(() => {
  const userLoggedIn = localStorage.getItem('isLoggedIn');
  if (userLoggedIn === 'true') {
    setIsLoggedIn(true);
  }
}, []);

const handleLogin = (email, password) => {
  if (email === USER_CREDENTIALS.email && password === USER_CREDENTIALS.password) {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    setIpAddress(USER_CREDENTIALS.ip);
  } else {
    alert('Invalid credentials. Please try again...');
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  handleLogin(email, password);
};

//HOME FUNCTIONS =======================================================================================

const handleLogout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem('isLoggedIn');
};

const handleSearch = (search) => {
  // Validate IP address format
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (ipRegex.test(ipAddress)) {
    // Fetch geolocation data for the entered IP
    fetch(`${HOME_API_URL}/${ipAddress}/geo`)
      .then((response) => response.json())
      .then((data) => {
        setGeoInfo(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching geolocation data:', error);
        setError('Error fetching geolocation data. Please try again.');
      });
  } else {
    setError('Invalid IP address format. Please enter a valid IP.');
  }
};

const handleClear = () => {
  // Reset the search, set IP Address to me: 136.158.126.94
  setIpAddress('');
  setError(null);
  fetch(`${HOME_API_URL}/${USER_CREDENTIALS.ip}/geo`)
    .then((response) => response.json())
    .then((data) => setGeoInfo(data))
    .catch((error) => console.error('Error fetching geolocation data:', error));
};

//HOME FUNCTIONS =======================================================================================

  return (
    <div className="App">
  
     
        
        <Routes>

          <Route exact path='/login' element={isLoggedIn ? <Navigate to="/" /> : <Login 
            onLogin={handleLogin}
            email={email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}  
            handleSubmit={handleSubmit}
          />}>
            
          </Route>
          <Route exact path='/' element={ !isLoggedIn ? <Navigate to="/login" /> : 
              <Home 
                onLogout = {handleLogout}
                geoInfo = {geoInfo}
                setGeoInfo = {setGeoInfo}
                HOME_API_URL={HOME_API_URL}
                ipAddress = {ipAddress}
                setIpAddress = {setIpAddress}
                handleClear = {handleClear}
                handleSearch = {handleSearch}
                error = {error}
              />}>  
          </Route>

        </Routes>
      
    

    </div>
  );
}

export default App;


{/* <Route exact path='/login' element={<Login onLogin={handleLogin}/>}></Route>
          <Route exact path='/' element={
              <Home 
                onLogout = {handleLogout}
                geoInfo = {geoInfo}
                setGeoInfo = {setGeoInfo}
                HOME_API_URL={HOME_API_URL}
                ipAddress = {ipAddress}
                setIpAddress = {setIpAddress}
                handleClear = {handleClear}
                handleSearch = {handleSearch}
                error = {error}
              />}
          /> */}
