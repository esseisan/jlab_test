import React, { useState, useEffect } from 'react';

const Home = ({ onLogout, geoInfo, setGeoInfo, HOME_API_URL, handleClear, handleSearch, ipAddress, setIpAddress, error }) => {

  
    useEffect(() => {
      // Fetch geolocation data for the logged-in user's IP
      fetch(HOME_API_URL)
        .then((response) => response.json())
        .then((data) => setGeoInfo(data))
        .catch((error) => console.error('Error fetching geolocation data:', error));
    }, []);
  
    
  
    return (
      <div>
        <h2>HOME</h2>
        <button onClick={onLogout} className='Logout'>Logout</button>
        <div className='divHome'>
            <div className='ipResult'>
                <p className='ipResultLabel'>IP Address: <b >{geoInfo?.ip}</b></p>
                <p className='ipResultLabel'>Country: <b >{geoInfo?.country}</b></p>
                <p className='ipResultLabel'>City: <b >{geoInfo?.city}</b></p>
                <p className='ipResultLabel'>Host Name: <b >{geoInfo?.hostname}</b></p>
            </div>
        </div>
        <div className='divHome2'>
          <input type="text" placeholder="Enter IP Address" id="search" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
          <button className='search' onClick={handleSearch}>SEARCH</button>
          <button className='clear' onClick={handleClear}>CLEAR</button>
        </div>
        {error && <p>{error}</p>}
      </div>
    );
  };

  export default Home;