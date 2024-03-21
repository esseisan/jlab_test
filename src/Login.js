import React, { useState, useEffect } from 'react';

const Login = ({ onLogin, email, setEmail, password, setPassword, handleSubmit }) => {
    
  
    
  
    return (
      <div className='divLogin'>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
          <button type="submit">LOGIN</button>
        </form>
      </div>
    );
  };

  export default Login;